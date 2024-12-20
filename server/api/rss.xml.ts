import { name } from '~/package.json';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { tag } = getQuery(event);
  const contents = await parseContent(runtimeConfig.content, { tag });

  setResponseHeader(event, 'content-type', 'application/xml');
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>${name}</title>
        <link>https://www.example.com/</link>
        <description>This is an RSS feed</description>
        ${contents.map((v) => {
          return `<item>
            <title>${v.params.data.title || v.name}</title>
            <link>${v.path}</link>
        </item>`;
        }).join('')}      
    </channel>
</rss>
`;
});
