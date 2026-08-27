import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/content/site";

export function Process() {
  return (
    <section className="border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Process"
          title="From Idea to Impact"
          description="A clear, repeatable path from understanding your business to scaling what works."
        />

        <ol className="relative mt-16 space-y-px border-l border-border pl-0">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <li className="group relative grid gap-3 border-b border-border py-8 pl-8 transition-colors duration-300 hover:bg-card/60 sm:grid-cols-[auto_1fr_2fr] sm:items-center sm:gap-8 sm:pl-10">
                <span
                  className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full bg-border transition-colors duration-300 group-hover:bg-primary"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-bold tracking-[0.2em] text-primary">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
