import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yabin-da.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
