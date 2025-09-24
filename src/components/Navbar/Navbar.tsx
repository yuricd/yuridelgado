import { useState, useEffect } from "react";
import Logo from "@/assets/logo.svg?react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = [
    ["Home", "#home"],
    ["About me", "#"],
    ["What I do", "#"],
    ["My projects", "#"],
  ];

  // handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle active section
  useEffect(() => {
    const sections = links
      .map(([, href]) => {
        const id = href.split("#")[1]; // get only the anchor id
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [links]);

  // handle click for smooth scroll on homepage
  const handleAnchorClick = (href: string, e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      const id = href.split("#")[1];
      if (id) {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="w-full h-[80px]" />
      <div
        className={cn(
          "fixed top-0 w-full z-50 flex h-24 px-6 md:px-12 justify-between items-center transition-all duration-200",
          scrolled
            ? "bg-white/100 backdrop-blur-sm border-b border-gray-200 h-16"
            : "bg-transparent"
        )}
      >
        <a href="/">
          <Logo
            className={cn(
              "w-10 md:w-14 transition-all duration-300 text-white"
            )}
          />
        </a>

        <nav className="hidden md:flex gap-6">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleAnchorClick(href, e)}
              className={cn(
                "transition-colors duration-300 px-3 py-1 rounded-lg",
                active === href ? "bg-gray-50 font-medium" : "text-gray-100"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button className={cn("bg-brand-primary")}>Let's talk</Button>
      </div>
    </>
  );
}
