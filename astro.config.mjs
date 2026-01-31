// import sitemap from "@astrojs/sitemap"; 
// sitemap() aus integrations entfernen

export default defineConfig({
  site: 'https://sf-sec.com',
  integrations: [
    icon({
      iconDir: "src/components/icons",
    })
  ],
});
