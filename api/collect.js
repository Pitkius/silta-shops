import { handleApi } from "./_lib/route.js";

function bodyOf(req) {
  const b = req.body;
  if (!b) return {};
  if (typeof b === "string") {
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  }
  return b;
}

export default function handler(req, res) {
  handleApi("/api/collect", req.method, req, res, bodyOf(req));
}

