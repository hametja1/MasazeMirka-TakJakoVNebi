import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// POZOR: po nasazení na ostrou doménu sem doplňte finální adresu.
// Používá se pro sitemap.xml a pro odkaz na náhledový obrázek při sdílení.
export const SITE = 'https://www.masazemirka-takjakovnebi.cz';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
