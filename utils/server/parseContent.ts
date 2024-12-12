import { glob } from 'node:fs/promises';
import { join } from 'node:path';
import { parseMd } from './markdown';

export async function parseContent(pattern: string, options: any = {}) {
  const results = [];

  for await (const value of glob(join(pattern, '**/*.md'))) {
    try {
      const params = await parseMd(value, { base: pattern, ...options });

      if (params.params.data.draft || params.params.data.post === false) {
        continue;
      }
      if (options.tag && (!Array.isArray(params.params.data.tags) || !params.params.data.tags.includes(options.tag))) {
        continue;
      }
      results.push(params);
    } catch (error) {
      console.log(error);
    }
  }
  return results.sort((a, b) => {
    return (a?.params?.data?.date || '1970-01-01') > (b?.params?.data?.date || '1970-01-01') ? -1 : 1;
  });
}
