import type { Person } from "schema-dts";
import { SITE, SOCIALS } from "../../consts";
import { PERSON_ID } from "./schema";

export function personSchema(): Person {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    image: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#profile-image`,
      url: `${SITE.url}/images/coffeyvidzro.jpg`,
      contentUrl: `${SITE.url}/images/coffeyvidzro.jpg`,
      caption: "Coffey Vidzro",
    },
    alternateName: "King Coffey Vidzro",
    jobTitle: "Software Engineer",
    url: SITE.url,
    description: "Ghanaian software engineer and founder of Leamout.",
    nationality: {
      "@type": "Country",
      name: "Ghana",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Ho Technical University",
      url: "https://htu.edu.gh/",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "C.Y.O Technical/Vocational Institute",
    },
    knowsAbout: [
      "Software engineering",
      "Communications infrastructure",
      "Autonomous voice agents",
      "Go",
      "Distributed systems",
    ],
    sameAs: SOCIALS.map(({ href }) => href),
    worksFor: { "@id": "https://leamout.com/#organization" },
  };
}
