import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ostrá adresa webu. Hlavní varianta je bez www; www se na ni přesměrovává
// pravidlem v Cloudflare. Používá se pro sitemap.xml, kanonické odkazy
// a pro náhledový obrázek při sdílení.
export const SITE = 'https://masazemirka-takjakovnebi.cz';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
