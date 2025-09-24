import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `cursor-pointer text-[1rem] font-semibold text-nowrap py-2.5 px-5 rounded-sm text-main-black
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
