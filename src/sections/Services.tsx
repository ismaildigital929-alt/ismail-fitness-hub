import { Gem, PenLine, Search, Share2, Target, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/content/site";

const ICONS = { share2: Share2, search: Search, target: Target, penLine: PenLine, gem: Gem, trendingUp: TrendingUp };

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          description="Strategic digital marketing designed to make your brand visible, valuable, and impossible to ignore."
        />

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={index * 80} className="h-full">
                <article className="group relative h-full bg-background p-8 transition-colors duration-300 hover:bg-card sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center border border-primary/30 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <span
                    className="mt-7 block h-px w-0 bg-primary transition-all duration-500 group-hover:w-16"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
