import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WHY_ITEMS } from "@/content/site";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why ISMAILIFY"
          title={
            <>
              Why Work With <span className="text-gold-gradient">ISMAILIFY?</span>
            </>
          }
          align="left"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <article className="group relative h-full border border-border bg-card/60 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-card-hover">
                <span className="font-display text-4xl font-bold text-primary/25 transition-colors duration-300 group-hover:text-primary/60">
                  {item.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
