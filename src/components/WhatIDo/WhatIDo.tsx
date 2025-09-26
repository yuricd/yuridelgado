import { Icon } from "@iconify/react";
import { Typography } from "@/components/Typography/Typography";
import { motion, type Variants } from "framer-motion";
import type { LetsTalkDialogProps } from "@/components/LetsTalkDialog/LetsTalkDialog";
import LetsTalkDialog from "@/components/LetsTalkDialog/LetsTalkDialog";

const whatIDo: {
  title: string;
  description: string;
  subject: LetsTalkDialogProps["selectSubject"];
}[] = [
  {
    title: "Prototypes and MVPs",
    description:
      "Have an idea and want to turn it into reality? From design to deployment I got you covered. I can help you avoid spending thousand of dollars with fancy cloud infrastructure when you still have no users.",
    subject: "MVP or prototype",
  },
  {
    title: "Application development",
    description:
      "Once you gathered all the functional requirements, it’s time to turn it into a product. Backend, desktop, mobile, or web development are the key to make your product available timely.",
    subject: "App development",
  },
  {
    title: "UI design to code",
    description:
      "Turn your designs into maintainable code following the best practices.",
    subject: "UI to code",
  },
  {
    title: "Consulting session",
    description:
      "Not familiar with the development process or don’t know where to start? Let’s schedule a call and dive deep into your problem, or rather, your solution.",
    subject: "Consulting session",
  },
];

const titleVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const tableVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhatIDo() {
  return (
    <div className="flex flex-col items-center w-6xl max-w-11/12 mx-auto gap-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariant}
      >
        <Typography variant="header2" as="h2">
          What I do
        </Typography>
      </motion.div>

      <motion.table
        className="w-full border-collapse"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={tableVariant}
      >
        <tbody>
          {whatIDo.map(({ title, description, subject }) => (
            <motion.div
              key={title}
              variants={rowVariant}
              className="flex flex-col md:flex-row justify-between border-b border-white/10 py-8 gap-4"
            >
              <div className="flex flex-col gap-2">
                <Typography variant="header3" as="p">
                  {title}
                </Typography>
                <Typography variant="body1" as="p">
                  {description}
                </Typography>
              </div>

              <LetsTalkDialog selectSubject={subject}>
                <button className="self-end md:self-center w-12 h-12 flex justify-center items-center flex-shrink-0 group cursor-pointer border border-brand-primary rounded-full hover:bg-brand-primary transition-all duration-200">
                  <Icon
                    icon="hugeicons:arrow-up-right-01"
                    width="24"
                    height="24"
                    className="flex-shrink-0 text-brand-primary group-hover:text-main-black"
                  />
                </button>
              </LetsTalkDialog>
            </motion.div>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
