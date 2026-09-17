import { handleApi } from "./_lib/route.js";

export default function handler(req, res) {
  handleApi("/api/hq-session", req.method, req, res, {});
}
