import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://sf-sec.com',
  integrations: [
    icon({
      iconDir: "src/components/icons",
    })
  ],
});
