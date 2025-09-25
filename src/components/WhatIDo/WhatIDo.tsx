import { Icon } from "@iconify/react";
import { Typography } from "../Typography/Typography";

const whatIDo = [
  {
    title: "Prototypes and MVPs",
    description:
      "Have an idea and want to turn it into reality? From design to deployment I got you covered. I can help you avoid spending thousand of dollars with fancy cloud infrastructure when you still have no users.",
    target: "#",
  },
  {
    title: "Application development",
    description:
      "Once you gathered all the functional requirements, it’s time to turn it into a product. Backend, desktop, mobile, or web development are the key to make your product available timely.",
    target: "#",
  },
  {
    title: "UI design to code",
    description:
      "Turn your designs into maintainable code following the best practices.",
    target: "#",
  },
  {
    title: "Consulting session",
    description:
      "Not familiar with the development process or don’t know where to start? Let’s schedule a call and dive deep into your problem, or rather, your solution.",
    target: "#",
  },
];

export default function WhatIDo() {
  return (
    <div className="flex flex-col items-center w-6xl max-w-11/12 mx-auto gap-16">
      <Typography variant="header2" as="h2">
        What I do
      </Typography>
      <table className="w-full border-collapse">
        <tbody>
          {whatIDo.map(({ title, description }) => (
            <tr key={title} className="border-b border-white/10">
              <td className="py-8 px-4 whitespace-nowrap">
                <Typography variant="header3" as="p">
                  {title}
                </Typography>
              </td>

              <td className="py-8 px-4">
                <Typography variant="body1" as="p">
                  {description}
                </Typography>
              </td>

              <td className="py-8 px-4 whitespace-nowrap text-right">
                <button className="group flex justify-center items-center size-12 cursor-pointer border border-brand-primary rounded-full hover:bg-brand-primary transition-all duration-200">
                  <Icon
                    icon="hugeicons:arrow-up-right-01"
                    width="24"
                    height="24"
                    className="text-brand-primary group-hover:text-main-black"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
