import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-200 select-none";

const variants: Record<Variant, string> = {
  // Wypełniony (główny CTA)
  primary:
    "bg-paper text-ink hover:bg-white hover:shadow-[0_0_0_1px_rgba(244,242,237,0.5)]",
  // Obrysowany (drugorzędny CTA)
  outline:
    "border border-line text-paper hover:border-paper/50 hover:bg-paper/5",
  // Sam tekst (bez ramki) — np. w navbarze
  ghost: "text-paper hover:text-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
