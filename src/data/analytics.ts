import type { ShopId } from "./products";

export type SiteId = ShopId | "hq";
export type TrackType = "pageview" | "view_end" | "product_view" | "add_to_cart" | "begin_checkout" | "purchase";
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
  ms?: number;
  scroll?: number;
  host?: string;
  screen?: string;
  lang?: string;
};

const KEY = "hq-analytics";
const SESSION_KEY = "hq-session";
const UTM_KEY = "hq-utm";
const MAX = 8000;
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

export function slugFromPath(path: string) {
  const m = path.match(/\/p\/([^/?#]+)/);
  return m?.[1];
}

export function loadEvents(): TrackEvent[] {
  return read<TrackEvent[]>(KEY, []).filter((e) => e && typeof e.t === "number");
}

function persist(events: TrackEvent[]) {
  localStorage.setItem(KEY, JSON.stringify(events.slice(0, MAX)));
}

function ship(event: TrackEvent) {
  const ingest = (import.meta.env.VITE_ANALYTICS_INGEST as string | undefined) || "/api/collect";
  const payload = JSON.stringify({ events: [event] });
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ingest, new Blob([payload], { type: "application/json" }));
      return;
    }
  } catch {
    /* lieka lokaliai */
  }
  fetch(ingest, { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).catch(
    () => undefined
  );
}

export function mergeRemoteEvents(remote: TrackEvent[]) {
  const local = loadEvents();
  const map = new Map<string, TrackEvent>();
  for (const e of [...remote, ...local]) {
    if (e?.id) map.set(e.id, e);
  }
  const next = [...map.values()].sort((a, b) => b.t - a.t).slice(0, MAX);
  persist(next);
  return next;
}

export function track(
  partial: Omit<TrackEvent, "id" | "t" | "title" | "referrer" | "source" | "medium" | "campaign" | "session" | "device"> &
    Partial<TrackEvent>
) {
  if (partial.shop === "hq" || isOperatorPath(partial.path)) return;
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
    slug: partial.slug || slugFromPath(partial.path),
    value: partial.value,
    ms: partial.ms,
    scroll: partial.scroll,
    host: window.location.host,
    screen: `${window.innerWidth}×${window.innerHeight}`,
    lang: navigator.language || "",
  };
  persist([event, ...loadEvents()]);
  ship(event);
}

export function trackPageview(shop: SiteId, path: string) {
  if (shop === "hq" || isOperatorPath(path)) return;
  const now = Date.now();
  if (lastPageview.path === path && now - lastPageview.t < 1600) return;
  lastPageview = { path, t: now };
  const slug = slugFromPath(path);
  track({ shop, type: "pageview", path, slug });
  if (slug) track({ shop, type: "product_view", path, slug });
}

export function trackViewEnd(shop: SiteId, path: string, ms: number, scroll: number) {
  if (shop === "hq" || isOperatorPath(path)) return;
  track({ shop, type: "view_end", path, slug: slugFromPath(path), ms, scroll });
}

export function isOperatorPath(path: string) {
  return /\/(analitika|uzsakymai|reklamos|tiekejai)(\/|$)/.test(path) || path === "/analitika" || path === "/uzsakymai";
}

export type RangeKey = "siandien" | "24h" | "7d" | "30d" | "viskas";
export type ShopFilter = ShopId | "visos";

export function rangeStart(key: RangeKey) {
  const now = Date.now();
  if (key === "siandien") {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }
  if (key === "24h") return now - 24 * 60 * 60 * 1000;
  if (key === "7d") return now - 7 * 24 * 60 * 60 * 1000;
  if (key === "30d") return now - 30 * 24 * 60 * 60 * 1000;
  return 0;
}

