import { join } from 'node:path'
import { parseMd } from '@/utils/markdown'

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()

  const paths = getRouterParam(event, 'paths')
  try {
    return parseMd(join(runtimeConfig.content, `${paths}.md` || ''), { base: runtimeConfig.content, content: true })
  } catch (error) {
    return {};
  }
})
