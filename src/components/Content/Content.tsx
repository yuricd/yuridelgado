import AboutMe from "@/components/AboutMe/AboutMe";
import WhatIDo from "../WhatIDo/WhatIDo";

export default function Content() {
  return (
    <div>
      <section className="py-12 bg-secondary-black">
        <AboutMe />
      </section>

      <section className="py-16">
        <WhatIDo />
      </section>
    </div>
  );
}
