import { handleApi } from "./_lib/route.js";

export default function handler(req, res) {
  handleApi("/api/events", req.method, req, res, {});
}
