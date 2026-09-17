import { handleApi } from "./_lib/route.js";

export default function handler(req, res) {
  handleApi("/api/hq-logout", req.method, req, res, {});
}
