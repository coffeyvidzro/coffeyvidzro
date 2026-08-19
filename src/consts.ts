import type { Site, Metadata, Social } from "./types";

export const SITE: Site = {
  name: "Coffey Vidzro",
  email: "coffey@vidzro.com",
  url: "https://vidzro.com",
};

export const HOME: Metadata = {
  title: "Home",
  description: "Pretending hard to work hard.",
};

export const ABOUT: Metadata = {
  title: "About",
  description: "A little bit about me, and what I do.",
};

export const BLOG: Metadata = {
  title: "Blog",
  description: "Words of my own, shaped by experience.",
};

export const PROJECTS: Metadata = {
  title: "Projects",
  description: "Things I've built, experimented with, and shipped.",
};

export const SOCIALS: Social[] = [
  {
    name: "twitter-x",
    href: "https://x.com/coffeyvidzro",
  },
  {
    name: "github",
    href: "https://github.com/coffeyvidzro",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/coffeyvidzro",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/coffeyvidzro",
  },
];

export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      givenName: "Coffey",
      familyName: "Vidzro",
      url: SITE.url,
      sameAs: SOCIALS.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: HOME.description,
      publisher: {
        "@id": `${SITE.url}/#person`,
      },
    },
  ],
};
