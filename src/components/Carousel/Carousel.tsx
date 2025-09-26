import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Typography } from "../Typography/Typography";

const bannerText = [
  "Freelance consultant",
  "Open to full-time B2B remote roles",
  "Full-stack developer",
  "9+ years of experience",
  "Based in western Europe",
  "First, plan. Then, code.",
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 0.5,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="relative flex items-center w-full bg-brand-primary h-12">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {[...bannerText, ...bannerText].map((text, idx) => (
            <div key={idx} className="flex-[0_0_auto] flex items-center">
              <Typography
                as="p"
                variant="body1"
                className="font-medium text-main-black whitespace-nowrap"
              >
                {text}
              </Typography>
              <div className="size-1 bg-main-black mx-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
