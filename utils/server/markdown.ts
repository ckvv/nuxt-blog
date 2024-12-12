import { readFile } from 'node:fs/promises';
import { parse } from 'node:path';
import matter from 'gray-matter';
import { encrypt } from '../crypto';

function parseFrontMatter(content: string) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  if (!match) {
    return null;
  }

  const yaml = match[1];
  const frontMatter = {} as Record<string, any>;
  yaml.split('\n').forEach((line) => {
    const [key, value] = line.split(':').map(s => s.trim());
    frontMatter[key] = value?.replace(/^"|"$/g, ''); // 去掉引号
  });
  return frontMatter;
}

export interface MDPARAMS {
  encrypt: boolean;
  title: string;
  date: string;
  draft: boolean;
  post: boolean;
  tags: string | string[];
}

export async function parseMd(value: string, options: { base: string; content?: boolean }) {
  const { name } = parse(value);
  const path = value.slice(options.base.length, -3);
  const { data, content } = matter((await readFile(value)).toString());
  const params: { content?: string; data: MDPARAMS } = { data: data as any };
  if (options.content) {
    params.content = data.encrypt ? await encrypt(import.meta.env.KEY, content) : content;
  }
  return {
    name: params?.data?.title || name,
    path,
    params,
  };
}

export type MDINFO = Awaited<ReturnType<typeof parseMd>>;
