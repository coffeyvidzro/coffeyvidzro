import type { WebSite } from "schema-dts";
import { SITE } from "../../consts";
import { PERSON_ID, WEBSITE_ID } from "./schema";

export function websiteSchema(): WebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: "The personal website of Coffey Vidzro.",
    inLanguage: "en-GH",
    publisher: { "@id": PERSON_ID },
  };
}
