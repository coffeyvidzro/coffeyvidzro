import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME, SITE } from "../consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = (await getCollection("contents")).filter(
    (post) => !post.data.draft,
  );

  const items = posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
  );

  return rss({
    title: SITE.name,
    description: HOME.description,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/${item.id}/`,
    })),
  });
}
