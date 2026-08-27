import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ABOUT_STATS } from "@/content/site";
import aboutImage from "@/assets/ismail-about.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div
            className="absolute -left-5 -top-5 h-full w-full border border-primary/40"
            aria-hidden="true"
          />
          <img
            src={aboutImage}
            alt="Ismail working on a digital marketing analytics dashboard"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              About Ismail
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              More Than Marketing.
              <br />
              <span className="text-gold-gradient">I Build Digital Growth.</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Digital marketing isn&rsquo;t just about posting content or running ads.
              It&rsquo;s about understanding people, creating the right message, putting it
              in front of the right audience, and turning attention into action.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Through ISMAILIFY, I help businesses create stronger digital identities, reach
              their ideal customers, and build marketing systems designed for long-term
              growth — combining strategy, creativity, content, branding and data in one
              coherent plan.
            </p>
            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-2 border border-foreground/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Learn More About Ismail
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Editable placeholder statistics */}
          <dl className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {ABOUT_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90}>
                <div className="h-full bg-background p-5">
                  <dd className="font-display text-3xl font-bold text-primary">
                    {"display" in stat && stat.display ? (
                      stat.display
                    ) : (
                      <CountUp value={stat.value ?? 0} suffix={stat.suffix ?? ""} />
                    )}
                  </dd>
                  <dt className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
