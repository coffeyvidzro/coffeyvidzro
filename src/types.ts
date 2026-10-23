export type Site = {
  name: string;
  email: string;
  url: string;
};

export type Metadata = {
  title: string;
  description: string;
};

export type Social = {
  name: string;
  href: string;
};

export interface TransitionProps {
  type: "post" | "page";
  class?: string;
}

export interface LayoutProps extends TransitionProps {
  title?: string;
  description?: string;
}

export interface PostLayoutProps {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  image?: string;
  readingTime?: string;
  toc?: { depth: number; slug: string; text: string }[];
}
