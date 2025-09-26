import * as HoverCard from "@radix-ui/react-hover-card";
import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";
import { motion, type Variants } from "framer-motion";

const techIcons = [
  {
    iconName: "simple-icons:react",
    name: "React",
    description:
      "My go-to solution for SPAs. It’s flexible, has a large and active community, and is supported by many frameworks such as Next.js and Astro.",
  },
  {
    iconName: "simple-icons:nodedotjs",
    name: "Node.js",
    description:
      "High I/O capabilities, a huge community with a myriad of packages, and easy to maintain in a cross-functional team.",
  },
  {
    iconName: "simple-icons:tsnode",
    name: "TypeScript",
    description:
      "JavaScript is becoming the lingua franca, and TypeScript is its superset that adds static types. I can’t even remember the last time I built a JS app without TypeScript.",
  },
  {
    iconName: "simple-icons:nextdotjs",
    name: "Next.js",
    description:
      "Ideal for powerful and complex SSR websites in React, with a strong and growing community.",
  },
  {
    iconName: "simple-icons:python",
    name: "Python",
    description:
      "A time-proven technology. When it comes to data workloads and AI, Python excels. For general-purpose or CPU-heavy tasks, Python is also a great choice.",
  },
  {
    iconName: "simple-icons:astro",
    name: "Astro",
    description:
      "One of my newest and happiest discoveries. It’s an open-source framework that supports both static and SSR sites, with out-of-the-box integration for Vue, Svelte, and React.",
  },
  {
    iconName: "simple-icons:tailwindcss",
    name: "Tailwind",
    description:
      "Enables building responsive UIs quickly without writing raw CSS. It offers many utilities and customization options with a seamless developer experience.",
  },
  {
    iconName: "simple-icons:postgresql",
    name: "PostgreSQL",
    description:
      "Not all applications need a relational database, but for those that do, I choose Postgres. It’s open-source, has powerful extensions, rich data types, and full-text search support.",
  },
  {
    iconName: "simple-icons:expo",
    name: "Expo",
    description:
      "An open-source platform for building native Android and iOS apps. It simplifies development and app store integration.",
  },
  {
    iconName: "simple-icons:immersivetranslate",
    name: "i18n",
    description:
      "Shipping apps globally requires internationalization. Adding multi-language support to the front or backend is possible with i18n techniques.",
  },
  {
    iconName: "hugeicons:ai-network",
    name: "AI",
    description:
      "We’re in a new era where AI can power your app, either on the client side or as a backend tool to streamline processes.",
  },
  {
    iconName: "hugeicons:more-horizontal-square-02",
    name: "More",
    description:
      "My approach is grounded in continuous learning, enabling me to select the most effective tools for each problem. I believe in having a diverse toolkit — not every problem is a nail — and I strive to be prepared with the right solution.",
  },
];

interface PopoverButtonProps {
  name: string;
  description: string;
  iconName: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

function PopoverButton({ name, description, iconName }: PopoverButtonProps) {
  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <HoverCard.Trigger asChild>
        <button
          className="opacity-25 hover:opacity-100 transition-opacity duration-200"
          aria-label={`See ${name}`}
        >
          <Icon icon={iconName} className="text-gray-100 lg:size-12 size-10" />
        </button>
      </HoverCard.Trigger>

      <HoverCard.Content
        side="top"
        align="center"
        sideOffset={6}
        className="bg-secondary-black text-white rounded-lg p-4 w-64 shadow-xl select-none"
      >
        <Typography
          variant="body1"
          as="p"
          className="text-gray-300 mb-1 font-semibold"
        >
          {name}
        </Typography>
        <Typography variant="body1" as="p" className="text-gray-400">
          {description}
        </Typography>
        <HoverCard.Arrow className="fill-secondary-black" />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export default function TechList() {
  return (
    <motion.div
      className="flex justify-center lg:gap-8 gap-6 flex-wrap lg:h-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {techIcons.map(({ iconName, name, description }) => (
        <motion.div key={name} variants={itemVariants}>
          <PopoverButton
            name={name}
            description={description}
            iconName={iconName}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
