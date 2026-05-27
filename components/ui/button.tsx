import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

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
        "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-navy text-white hover:bg-gold hover:text-slate-950",
        variant === "outline" && "border border-white/40 bg-transparent text-white hover:bg-white hover:text-slate-950",
        size === "default" && "h-11 px-5 text-sm",
        size === "lg" && "h-14 px-8 text-base",
        className
      )}
      {...props}
    />
  );
}
