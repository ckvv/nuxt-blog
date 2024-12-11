import { parseContent } from '@/utils/parseContent'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { tag } = getQuery(event);
  return parseContent(runtimeConfig.content, { tag })
})
