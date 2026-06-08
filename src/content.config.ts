import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    tags: z.array(z.string()).min(1),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
