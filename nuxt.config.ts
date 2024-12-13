// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';
import { description, name } from './package.json';
import { parseContent } from './utils/server';

const contents = await parseContent(fileURLToPath(new URL('./content', import.meta.url)), { post: true });

const posts = contents.map(v => `/post${v.path}`);
const tags = Array.from(new Set(contents.map(v => v.params.data.tags).flat(1))).map(v => `/tag/${v}`);

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    markdown: {},
    content: fileURLToPath(new URL('./content', import.meta.url)),
    public: {
      title: name,
      description,
      nav: [{
        text: '博客',
        link: '/',
      }, {
        text: '标签',
        link: '/tag',
      }, {
        text: '关于',
        link: '/post/about',
      }, {
        text: 'RSS',
        link: '/api/rss.xml',
        options: {
          external: true,
        },
      }, {
        icon: 'github',
        link: `https://github.com/ckvv/${name}`,
        options: {
          external: true,
        },
      }],
    },
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
      routes: [...posts, ...tags, '/api/rss.xml'],
    },
  },
});
