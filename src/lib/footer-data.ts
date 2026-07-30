import { getCollection } from "astro:content";

export async function getFooterData() {
  const posts = await getCollection("blog");

  const latestPosts = [...posts]
    .sort(
      (a, b) =>
        b.data.pubDate.getTime() -
        a.data.pubDate.getTime()
    )
    .slice(0, 4);

  return {
    latestPosts,
  };
}