function countBy<T extends string>(items: T[]) {
  const map = new Map<T, number>();
  for (const i of items) map.set(i, (map.get(i) || 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([label, n]) => ({ label, n }));
}

function prettyPath(path: string) {
  const cut = path.replace(/^\/(silta|ramu|ziburys)/, "") || "/";
  return cut;
}

export type SessionRow = {
  id: string;
  shop: SiteId;
  start: number;
  end: number;
  pages: number;
  landing: string;
  exit: string;
  source: string;
  campaign: string;
  device: Device;
  converted: boolean;
  revenue: number;
  bounce: boolean;
  events: TrackEvent[];
};

export function buildSessions(events: TrackEvent[]): SessionRow[] {
  const map = new Map<string, TrackEvent[]>();
  for (const e of events) {
    const list = map.get(e.session) || [];
    list.push(e);
    map.set(e.session, list);
  }
  return [...map.entries()]
    .map(([id, list]) => {
      const ordered = [...list].sort((a, b) => a.t - b.t);
      const views = ordered.filter((e) => e.type === "pageview");
      const buys = ordered.filter((e) => e.type === "purchase");
      return {
        id,
        shop: ordered[0]?.shop || "silta",
        start: ordered[0]?.t || 0,
        end: ordered[ordered.length - 1]?.t || 0,
        pages: views.length,
        landing: prettyPath(views[0]?.path || ordered[0]?.path || "/"),
        exit: prettyPath(views[views.length - 1]?.path || ordered[ordered.length - 1]?.path || "/"),
        source: ordered[0]?.source || "tiesiogiai",
        campaign: ordered.find((e) => e.campaign)?.campaign || "",
        device: ordered[0]?.device || "kompiuteris",
        converted: buys.length > 0,
        revenue: buys.reduce((n, e) => n + (e.value || 0), 0),
        bounce: views.length <= 1 && !ordered.some((e) => e.type === "add_to_cart" || e.type === "purchase"),
        events: ordered,
      };
    })
    .sort((a, b) => b.start - a.start);
}

export function summarize(events: TrackEvent[], from: number, shop: ShopFilter) {
  const list = events.filter((e) => {
    if (e.t < from) return false;
    if (e.shop === "hq" || isOperatorPath(e.path)) return false;
    if (shop !== "visos" && e.shop !== shop) return false;
    return true;
  });
  const pageviews = list.filter((e) => e.type === "pageview");
  const productViews = list.filter((e) => e.type === "product_view");
  const carts = list.filter((e) => e.type === "add_to_cart");
  const checkouts = list.filter((e) => e.type === "begin_checkout");
  const purchases = list.filter((e) => e.type === "purchase");
  const ends = list.filter((e) => e.type === "view_end");
  const sessions = buildSessions(list);
  const sessionsCart = new Set(carts.map((e) => e.session));
  const sessionsPay = new Set(checkouts.map((e) => e.session));
  const sessionsBuy = new Set(purchases.map((e) => e.session));
  const sess = sessions.length || 1;
  const dwellTotal = ends.reduce((n, e) => n + (e.ms || 0), 0);
  const scrollAvg = ends.length ? ends.reduce((n, e) => n + (e.scroll || 0), 0) / ends.length : 0;

  const productMap = new Map<string, { slug: string; views: number; carts: number; buys: number; revenue: number }>();
  function row(slug: string) {
    const cur = productMap.get(slug) || { slug, views: 0, carts: 0, buys: 0, revenue: 0 };
    productMap.set(slug, cur);
    return cur;
  }
  for (const e of productViews) if (e.slug) row(e.slug).views += 1;
  for (const e of carts) if (e.slug) row(e.slug).carts += 1;
  for (const e of purchases) if (e.slug) {
    const r = row(e.slug);
    r.buys += 1;
    r.revenue += e.value || 0;
  }

  const hourMap = new Map<string, number>();
  for (let h = 0; h < 24; h++) hourMap.set(String(h).padStart(2, "0"), 0);
  for (const e of pageviews) {
    const h = String(new Date(e.t).getHours()).padStart(2, "0");
    hourMap.set(h, (hourMap.get(h) || 0) + 1);
  }

  const dayKey = (t: number) => new Date(t).toISOString().slice(0, 10);
  const dayMap = new Map<string, number>();
  for (const e of pageviews) {
    const k = dayKey(e.t);
    dayMap.set(k, (dayMap.get(k) || 0) + 1);
  }

  const bounceN = sessions.filter((s) => s.bounce).length;
  const revenue = purchases.reduce((n, e) => n + (e.value || 0), 0);

  return {
    list,
    pageviews: pageviews.length,
    productViews: productViews.length,
    sessions: sessions.length,
    carts: carts.length,
    checkouts: checkouts.length,
    purchases: purchases.length,
    revenue,
    cartRate: sessions.length ? Math.round((sessionsCart.size / sess) * 1000) / 10 : 0,
    payRate: sessions.length ? Math.round((sessionsPay.size / sess) * 1000) / 10 : 0,
    buyRate: sessions.length ? Math.round((sessionsBuy.size / sess) * 1000) / 10 : 0,
    bounceRate: sessions.length ? Math.round((bounceN / sessions.length) * 1000) / 10 : 0,
    avgPages: sessions.length ? Math.round((pageviews.length / sessions.length) * 10) / 10 : 0,
    avgDwellSec: ends.length ? Math.round(dwellTotal / ends.length / 100) / 10 : 0,
    avgScroll: Math.round(scrollAvg),
    byShop: countBy(list.map((e) => e.shop as string)),
    byPage: countBy(pageviews.map((e) => prettyPath(e.path))).slice(0, 16),
    byLanding: countBy(sessions.map((s) => s.landing)).slice(0, 12),
    byExit: countBy(sessions.map((s) => s.exit)).slice(0, 12),
    bySource: countBy(list.map((e) => e.source || "tiesiogiai")),
    byCampaign: countBy(list.map((e) => e.campaign || "be kampanijos")),
    byDevice: countBy(list.map((e) => e.device)),
    byHour: [...hourMap.entries()].map(([label, n]) => ({ label: `${label}h`, n })),
    byDay: [...dayMap.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([label, n]) => ({ label, n })),
    byProduct: [...productMap.values()].sort((a, b) => b.views - a.views || b.carts - a.carts),
    sessionRows: sessions,
    recent: list.slice(0, 80),
    views: pageviews.slice(0, 200),
  };
}

export function eventsToCsv(events: TrackEvent[]) {
  const cols = ["t", "shop", "type", "path", "slug", "source", "campaign", "device", "session", "ms", "scroll", "value"];
  const lines = [cols.join(",")];
  for (const e of events) {
    const row = [
      new Date(e.t).toISOString(),
      e.shop,
      e.type,
      e.path,
      e.slug || "",
      e.source,
      e.campaign,
      e.device,
      e.session,
      e.ms ?? "",
      e.scroll ?? "",
      e.value ?? "",
    ].map((v) => `"${String(v).replaceAll('"', '""')}"`);
    lines.push(row.join(","));
  }
  return lines.join("\n");
}
