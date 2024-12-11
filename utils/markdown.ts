import { readFile } from 'node:fs/promises'
import { parse } from 'node:path'
import matter from 'gray-matter'

function parseFrontMatter(content: string) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontMatterRegex)
  if (!match)
    return null

  const yaml = match[1]
  const frontMatter = {} as Record<string, any>
  yaml.split('\n').forEach((line) => {
    const [key, value] = line.split(':').map(s => s.trim())
    frontMatter[key] = value?.replace(/^"|"$/g, '') // 去掉引号
  })
  return frontMatter
}

export async function parseMd(value: string, options: { base: string, content?: boolean }) {
  const { name } = parse(value)
  const path = value.slice(options.base.length, -3)
  const { data, content } = matter((await readFile(value)).toString())
  const params: { content?: string, data: { title: string, date: string, draft: boolean, tags: string | string[] } } = { data: data as any}
  if (options.content) {
    params.content = content
  }
  return {
    name,
    path,
    params,
  }
}

export type MDINFO = Awaited<ReturnType<typeof parseMd>>;
