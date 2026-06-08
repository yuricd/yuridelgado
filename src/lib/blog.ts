import { getCollection, type CollectionEntry } from "astro:content";

const WORDS_PER_MINUTE = 130;

export type BlogPostPreview = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
};

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function countWords(text: string) {
  const withoutCode = text.replace(/```[\s\S]*?```/g, "");
  const plain = withoutCode
    .replace(/`[^`]+`/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_~>-]/g, "");

  return plain.split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(body: string | undefined) {
  const words = countWords(body ?? "");
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min`;
}

function toPreview(entry: CollectionEntry<"blog">): BlogPostPreview {
  return {
    slug: entry.id,
    title: entry.data.title,
    date: formatDate(entry.data.date),
    readingTime: getReadingTime(entry.body),
    tags: entry.data.tags,
    excerpt: entry.data.excerpt,
  };
}

function sortByDateDesc(entries: CollectionEntry<"blog">[]) {
  return [...entries].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function getAllPosts() {
  const entries = await getCollection("blog");
  return sortByDateDesc(entries).map(toPreview);
}

export async function getPostBySlug(slug: string) {
  const entries = await getCollection("blog");
  return entries.find((entry) => entry.id === slug);
}

export async function getNextPost(slug: string) {
  const sorted = sortByDateDesc(await getCollection("blog"));
  const index = sorted.findIndex((entry) => entry.id === slug);
  if (index === -1 || index === sorted.length - 1) return undefined;
  return toPreview(sorted[index + 1]);
}
