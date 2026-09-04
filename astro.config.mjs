import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static", // build genere du HTML/CSS/JS statique dans dist/, servi par ton PHP/nginx habituel
  site: "https://notrackrun.eu",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "nl"],
    routing: {
      prefixDefaultLocale: false, // en reste a la racine (/, /about, /contact), fr sera prefixe (/fr, /fr/about, ...)
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
