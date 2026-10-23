// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import rehypeKatex from "rehype-katex";
import { imageConfig } from "./src/utils/image-config";

// https://astro.build/config
export default defineConfig({
  site: "https://vidzro.com",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: imageConfig,
    },
  },

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: false,
    },
    remarkPlugins: [remarkMath, remarkDirective],
    rehypePlugins: [rehypeKatex],
  },

  adapter: cloudflare(),
});
