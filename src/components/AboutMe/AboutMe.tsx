import { Typography } from "@/components/Typography/Typography";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function AboutMe() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row w-4xl max-w-11/12 mx-auto gap-8 lg:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Typography variant="header2" as="h2" className="text-nowrap">
          About me
        </Typography>
      </motion.div>

      <motion.div className="flex flex-col gap-4" variants={itemVariants}>
        <Typography variant="body1" as="p">
          I’m a software engineer with a bachelor’s degree in Computer Science
          and experience in leadership and growth. My background spans
          consulting, financial services, healthcare, real estate, and life
          sciences industries. I’ve had the opportunity to work in both
          generalist and specialist roles, allowing me to develop a broad skill
          set while also diving deep into specific areas when needed. My
          leadership and growth experiences, including six years working with
          startups, have empowered me to drive innovation while avoiding
          over-engineering.
        </Typography>

        <Typography variant="body1" as="p">
          Not every problem is a nail, and I strive to be prepared with the
          right solution.
        </Typography>
      </motion.div>
    </motion.div>
  );
}
