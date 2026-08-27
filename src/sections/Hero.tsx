import { ArrowRight } from "lucide-react";
import portrait from "@/assets/ismail-hero.jpg";

const CREDIBILITY = ["Strategy", "Creativity", "Growth"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="animate-fade-in">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            Digital Marketing • Branding • Growth
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Turn Your Brand Into a{" "}
            <span className="text-gold-gradient">Digital Growth Machine.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I help businesses build powerful digital brands, reach the right audience, and
            turn online attention into real business growth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              Let&rsquo;s Work Together
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View My Work
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {CREDIBILITY.map((item, index) => (
              <li key={item} className="flex items-center gap-6">
                {index > 0 && <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />
          <img
            src={portrait}
            alt="Ismail, digital marketing consultant and founder of ISMAILIFY"
            width={1024}
            height={1280}
            fetchPriority="high"
            className="relative aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="glass absolute -bottom-6 left-4 px-6 py-4 sm:left-8">
            <p className="font-display text-2xl font-bold text-primary">ISMAILIFY</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Digital Strategist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
