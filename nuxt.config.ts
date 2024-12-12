// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';
import { parseContent } from './utils';

const contents = await parseContent(fileURLToPath(new URL('./content', import.meta.url)));

const posts = contents.map(v => `/post${v.path}`);
const tags = Array.from(new Set(contents.map(v => v.params.data.tags).flat(1))).map(v => `/tag/${v}`);

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    content: fileURLToPath(new URL('./content', import.meta.url)),
  },
  modules: ['@nuxt/ui'],
  ui: {
    fonts: false,
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons',
    }],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
    ],
  },
  nitro: {
    prerender: {
      routes: [...posts, ...tags, '/api/rss.json'],
    },
  },
});
