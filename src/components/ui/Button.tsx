import type { ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly variant?: ButtonVariant;
  readonly children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light shadow-md hover:shadow-lg",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300 cursor-pointer text-base",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
