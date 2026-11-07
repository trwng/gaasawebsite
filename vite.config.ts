import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // The Points page is not linked from the nav, so list it explicitly.
    pages: [{ path: "/points" }],
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html", crawlLinks: true },
    },
  },
  vite: {
    base: "/",
  },
});
