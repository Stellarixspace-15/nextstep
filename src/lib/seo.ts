export const SITE_URL = "https://www.nextstepinfo.in";

/** Title, description, canonical and social tags for one public page. */
export function seo(path: string, title: string, description: string) {
  const url = SITE_URL + path;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const noindex = () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] });
