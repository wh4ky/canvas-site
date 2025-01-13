import { defineConfig } from "vite";

export default defineConfig({
  base: "/canvas-site/",
  build: {
    target: "es2022",
    outDir: "dist",
  },
});
