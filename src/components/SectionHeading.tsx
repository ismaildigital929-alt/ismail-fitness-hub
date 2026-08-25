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
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-primary" aria-hidden="true" />}
      </span>
      <h2 className="font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
