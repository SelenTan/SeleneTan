import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, url } from "../config";
import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug";

export async function GET() {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: url(`blog/${createSlug(post.data.title, post.slug)}/`),
    })),
  });
}
