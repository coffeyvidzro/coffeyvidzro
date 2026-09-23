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

// GitHub repository data interface
export interface GitHubRepoData {
  owner?: {
    avatar_url: string;
  };
  description?: string;
  stargazers_count?: number;
  forks_count?: number;
  license?: {
    spdx_id: string;
  };
}

// GitHub card UI elements interface
export interface CardElements {
  avatar: HTMLElement | null;
  desc: HTMLElement | null;
  stars: HTMLElement | null;
  forks: HTMLElement | null;
  license: HTMLElement | null;
}

// Reading time interface
export interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

// TOC item interface
export interface TOCItem {
  level: number;
  text: string;
  id: string;
  index: number;
}

export interface PostLayoutProps {
  title: string;
  description: string;
  pubDate: Date;
  image?: string;
  readingTime?: ReadingTime;
  toc?: TOCItem[];
}

export interface TOCProps {
  toc?: TOCItem[];
}
