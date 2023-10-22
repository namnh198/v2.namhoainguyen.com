import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

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
  ],
});
