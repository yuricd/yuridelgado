import * as HoverCard from "@radix-ui/react-hover-card";
import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";

const techIcons = [
  {
    iconName: "simple-icons:react",
    name: "React",
    description:
      "My go-to solution for SPAs. It’s flexible, has a great and huge community, and it’s used and supported by many frameworks, such as Next.js and Astro.",
  },
  {
    iconName: "simple-icons:nodedotjs",
    name: "Node.js",
    description:
      "High I/O capabilities, huge community with a myriad with different packages, an easy to maintain in a cross-functional team.",
  },
  {
    iconName: "simple-icons:tsnode",
    name: "TypeScript",
    description:
      "JavaScript is becoming the lingua franca, and Typescript is its superset to bring static types to it. I can’t even remember when was the last time I built a JS app without Typescript.",
  },
  {
    iconName: "simple-icons:nextdotjs",
    name: "Next.js",
    description:
      "For powerful and complex SSR websites in React, with a strong and growing community.",
  },
  {
    iconName: "simple-icons:python",
    name: "Python",
    description:
      "Time-proven technology. When it comes to data workloads and AI, Python rocks. For general-purpose or CPU-heavy tasks, Python is a good candidate.",
  },
  {
    iconName: "simple-icons:astro",
    name: "Astro",
    description:
      "One of my newest and happiest findings. It’s an open-source framework that allows both static and SSR, and it has out of the box support to frameworks like Vue, Svelte, and React.",
  },
  {
    iconName: "simple-icons:tailwindcss",
    name: "Tailwind",
    description:
      "Allows to build responsive UIs quickly, without even touching CSS. It supports many utilities and customization with a seamless developer experience.",
  },
  {
    iconName: "simple-icons:postgresql",
    name: "PostgreSQL",
    description:
      "Not all applications are suitable for a relational database, but for all the others I choose Postgres. It’s open-source, has powerful extensions, rich data types, and full-text search support. ",
  },
  {
    iconName: "simple-icons:expo",
    name: "Expo",
    description:
      "An open-source platform to build native apps for Android and iOS. It makes the development and integration of mobile apps with app stores much easier. ",
  },
  {
    iconName: "simple-icons:immersivetranslate",
    name: "i18n",
    description:
      "If you need to ship your app globally, internationalization is a must. Adding multi-lang support either in your front or backend is possible with i18n techniques.",
  },
  {
    iconName: "hugeicons:ai-network",
    name: "AI",
    description:
      "It’s a new era and AI can power your app, either in the client side or as a backoffice tool to streamline processes.",
  },
  {
    iconName: "hugeicons:more-horizontal-square-02",
    name: "More",
    description:
      "My approach is grounded in continuous learning, enabling me to select the most effective tools for each unique problem. I believe in having a diverse toolkit - not every problem is a nail, and I strive to be prepared with the right solution whether.",
  },
];

interface PopoverButtonProps {
  name: string;
  description: string;
  iconName: string;
}

function PopoverButton({ name, description, iconName }: PopoverButtonProps) {
  return (
    <HoverCard.Root openDelay={100} closeDelay={100}>
      <HoverCard.Trigger asChild>
        <button className="opacity-25 hover:opacity-100 transition-opacity duration-300">
          <Icon
            icon={iconName}
            width="56"
            height="56"
            className="text-gray-100"
          />
        </button>
      </HoverCard.Trigger>

      <HoverCard.Content
        side="top"
        align="center"
        sideOffset={6}
        className="bg-secondary-black text-white rounded-lg p-4 w-64 shadow-xl select-none"
      >
        <Typography variant="header3" as="h3" className="text-gray-300 mb-1">
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
    <div className="flex gap-10 flex-wrap h-14">
      {techIcons.map(({ iconName, name, description }) => (
        <PopoverButton
          key={name}
          name={name}
          description={description}
          iconName={iconName}
        />
      ))}
    </div>
  );
}
