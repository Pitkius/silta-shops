import type { ShopId } from "./products";

export type SiteId = ShopId | "hq";
export type TrackType = "pageview" | "add_to_cart" | "begin_checkout" | "purchase";
export type Device = "telefonas" | "planšetė" | "kompiuteris";

export type TrackEvent = {
  id: string;
  t: number;
  shop: SiteId;
  type: TrackType;
  path: string;
  title: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  session: string;
  device: Device;
  slug?: string;
  value?: number;
};

const KEY = "hq-analytics";
const SESSION_KEY = "hq-session";
const UTM_KEY = "hq-utm";
const MAX = 4000;
const SESSION_MS = 30 * 60 * 1000;

let lastPageview = { path: "", t: 0 };

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

function deviceNow(): Device {
  const w = window.innerWidth;
  if (w < 760) return "telefonas";
  if (w < 1100) return "planšetė";
  return "kompiuteris";
}

function sessionId() {
  const now = Date.now();
  const cur = read<{ id: string; at: number }>(SESSION_KEY, { id: "", at: 0 });
  if (cur.id && now - cur.at < SESSION_MS) {
    const next = { id: cur.id, at: now };
    localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    return cur.id;
  }
  const fresh = { id: uid(), at: now };
  localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
  return fresh.id;
}

function takeUtm(search: string) {
  const q = new URLSearchParams(search);
  const fromUrl = {
    source: q.get("utm_source") || "",
    medium: q.get("utm_medium") || "",
    campaign: q.get("utm_campaign") || "",
  };
  if (fromUrl.source || fromUrl.medium || fromUrl.campaign) {
    sessionStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
    return fromUrl;
  }
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || "null") || { source: "", medium: "", campaign: "" };
  } catch {
    return { source: "", medium: "", campaign: "" };
  }
}

function sourceLabel(utmSource: string, referrer: string) {
  if (utmSource) return utmSource.toLowerCase();
  if (!referrer) return "tiesiogiai";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (host.includes("facebook") || host.includes("fb.")) return "facebook";
    if (host.includes("instagram")) return "instagram";
    if (host.includes("tiktok")) return "tiktok";
    if (host.includes("google")) return "google";
    if (host.includes("localhost") || host === window.location.hostname) return "viduje";
    return host;
  } catch {
    return "kita";
  }
}

export function loadEvents(): TrackEvent[] {
  return read<TrackEvent[]>(KEY, []).filter((e) => e && typeof e.t === "number");
}

function persist(events: TrackEvent[]) {
  localStorage.setItem(KEY, JSON.stringify(events.slice(0, MAX)));
}

export function track(partial: Omit<TrackEvent, "id" | "t" | "title" | "referrer" | "source" | "medium" | "campaign" | "session" | "device"> & Partial<TrackEvent>) {
  const utm = takeUtm(window.location.search);
  const referrer = document.referrer || "";
  const event: TrackEvent = {
    id: uid(),
    t: Date.now(),
    title: document.title,
    referrer,
    source: sourceLabel(utm.source, referrer),
    medium: utm.medium || (utm.source ? "ads" : referrer ? "referral" : "none"),
    campaign: utm.campaign,
    session: sessionId(),
    device: deviceNow(),
    shop: partial.shop,
    type: partial.type,
    path: partial.path,
    slug: partial.slug,
    value: partial.value,
  };
  persist([event, ...loadEvents()]);
  const ingest = import.meta.env.VITE_ANALYTICS_INGEST as string | undefined;
  if (ingest && navigator.sendBeacon) {
    try {
      navigator.sendBeacon(ingest, JSON.stringify(event));
    } catch {
      /* demo — be serverio lieka lokaliai */
    }
  }
}

export function trackPageview(shop: SiteId, path: string) {
  const now = Date.now();
  if (lastPageview.path === path && now - lastPageview.t < 1600) return;
  lastPageview = { path, t: now };
  track({ shop, type: "pageview", path });
}

export function isOperatorPath(path: string) {
  return /\/(analitika|uzsakymai|reklamos|tiekejai)(\/|$)/.test(path) || path === "/analitika" || path === "/uzsakymai";
}

export type RangeKey = "siandien" | "7d" | "30d" | "viskas";

export function rangeStart(key: RangeKey) {
  const now = Date.now();
  if (key === "siandien") {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }
  if (key === "7d") return now - 7 * 24 * 60 * 60 * 1000;
  if (key === "30d") return now - 30 * 24 * 60 * 60 * 1000;
  return 0;
}

function countBy<T extends string>(items: T[]) {
  const map = new Map<T, number>();
  for (const i of items) map.set(i, (map.get(i) || 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([label, n]) => ({ label, n }));
}

export function summarize(events: TrackEvent[], from: number, includeHq: boolean) {
  const list = events.filter((e) => e.t >= from && (includeHq || e.shop !== "hq") && (includeHq || !isOperatorPath(e.path)));
  const pageviews = list.filter((e) => e.type === "pageview");
  const carts = list.filter((e) => e.type === "add_to_cart");
  const checkouts = list.filter((e) => e.type === "begin_checkout");
  const purchases = list.filter((e) => e.type === "purchase");
  const sessions = new Set(list.map((e) => e.session));
  const sessionsCart = new Set(carts.map((e) => e.session));
  const sessionsPay = new Set(checkouts.map((e) => e.session));
  const sessionsBuy = new Set(purchases.map((e) => e.session));
  const byShop = countBy(list.map((e) => e.shop));
  const byPage = countBy(pageviews.map((e) => e.path)).slice(0, 12);
  const bySource = countBy(list.map((e) => e.source || "tiesiogiai"));
  const byDevice = countBy(list.map((e) => e.device));
  const dayKey = (t: number) => new Date(t).toISOString().slice(0, 10);
  const dayMap = new Map<string, number>();
  for (const e of pageviews) {
    const k = dayKey(e.t);
    dayMap.set(k, (dayMap.get(k) || 0) + 1);
  }
  const byDay = [...dayMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([label, n]) => ({ label, n }));
  const revenue = purchases.reduce((n, e) => n + (e.value || 0), 0);
  const sess = sessions.size || 1;
  return {
    pageviews: pageviews.length,
    sessions: sessions.size,
    carts: carts.length,
    checkouts: checkouts.length,
    purchases: purchases.length,
    revenue,
    cartRate: sessions.size ? Math.round((sessionsCart.size / sess) * 1000) / 10 : 0,
    payRate: sessions.size ? Math.round((sessionsPay.size / sess) * 1000) / 10 : 0,
    buyRate: sessions.size ? Math.round((sessionsBuy.size / sess) * 1000) / 10 : 0,
    byShop,
    byPage,
    bySource,
    byDevice,
    byDay,
    recent: list.slice(0, 40),
  };
}
