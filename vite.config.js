import { defineConfig } from "vite";

export default defineConfig({
  base: "/canvas-site/",
  build: {
    target: "es2017",
    outDir: "dist",
  },
});
