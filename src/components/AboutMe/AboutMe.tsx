import { Typography } from "@/components/Typography/Typography";

export default function AboutMe() {
  return (
    <div className="flex w-4xl max-w-11/12 mx-auto gap-16">
      <Typography variant="header2" as="h2" className="text-nowrap">
        About me
      </Typography>
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
}
