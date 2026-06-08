import { Icon } from "@iconify/react";
import { Typography } from "@/components/Typography/Typography";
import { motion, type Variants } from "framer-motion";

const posts = [
  {
    date: "Nov 24, 2024",
    title: "The architecture of high-performance dark mode interfaces.",
    tag: "Engineering",
  },
  {
    date: "Oct 12, 2024",
    title: "Why brutalism is returning to the mainstream web.",
    tag: "Design",
  },
  {
    date: "Sep 05, 2024",
    title: "Optimizing Next.js for maximum editorial impact.",
    tag: "Next.js",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const articleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LatestThoughts() {
  return (
    <div className="w-6xl max-w-11/12 mx-auto">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerVariants}
      >
        <div>
          <Typography
            variant="body2"
            as="span"
            className="text-brand-primary font-semibold uppercase tracking-[0.3em] mb-3 block"
          >
            Archive
          </Typography>
          <Typography variant="header2" as="h2">
            Latest Thoughts
          </Typography>
        </div>

        <a
          href="#"
          className="text-brand-primary font-medium uppercase tracking-wide text-sm flex items-center gap-2 hover:gap-4 transition-all group pb-1 border-b border-brand-primary/20 hover:border-brand-primary"
        >
          Explore All Journal Entries
          <Icon
            icon="hugeicons:arrow-right-01"
            width={16}
            height={16}
            className="flex-shrink-0"
          />
        </a>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 border border-white/10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridVariants}
      >
        {posts.map(({ date, title, tag }, index) => (
          <motion.article
            key={title}
            variants={articleVariants}
            className={`p-8 lg:p-10 group cursor-pointer transition-colors hover:bg-white/5 flex flex-col min-h-[280px] ${
              index < posts.length - 1
                ? "border-b md:border-b-0 md:border-r border-white/10"
                : ""
            }`}
          >
            <Typography
              variant="body2"
              as="p"
              className="text-gray-300/60 font-medium uppercase tracking-[0.2em] mb-6"
            >
              {date}
            </Typography>

            <Typography
              variant="header3"
              as="h3"
              className="flex-1 group-hover:text-brand-primary transition-colors mb-12"
            >
              {title}
            </Typography>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-gray-100 group-hover:bg-brand-primary group-hover:text-main-black transition-colors">
                {tag}
              </span>
              <Icon
                icon="hugeicons:arrow-up-right-01"
                width={20}
                height={20}
                className="text-brand-primary translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
