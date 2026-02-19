import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import playformCompress from '@playform/compress';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.tstfie.ch',
  integrations: [
    sanity({
      projectId: '366sb9yi',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-01-28',
      studioBasePath: '/admin',
    }),
    react(),
    playformCompress(),
  ],

  output: 'server',
  adapter: vercel(),
  security : {
    checkOrigin: false
  }
});