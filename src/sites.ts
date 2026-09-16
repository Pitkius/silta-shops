import { getShop, shops, type Shop } from "./shops";
import type { ShopId } from "./data/products";

export const HQ_DOMAIN = (import.meta.env.VITE_HQ_DOMAIN as string | undefined) || "hq.lt";

export function hostnameNow() {
  return window.location.hostname.replace(/^www\./, "").toLowerCase();
}

export function isLocalHost(host = hostnameNow()) {
  return host === "localhost" || host === "127.0.0.1" || host.endsWith(".localhost");
}

/** Vercel preview/production URL — dar be silta.lt DNS, vitrinos eina per /silta. */
export function usesPathShops(host = hostnameNow()) {
  return isLocalHost(host) || host.endsWith(".vercel.app");
}

export function getShopFromHost(host = hostnameNow()): Shop | undefined {
  return shops.find((s) => host === s.domain || host === `${s.id}.localhost`);
}

export function hqOrigin() {
  const { protocol, hostname, port } = window.location;
  const portPart = port ? `:${port}` : "";
  if (isLocalHost()) {
    const h = hostname.endsWith(".localhost") ? "localhost" : hostname;
    return `${protocol}//${h}${portPart}`;
  }
  return `https://${HQ_DOMAIN}`;
}

export function shopLiveUrl(shop: Shop, path = "/") {
  const p = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `https://${shop.domain}${p}`;
}

export function shopLocalPath(shopId: ShopId, path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? `/${shopId}` : `/${shopId}${p}`;
}

/** Nuoroda į vitriną: lokaliai tas pats origin, gyvai — parduotuvės domenas. */
export function shopHref(shopId: ShopId, path = "/") {
  const shop = getShop(shopId);
  if (!shop) return "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  const hosted = getShopFromHost();
  if (hosted?.id === shopId) return p === "/" ? "/" : p;
  if (usesPathShops()) return shopLocalPath(shopId, p);
  return shopLiveUrl(shop, p);
}

export function hqHref(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (getShopFromHost()) return `${hqOrigin()}${p === "/" ? "" : p}`;
  return p;
}

export function isExternalHref(to: string) {
  return to.startsWith("http://") || to.startsWith("https://");
}
