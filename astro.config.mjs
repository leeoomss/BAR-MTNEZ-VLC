// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PENDIENTE: cambiar por el dominio definitivo cuando se publique.
export const SITE = 'https://barmtnezvlc.netlify.app';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'always' },
});
