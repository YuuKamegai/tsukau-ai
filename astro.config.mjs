// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * `SITE_LIVE` gates indexing. Until tsukau-ai.com resolves, the site deploys to
 * the GitHub Pages project URL and must not be indexed there — otherwise the
 * canonical host inherits a duplicate-content history it never earned.
 */
const LIVE = process.env.SITE_LIVE === '1';

export default defineConfig({
  site: LIVE ? 'https://tsukau-ai.com' : 'https://yuukamegai.github.io',
  base: LIVE ? '/' : '/tsukau-ai',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
