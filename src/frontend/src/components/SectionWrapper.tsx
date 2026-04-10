import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  sectionId?: string;
  alt?: boolean;
  noPadding?: boolean;
}

export function SectionWrapper({
  sectionId,
  alt = false,
  noPadding = false,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={sectionId}
      className={cn(
        alt ? "bg-card/30" : "bg-background",
        !noPadding && "py-20 md:py-28",
        className,
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-tight text-foreground mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
