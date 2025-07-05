import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Shubham --verbose",
  description:
    "Words appear here.",
  href: "https://barebones.superwebthemes.com",
  author: "Shubham",
  locale: "en-IN",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  // projects: {
  //   path: "/projects",
  //   label: "Projects",
  // },
  // documentation: {
  //   path: "https://docs.superwebthemes.com",
  //   label: "Documentation",
  // },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:ttl@trevortylerlee.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/trevortylerlee",
  },
  twitter: {
    label: "X (formerly Twitter)",
    href: "https://twitter.com/boogerbuttcheek",
  },
};
