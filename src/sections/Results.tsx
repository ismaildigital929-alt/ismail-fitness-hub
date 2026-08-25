import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import davidImg from "@/assets/result-david.jpg";
import michaelImg from "@/assets/result-michael.jpg";
import jessicaImg from "@/assets/result-jessica.jpg";

const RESULTS = [
  {
    name: "David",
    goal: "Muscle Building",
    quote: "Built strength and gained 8kg of lean muscle.",
    image: davidImg,
    alt: "David flexing his muscular back showing his muscle building transformation",
  },
  {
    name: "Michael",
    goal: "Weight Loss",
    quote: "Lost 12kg and completely changed his lifestyle.",
    image: michaelImg,
    alt: "Michael standing lean and confident after his weight loss transformation",
  },
  {
    name: "Jessica",
    goal: "Fitness",
    quote: "Improved strength, confidence and endurance.",
    image: jessicaImg,
    alt: "Jessica showing her toned athletic physique after her fitness transformation",
  },
];

export function Results() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title={
            <>
              Real People.
              <br />
              <span className="text-outline-primary">Real Results.</span>
            </>
          }
          description="These members walked in with a goal and walked out transformed. You could be next."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((result, index) => (
            <Reveal key={result.name} delay={index * 120}>
              <article className="group relative h-full overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={result.image}
                    alt={result.alt}
                    width={832}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground">
                    {result.goal}
                  </span>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
                  <blockquote className="mt-3 text-base font-semibold leading-relaxed text-foreground">
                    &ldquo;{result.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                    — {result.name}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
