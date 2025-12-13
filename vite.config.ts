import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import path, { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: false,
      },
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/embed.js"),
      name: "Ai247Chat",
      fileName: "script",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "script.[ext]",
        entryFileNames: "script.js",
        inlineDynamicImports: true,
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
