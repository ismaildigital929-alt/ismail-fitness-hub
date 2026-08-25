import { Dumbbell, Target, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const REASONS = [
  {
    number: "01",
    icon: Trophy,
    title: "Expert Trainers",
    text: "Get guidance from experienced fitness professionals.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Premium Equipment",
    text: "Train with modern equipment for every fitness level.",
  },
  {
    number: "03",
    icon: Target,
    title: "Results-Driven Programs",
    text: "Structured workouts designed around real results.",
  },
  {
    number: "04",
    icon: Users,
    title: "Motivating Community",
    text: "Surround yourself with people who want to improve.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Why Train With <span className="text-primary">Ismail Digital?</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.number} delay={index * 120}>
              <article className="group relative h-full overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-extrabold text-foreground/5 transition-colors duration-300 group-hover:text-primary/10"
                  aria-hidden="true"
                >
                  {reason.number}
                </span>
                <span className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  {reason.number}
                </p>
                <h3 className="mt-2 font-display text-lg font-extrabold uppercase tracking-wide text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
