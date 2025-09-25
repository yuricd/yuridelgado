"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";
import { cn } from "@/lib/utils";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col gap-6 bg-main-black text-white">
      <div className="flex flex-col items-center w-5xl max-w-11/12 mx-auto gap-6">
        <Typography
          variant="body1"
          as="h2"
          className="border border-gray-100 rounded-full px-4 py-1.5 font-medium"
        >
          My projects
        </Typography>

        <div className="flex items-center w-full gap-2">
          <div className="flex gap-1">
            <Typography
              variant="body1"
              as="span"
              className="text-gray-300 font-medium"
            >
              {selectedIndex + 1}
            </Typography>

            <Typography
              variant="body1"
              as="span"
              className="text-gray-300/50 font-medium"
            >
              / {projects.length}
            </Typography>
          </div>

          <div className="flex items-center">
            <button
              onClick={scrollPrev}
              className="p-1 rounded-full cursor-pointer"
            >
              <Icon
                icon="hugeicons:arrow-left-01"
                width={20}
                height={20}
                className={cn({
                  "text-gray-300/50": selectedIndex + 1 === 1,
                })}
              />
            </button>

            <button
              onClick={scrollNext}
              className="p-1 rounded-full cursor-pointer"
            >
              <Icon
                icon="hugeicons:arrow-right-01"
                width={20}
                height={20}
                className={cn({
                  "text-gray-300/50": selectedIndex + 1 === projects.length,
                })}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map(({ title, link, stack, image }) => {
            const imageH = image.height / 3;

            return (
              <div
                key={title}
                className="flex-shrink-0 w-full flex flex-col gap-4"
              >
                <div
                  className="flex flex-col w-5xl max-w-11/12 mx-auto gap-4"
                  style={{ paddingBottom: imageH + 36 }}
                >
                  <Typography variant="header1" as="h3">
                    {title}
                  </Typography>

                  <div className="flex gap-4">
                    <Typography
                      variant="link"
                      as="a"
                      target="_blank"
                      rel="nooopener noreferrer"
                      href="https://orbiguide.com?utm_source=yuridelgado"
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

                    <div className="flex gap-1 flex-wrap">
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

                <div className="relative flex flex-col items-center w-full pb-12 flex-1 bg-gray-300">
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
      </div>
    </div>
  );
}
