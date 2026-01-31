import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://sf-sec.com',
  integrations: [
    sitemap(), 
    icon({
      iconDir: "src/components/icons",
    })
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});