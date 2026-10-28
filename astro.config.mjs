import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://zkan.github.io is a user site, so the site root is "/" and `base` stays unset.
export default defineConfig({
  site: 'https://zkan.github.io',
  integrations: [mdx(), sitemap()],
});
