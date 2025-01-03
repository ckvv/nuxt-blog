// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';
import { description, name } from './package.json';
import { parseContent } from './server/utils/parseContent';

const contents = await parseContent(fileURLToPath(new URL('./content', import.meta.url)), { post: true });

const baseURL = '/nuxt-blog';
const posts = contents.map(v => `/post${v.path}`);
const tags = Array.from(new Set(contents.map(v => v.params.data.tags).flat(1))).filter(v => v).map(v => `/tag/${v}`);

export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/mdc', '@nuxt/ui'],
  mdc: {},
  experimental: {
    payloadExtraction: false,
  },
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'zh-Hans',
      },
    },
  },
  future: {
    // https://github.com/nuxt/nuxt/issues/29798#issuecomment-2466833928
    compatibilityVersion: 4,
  },
  imports: {
    dirs: [
    ],
  },
  runtimeConfig: {
    content: fileURLToPath(new URL('./content', import.meta.url)),
    public: {
      title: name,
      description,
      nav: [{
        text: '博客',
        link: `/`,
      }, {
        text: '标签',
        link: `/tag`,
      }, {
        text: '关于',
        link: `/post/about`,
      }, {
        text: 'RSS',
        link: `/api/rss.xml`,
        options: {
          open: {
            target: '_blank',
          },
        },
      }, {
        icon: 'github',
        link: `https://github.com/ckvv/${name}`,
        options: {
          open: {
            target: '_blank',
          },
        },
      }],
    },
  },
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
    optimizeDeps: {
      include: ['debug'],
    },
    css: {
      transformer: 'lightningcss',
    },
  },
  nitro: {
    prerender: {
      routes: [...posts, ...tags, `/api/rss.xml`],
      failOnError: false,
    },
  },
});
