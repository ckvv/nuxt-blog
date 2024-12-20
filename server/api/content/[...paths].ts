import { join } from 'node:path';

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig();

  const paths = decodeURIComponent(getRouterParam(event, 'paths') || '');
  try {
    return parseMd(join(runtimeConfig.content, `${paths}.md` || ''), { base: runtimeConfig.content, content: true });
  } catch (_error) {
    return {};
  }
});
