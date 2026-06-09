import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { BlogPostPreview } from "@/lib/blog";

type BlogArchiveProps = {
  posts: BlogPostPreview[];
};

function JournalRow({
  post,
  index,
  isLast,
}: {
  post: BlogPostPreview;
  index: number;
  isLast: boolean;
}) {
  const { slug, date, title, tags, readingTime } = post;

  return (
    <motion.article
      className={`group border-t border-white/10 py-10 transition-all duration-500 hover:bg-white/[0.03] px-4 ${
        isLast ? "border-b" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.1,
      }}
    >
      <a
        href={`/blog/${slug}`}
        className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-12"
      >
        <div className="md:col-span-2">
          <span className="text-gray-300/60 text-xs uppercase tracking-widest block mb-1">
            Date
          </span>
          <span className="text-lg font-semibold text-brand-primary uppercase">
            {date}
          </span>
        </div>

        <div className="md:col-span-6">
          <span className="text-gray-300/60 text-xs uppercase tracking-widest block mb-1">
            Post Title
          </span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-brand-primary transition-colors">
            {title}
          </h2>
        </div>

        <div className="md:col-span-2">
          <span className="text-gray-300/60 text-xs uppercase tracking-widest block mb-1">
            Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-white/20 px-2 py-0.5 uppercaser"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
          <div className="text-right">
            <span className="text-gray-300/60 text-xs uppercase tracking-widest block mb-1">
              Read
            </span>
            <span className="text-sm font-medium uppercase">{readingTime}</span>
          </div>
          <Icon
            icon="hugeicons:arrow-right-01"
            width={24}
            height={24}
            className="text-gray-300/60 group-hover:translate-x-2.5 group-hover:text-brand-primary transition-all duration-300"
          />
        </div>
      </a>
    </motion.article>
  );
}

export default function BlogArchive({ posts }: BlogArchiveProps) {
  const entryCount = String(posts.length).padStart(3, "0");

  return (
    <main className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
        }}
        aria-hidden="true"
      />

      <div className="w-6xl max-w-11/12 mx-auto relative">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-brand-primary font-semibold uppercase tracking-[0.3em] text-sm">
                System Registry
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">
              Journal
              <br />
              <span className="text-brand-primary">Archive</span>
            </h1>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-gray-300/60 text-sm uppercase tracking-widest mb-2">
              Total Entries
            </p>
            <p className="text-4xl font-bold text-brand-primary">
              {entryCount}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-0 relative z-10">
          {posts.map((post, index) => (
            <JournalRow
              key={post.slug}
              post={post}
              index={index}
              isLast={index === posts.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
