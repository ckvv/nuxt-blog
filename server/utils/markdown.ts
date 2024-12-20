import { readFile } from 'node:fs/promises';
import { parse } from 'node:path';
import { parseMarkdown } from '@nuxtjs/mdc/runtime';
import matter from 'gray-matter';

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
  const params: { content?: string; data: MDPARAMS; outline?: any } = { data: data as any };
  if (options.content) {
    const { toc } = await parseMarkdown(content, {
      toc: {
        depth: 3,
      },
    });
    params.outline = toc?.links;
    params.content = data.encrypt ? await encrypt(import.meta.env.KEY, content) : content;
  }
  return {
    name: params?.data?.title || name,
    path,
    params,
  };
}

export type MDINFO = Awaited<ReturnType<typeof parseMd>>;
