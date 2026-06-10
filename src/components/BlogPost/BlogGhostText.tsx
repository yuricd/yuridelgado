import { useEffect, useRef } from "react";

export default function BlogGhostText() {
  const ghostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ghostRef.current) return;
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      ghostRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute -top-16 -left-4 md:-left-12 select-none pointer-events-none z-0 overflow-hidden">
      <span
        ref={ghostRef}
        className="font-heading font-bold text-7xl md:text-[10rem] leading-none uppercase text-transparent transition-transform duration-75"
        style={{ WebkitTextStroke: "1px rgb(253 253 93 / 0.15)" }}
      >
        Archive
      </span>
    </div>
  );
}
