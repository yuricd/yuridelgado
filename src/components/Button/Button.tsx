import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `cursor-pointer text-[1rem] font-semibold text-nowrap py-2 px-5 rounded-sm text-main-black border-2 border-transparent
          hover:brightness-95 
          active:brightness-75 
          focus:border-white
          transition-all duration-150`,
        className
      )}
    >
      {children}
    </button>
  );
}
