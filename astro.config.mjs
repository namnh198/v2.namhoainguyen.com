import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import { readingTimeRemarkPlugin } from './src/utils/readingTime.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        'fa6-brands': ['*'],
        heroicons: ['*'],
      },
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
