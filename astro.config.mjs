import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://sf-sec.com', // Tipp: Slash am Ende ist optional, Astro regelt das
  // sitemap: true,  <-- Diese Zeile MUSS weg, sie verursacht den 'reduce' Fehler
  integrations: [
  sitemap({
    filter: (page) => page !== 'https://sf-sec.com/404' // Schließt die 404 aus und initialisiert die Liste korrekt
  }), 
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