"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export default function CTAButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CTAButtonProps) {
  return (
    <motion.button
      {...props}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0px 10px 30px rgba(60,130,246,0.5), inset 0px -2px 5px rgba(0,0,0,0.1)"
            : "0px 8px 20px rgba(0, 0, 0, 0.25), inset 0px -1px 3px rgba(0,0,0,0.05)",
        borderColor: variant === "primary" ? "#7dd3fc" : "#3b82f6",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow:
          variant === "primary"
            ? "0px 4px 8px rgba(0,0,0,0.3), inset 0px 2px 4px rgba(0,0,0,0.2)"
            : "0px 3px 6px rgba(0,0,0,0.2), inset 0px 1px 2px rgba(0,0,0,0.1)",
        transition: { duration: 0.1 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={clsx(
        "rounded-full font-medium inline-flex items-center justify-center cursor-pointer border select-none",
        size === "sm" && "px-6 py-3 text-sm",
        size === "md" && "px-8 py-4 text-base",
        size === "lg" && "px-10 py-6 text-lg",
        variant === "primary" &&
          "bg-blue-500 text-white border-4 border-blue-500",
        variant === "secondary" &&
          "bg-white text-black border-2 border-blue-600",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
