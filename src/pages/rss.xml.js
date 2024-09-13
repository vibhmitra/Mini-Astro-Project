import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const blogEntries = await getCollection("posts");
  return blogEntries.map((entry) => ({
      params: { slug: entry.slug },
      props: { entry },
  }));
}

export async function GET(context) {
   const posts = await getCollection("posts");
  // const loss = posts.map((emy) => ({ props: {emy},}));
  // const { emy } = loss;
  return rss({
    title: 'Mini Astro Project 🚀 | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      content: post.body,
      }),
    ),
    customData: `<language>en-us</language>`,
  });
}