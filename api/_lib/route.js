import { appendEvents, loadStoredEvents } from "./events.js";
import {
  cookieHeader,
  hqPassword,
  loginBlocked,
  loginClear,
  loginFail,
  passwordOk,
  readCookie,
  sendJson,
  sessionOk,
  signSession,
} from "./auth.js";

function requireHq(req, res) {
  const password = hqPassword();
  if (!password) {
    sendJson(res, 503, { ok: false, error: "not_configured" });
    return false;
  }
  if (!sessionOk(readCookie(req), password)) {
    sendJson(res, 401, { ok: false });
    return false;
  }
  return true;
}

export function handleApi(pathname, method, req, res, body) {
  if (pathname === "/api/hq-session" && method === "GET") {
    const password = hqPassword();
    const ok = Boolean(password && sessionOk(readCookie(req), password));
    return sendJson(res, 200, { ok, configured: Boolean(password) });
  }

  if (pathname === "/api/hq-login" && method === "POST") {
    const password = hqPassword();
    if (!password) return sendJson(res, 503, { ok: false, error: "not_configured" });
    if (loginBlocked(req)) return sendJson(res, 429, { ok: false, error: "locked" });
    const given = String(body?.password || "");
    if (!passwordOk(given, password)) {
      loginFail(req);
      return sendJson(res, 401, { ok: false });
    }
    loginClear(req);
    const token = signSession(password);
    return sendJson(res, 200, { ok: true }, { "Set-Cookie": cookieHeader(req, token) });
  }

  if (pathname === "/api/hq-logout" && method === "POST") {
    return sendJson(res, 200, { ok: true }, { "Set-Cookie": cookieHeader(req, "", true) });
  }

  if (pathname === "/api/collect" && method === "POST") {
    const n = appendEvents(body?.events || body);
    return sendJson(res, 200, { ok: true, n });
  }

  if (pathname === "/api/events" && method === "GET") {
    if (!requireHq(req, res)) return;
    return sendJson(res, 200, { ok: true, events: loadStoredEvents() });
  }

  sendJson(res, 404, { ok: false });
}
