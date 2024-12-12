import { parseContent } from '@/utils/server';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { tag } = getQuery(event);
  return parseContent(runtimeConfig.content, { tag });
});
