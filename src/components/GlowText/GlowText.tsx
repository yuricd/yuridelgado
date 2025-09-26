import { useState } from "react";

export default function HeroText() {
  const [mousePos, setMousePos] = useState({ x: 600, y: 75 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cx = (mousePos.x / 1200) * 100;
  const cy = (mousePos.y / 150) * 100;

  return (
    <div
      className="relative w-full h-[150px] flex justify-center items-center cursor-default select-none"
      onMouseMove={handleMouseMove}
    >
      <svg viewBox="0 0 1200 150" className="w-full">
        <defs>
          <linearGradient id="text-stroke-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="75%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="mouse-glow" cx={`${cx}%`} cy={`${cy}%`} r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="75%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="160"
          fontWeight="700"
          fontFamily="Urbanist, sans-serif"
          fill="transparent"
          stroke="url(#text-stroke-gradient)"
          strokeWidth="1"
          className="opacity-20"
        >
          YURI DELGADO
        </text>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="160"
          fontWeight="700"
          fontFamily="Urbanist, sans-serif"
          fill="transparent"
          stroke="url(#mouse-glow)"
          strokeWidth="2"
          style={{ mixBlendMode: "screen" }}
        >
          YURI DELGADO
        </text>
      </svg>
    </div>
  );
}
