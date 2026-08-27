import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignClass}`}>
      <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
        <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
