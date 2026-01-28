import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button
      {...props}
      className={clsx(
        "rounded-full font-medium transition inline-flex items-center",
        size === "sm" && "px-6 py-3 text-sm",
        size === "md" && "px-8 py-4 text-base",
        size === "lg" && "px-10 py-6 text-lg",
        variant === "primary" &&
          "bg-blue-500 text-white border-4 border-blue-500 hover:border-sky-200 hover:shadow-[0px_0px_14px_rgba(60,130,246,0.8)]",
        variant === "secondary" &&
          "border-2 border-blue-600 text-black hover:bg-blue-500 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
