import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg";
};

export function Button({ className, variant = "default", size = "default", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a4a] disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-slate-950 text-white hover:bg-[#b88a3b]",
        variant === "outline" && "border border-slate-300 bg-transparent hover:bg-slate-100",
        size === "default" && "h-10 px-5 py-2",
        size === "lg" && "h-12 px-7 py-3 text-base",
        className
      )}
      {...props}
    />
  );
}
