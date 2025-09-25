import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";

const projects = [
  {
    title:
      "OrbiGuide - Discover places, optimize routes, and learn about each spot around the world.",
    link: "orbiguide.com",
    stack: ["FastAPI", "Postgres", "React Native", "Expo", "React", "Astro"],
    image: {
      path: "/images/orbiguide-screenshot.webp",
      width: 955,
      height: 775,
      alt: "OrbiGuide screenshot",
    },
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center w-5xl max-w-11/12 mx-auto gap-16 mb-16">
        <Typography
          variant="body1"
          as="h2"
          className="border border-gray-100 rounded-full px-4 py-1.5 font-medium"
        >
          My projects
        </Typography>
      </div>

      {projects.map(({ title, link, stack, image }) => {
        const imageH = image.height / 3;

        return (
          <div key={title} className="flex flex-col gap-4">
            <div
              className="flex flex-col w-5xl max-w-11/12 mx-auto gap-4"
              style={{ paddingBottom: imageH + 48 }}
            >
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
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full bg-gray-200 pb-24">
              <img
                src={image.path}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="bg-secondary-black px-5 pt-5 rounded-2xl"
                style={{ marginTop: -imageH }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
