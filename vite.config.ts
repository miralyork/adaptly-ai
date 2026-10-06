import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    // Bundle every dependency into the server function. The built output is
    // committed to git, and .gitignore drops node_modules, so any externalised
    // package (e.g. tslib) would be missing on Vercel and crash every page.
    nitro({ preset: "vercel", noExternals: true }),
    viteReact(),
  ],
});
