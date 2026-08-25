import { CountUp } from "@/components/CountUp";
import heroImage from "@/assets/hero.jpg";

const STATS = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 20, suffix: "+", label: "Training Programs" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Muscular athlete preparing to lift a barbell in a dark premium gym"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8">
        <div className="max-w-3xl animate-fade-in">
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            Premium Fitness Club
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Build Your
            <br />
            <span className="text-outline">Strongest</span>{" "}
            <span className="text-primary">Self.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Train harder. Move better. Become stronger. Ismail Digital gives you the
            environment, coaching and motivation you need to transform your body and
            your mindset.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              Start Training
            </a>
            <a
              href="#programs"
              className="border border-foreground/30 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Explore Programs
            </a>
          </div>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
          <div>
            <dt className="sr-only">Gym Access</dt>
            <dd className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
              24/7
            </dd>
            <dd className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Gym Access
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
