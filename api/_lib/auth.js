import { createHmac, timingSafeEqual } from "node:crypto";

export const COOKIE = "hq_session";
const TTL_SEC = 14 * 24 * 60 * 60;
const fails = new Map();

export function hqPassword() {
  return String(process.env.HQ_PASSWORD || "").trim();
}

function signingKey(password) {
  return createHmac("sha256", "silta-hq-lock-v1").update(password).digest();
}

export function signSession(password) {
  const exp = Date.now() + TTL_SEC * 1000;
  const payload = Buffer.from(JSON.stringify({ exp, v: 1 })).toString("base64url");
  const sig = createHmac("sha256", signingKey(password)).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function sessionOk(token, password) {
  if (!token || !password) return false;
  const [payload, sig] = String(token).split(".");
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", signingKey(password)).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function passwordOk(given, expected) {
  if (!expected || !given) return false;
  const ha = createHmac("sha256", "hq-cmp").update(String(given)).digest();
  const hb = createHmac("sha256", "hq-cmp").update(String(expected)).digest();
  return timingSafeEqual(ha, hb);
}

export function readCookie(req, name = COOKIE) {
  const raw = req.headers?.cookie || "";
  const parts = String(raw).split(/;\s*/);
  for (const part of parts) {
    const i = part.indexOf("=");
    if (i === -1) continue;
    if (part.slice(0, i) === name) return decodeURIComponent(part.slice(i + 1));
  }
  return "";
}

function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.trim()) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "local";
}

export function loginBlocked(req) {
  const row = fails.get(clientIp(req));
  if (!row) return false;
  if (Date.now() > row.until) {
    fails.delete(clientIp(req));
    return false;
  }
  return row.n >= 8;
}

export function loginFail(req) {
  const ip = clientIp(req);
  const row = fails.get(ip) || { n: 0, until: Date.now() + 15 * 60 * 1000 };
  row.n += 1;
  row.until = Date.now() + 15 * 60 * 1000;
  fails.set(ip, row);
}

export function loginClear(req) {
  fails.delete(clientIp(req));
}

export function cookieHeader(req, token, clear = false) {
  const host = String(req.headers?.host || "");
  const secure = !/localhost|127\.0\.0\.1/i.test(host);
  if (clear) {
    return `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure ? "; Secure" : ""}`;
  }
  return `${COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${TTL_SEC}${secure ? "; Secure" : ""}`;
}

export function sendJson(res, status, data, extraHeaders = {}) {
  const body = JSON.stringify(data);
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  for (const [k, v] of Object.entries(extraHeaders)) res.setHeader(k, v);
  res.end(body);
}
