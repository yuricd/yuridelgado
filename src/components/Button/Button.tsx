import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `cursor-pointer text-[1rem] font-semibold text-nowrap py-3 px-6 rounded-sm text-bg-color
          hover:brightness-95 
          active:brightness-75 
          focus:border-2 focus:border-gray-700
          transition-all duration-150`,
        className
      )}
    >
      {children}
    </button>
  );
}
