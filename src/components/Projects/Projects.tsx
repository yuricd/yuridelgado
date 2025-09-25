import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";

const projects = [
  {
    title:
      "OrbiGuide - Discover places, optimize routes, and learn about each spot around the world.",
    link: "orbiguide.com",
    stack: ["FastAPI", "Postgres", "React Native", "Expo", "React", "Astro"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-5xl max-w-11/12 mx-auto gap-16">
      <Typography
        variant="header3"
        as="h2"
        className="border border-gray-100 rounded-full px-6 py-2"
      >
        My projects
      </Typography>

      {projects.map(({ title, link, stack }) => (
        <div key={title} className="flex flex-col gap-4">
          <Typography variant="header1" as="h3">
            {title}
          </Typography>

          <div className="flex gap-4">
            <Typography
              variant="link"
              as="a"
              className="text-gray-100 flex gap-1 items-center"
            >
              <Icon
                icon="ci:external-link"
                width="18"
                height="18"
                className="text-gray-100"
              />
              {link}
            </Typography>

            <div className="flex gap-1">
              {stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <img
            src="/images/orbiguide-screenshot.webp"
            alt="OrbiGuide screenshot"
            className="bg-secondary-black p-6 mt-12 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}
