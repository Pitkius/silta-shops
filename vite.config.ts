import type { IncomingMessage, ServerResponse } from "node:http";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { handleApi } from "./api/_lib/route.js";

function readBody(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function hqApiPlugin(): Plugin {
  const run = async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const pathname = (req.url || "").split("?")[0];
    if (!pathname.startsWith("/api/")) {
      next();
      return;
    }
    try {
      let body: unknown = {};
      if (req.method === "POST" || req.method === "PUT") {
        const raw = await readBody(req);
        try {
          body = raw ? JSON.parse(raw) : {};
        } catch {
          body = {};
        }
      }
      handleApi(pathname, req.method || "GET", req, res, body);
    } catch {
      if (!res.writableEnded) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: false }));
      }
    }
  };
  return {
    name: "hq-api",
    configureServer(server) {
      server.middlewares.use(run);
    },
    configurePreviewServer(server) {
      server.middlewares.use(run);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (env.HQ_PASSWORD) process.env.HQ_PASSWORD = env.HQ_PASSWORD;
  return {
    plugins: [react(), hqApiPlugin()],
    server: { port: 5173, host: true },
    preview: { port: 4173, host: true },
  };
});
