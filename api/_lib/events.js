import fs from "node:fs";
import path from "node:path";

const MAX = 8000;
const mem = (globalThis.__HQ_EVENTS__ ||= []);

function storeFile() {
  if (process.env.VERCEL) return "/tmp/hq-analytics.json";
  return path.join(process.cwd(), ".data", "hq-analytics.json");
}

function readFileStore() {
  try {
    const raw = fs.readFileSync(storeFile(), "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeFileStore(list) {
  try {
    const file = storeFile();
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(list.slice(0, MAX)));
  } catch {
    /* read-only fs — lieka atmintyje */
  }
}

const ALLOWED_TYPE = new Set(["pageview", "view_end", "product_view", "add_to_cart", "begin_checkout", "purchase"]);
const ALLOWED_SHOP = new Set(["silta", "ramu", "ziburys"]);
const ALLOWED_DEVICE = new Set(["telefonas", "planšetė", "kompiuteris"]);

export function sanitizeEvent(input) {
  if (!input || typeof input !== "object") return null;
  const type = String(input.type || "");
  const shop = String(input.shop || "");
  if (!ALLOWED_TYPE.has(type) || !ALLOWED_SHOP.has(shop)) return null;
  const pathName = String(input.path || "").slice(0, 300);
  if (!pathName.startsWith("/")) return null;
  if (/\/(analitika|uzsakymai|reklamos|tiekejai)(\/|$)/.test(pathName)) return null;
  const device = ALLOWED_DEVICE.has(input.device) ? input.device : "kompiuteris";
  const t = Number(input.t);
  return {
    id: String(input.id || "").slice(0, 40) || `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
    t: Number.isFinite(t) && t > 0 ? t : Date.now(),
    shop,
    type,
    path: pathName,
    title: String(input.title || "").slice(0, 160),
    referrer: String(input.referrer || "").slice(0, 300),
    source: String(input.source || "tiesiogiai").slice(0, 80),
    medium: String(input.medium || "none").slice(0, 40),
    campaign: String(input.campaign || "").slice(0, 80),
    session: String(input.session || "").slice(0, 40),
    device,
    slug: input.slug ? String(input.slug).slice(0, 80) : undefined,
    value: Number.isFinite(Number(input.value)) ? Number(input.value) : undefined,
    ms: Number.isFinite(Number(input.ms)) ? Math.min(Math.max(0, Number(input.ms)), 60 * 60 * 1000) : undefined,
    scroll: Number.isFinite(Number(input.scroll)) ? Math.min(100, Math.max(0, Number(input.scroll))) : undefined,
    host: String(input.host || "").slice(0, 80),
    screen: String(input.screen || "").slice(0, 20),
    lang: String(input.lang || "").slice(0, 16),
  };
}

export function appendEvents(rawList) {
  const incoming = (Array.isArray(rawList) ? rawList : [rawList]).map(sanitizeEvent).filter(Boolean);
  if (!incoming.length) return 0;
  const file = readFileStore();
  const seen = new Set([...mem, ...file].map((e) => e.id));
  const fresh = incoming.filter((e) => !seen.has(e.id));
  for (const e of fresh) mem.unshift(e);
  const merged = [...fresh, ...file].slice(0, MAX);
  writeFileStore(merged);
  if (mem.length > MAX) mem.length = MAX;
  return fresh.length;
}

export function loadStoredEvents() {
  const file = readFileStore();
  const map = new Map();
  for (const e of [...mem, ...file]) {
    if (e && e.id && !map.has(e.id)) map.set(e.id, e);
  }
  return [...map.values()].sort((a, b) => b.t - a.t).slice(0, MAX);
}
