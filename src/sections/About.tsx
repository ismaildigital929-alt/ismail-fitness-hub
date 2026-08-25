import { Award, Dumbbell, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import aboutImage from "@/assets/about.jpg";

const FEATURES = [
  {
    icon: Award,
    title: "Expert Coaching",
    text: "Professional trainers who help you train smarter and achieve your goals.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    text: "High-quality equipment designed for strength, cardio and functional training.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Train alongside motivated people who push each other to become better.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full border-2 border-primary"
            aria-hidden="true"
          />
          <img
            src={aboutImage}
            alt="Dark premium gym interior with rows of modern strength equipment"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-2 bg-primary px-6 py-5 sm:-right-6">
            <p className="font-display text-3xl font-extrabold text-primary-foreground">10+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
              Years of Results
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              About Ismail Digital
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              More Than a Gym.
              <br />
              <span className="text-primary">It&rsquo;s a Lifestyle.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At Ismail Digital, we believe fitness is about more than lifting weights.
              It&rsquo;s about discipline, confidence, consistency and becoming the
              strongest version of yourself.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-7">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120}>
                <li className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/40 bg-card text-primary">
                    <feature.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={360}>
            <a
              href="#programs"
              className="mt-10 inline-block bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              Learn More
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
