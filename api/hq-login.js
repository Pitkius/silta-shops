import { handleApi } from "./_lib/route.js";

export default function handler(req, res) {
  let body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      body = {};
    }
  }
  handleApi("/api/hq-login", req.method, req, res, body);
}

