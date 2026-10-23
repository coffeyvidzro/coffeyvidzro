import type { BlogPosting } from "schema-dts";
import { PERSON_ID, siteUrl } from "./schema";

export type ArticleSchemaData = {
  path: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  image?: string;
};

export function articleId(path: string): string {
  return `${siteUrl(path)}#article`;
}

export function articleSchema({
  path,
  title,
  description,
  pubDate,
  updatedDate,
  image,
}: ArticleSchemaData): BlogPosting {
  return {
    "@type": "BlogPosting",
    "@id": articleId(path),
    headline: title,
    description,
    url: siteUrl(path),
    mainEntityOfPage: siteUrl(path),
    datePublished: pubDate.toISOString(),
    ...(updatedDate ? { dateModified: updatedDate.toISOString() } : {}),
    ...(image ? { image: siteUrl(image) } : {}),
    inLanguage: "en-GH",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
  };
}
