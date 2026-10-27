import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_NAME } from '../consts';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('Set `site` in astro.config.mjs before building the RSS feed.');
  }

  const posts = await getPublishedPosts();

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/posts/${post.id}/`,
    })),
  });
}
