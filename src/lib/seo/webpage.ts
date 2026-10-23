import type { ProfilePage, WebPage } from "schema-dts";
import { PERSON_ID, WEBSITE_ID, siteUrl } from "./schema";

type PageOptions = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ProfilePage";
  mainEntityId?: string;
};

export function webpageSchema({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
}: PageOptions): WebPage | ProfilePage {
  const url = siteUrl(path);
  const properties = {
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-GH",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
  };

  if (type === "ProfilePage") {
    return {
      "@type": "ProfilePage",
      ...properties,
      mainEntity: { "@id": PERSON_ID },
    };
  }

  return {
    "@type": "WebPage",
    ...properties,
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}
