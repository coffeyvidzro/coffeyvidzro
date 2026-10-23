import type { Site, Metadata, Social } from "./types";

export const SITE: Site = {
  name: "Coffey Vidzro",
  email: "coffey@vidzro.com",
  url: "https://vidzro.com",
};

export const HOME: Metadata = {
  title: "Coffey Vidzro",
  description:
    "I'm Coffey Vidzro, a Ghanaian software engineer and founder of Leamout, a carrier-grade runtime and control plane for autonomous voice agents.",
};

export const ABOUT: Metadata = {
  title: "About",
  description: "A little bit about me, and what I do.",
};

export const NOW: Metadata = {
  title: "Now",
  description: "What I'm focused on now.",
};

export const USES: Metadata = {
  title: "Uses",
  description: "The tools and technologies I use.",
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
