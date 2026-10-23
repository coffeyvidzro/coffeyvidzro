import type { Graph } from "schema-dts";
import { SITE } from "../../consts";

export type SchemaNodes = Graph["@graph"];

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function siteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

export function serializeSchema(nodes: SchemaNodes): string {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": nodes,
  };

  // set:html does not escape contents; protect the JSON-LD script boundary.
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
