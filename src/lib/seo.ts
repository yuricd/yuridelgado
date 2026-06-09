import { getSiteUrl } from "@/lib/site";

export const SITE_NAME = "Yuri Delgado";
export const DEFAULT_DESCRIPTION =
  "I help you build your MVP and prototype the right way. Ship fast, but ship right.";
export const DEFAULT_OG_IMAGE = "/images/cover-logo.jpg";

export function getDefaultOgImage() {
  return getSiteUrl(DEFAULT_OG_IMAGE);
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl("/"),
    description: DEFAULT_DESCRIPTION,
  };
}

export function buildWebPageSchema({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl("/"),
    },
  };
}

export function buildBlogPostingSchema({
  title,
  url,
  description,
  datePublished,
  tags,
  image,
}: {
  title: string;
  url: string;
  description: string;
  datePublished: Date;
  tags: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    url,
    description,
    datePublished: datePublished.toISOString(),
    dateModified: datePublished.toISOString(),
    image: image ?? getDefaultOgImage(),
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: getSiteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: getSiteUrl("/"),
    },
    keywords: tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
