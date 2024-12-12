import { parseContent } from '@/utils/server';

export default defineEventHandler(async (_event) => {
  const runtimeConfig = useRuntimeConfig();
  const contents = await parseContent(runtimeConfig.content);
  return Array.from(new Set(contents.map(v => v.params.data.tags).flat(1))).filter(v => !!v);
});
