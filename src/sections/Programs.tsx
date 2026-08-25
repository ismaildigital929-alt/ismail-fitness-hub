import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import strengthImg from "@/assets/program-strength.jpg";
import personalImg from "@/assets/program-personal.jpg";
import hiitImg from "@/assets/program-hiit.jpg";
import weightlossImg from "@/assets/program-weightloss.jpg";
import muscleImg from "@/assets/program-muscle.jpg";
import functionalImg from "@/assets/program-functional.jpg";

const PROGRAMS = [
  {
    name: "Strength Training",
    description: "Build power, muscle and overall strength.",
    image: strengthImg,
    alt: "Athlete performing a heavy barbell deadlift in a dark gym",
  },
  {
    name: "Personal Training",
    description: "One-on-one coaching designed around your goals.",
    image: personalImg,
    alt: "Personal trainer coaching a client through a dumbbell exercise",
  },
  {
    name: "HIIT",
    description: "High-intensity workouts designed to burn calories and improve endurance.",
    image: hiitImg,
    alt: "Athlete training explosively with heavy ropes in a dark gym",
  },
  {
    name: "Weight Loss",
    description: "Structured training to help you lose fat and improve your fitness.",
    image: weightlossImg,
    alt: "Athlete running on a treadmill in a dark cardio zone",
  },
  {
    name: "Muscle Building",
    description: "Progressive resistance training focused on building lean muscle.",
    image: muscleImg,
    alt: "Muscular athlete performing dumbbell curls under dramatic lighting",
  },
  {
    name: "Functional Fitness",
    description: "Improve mobility, balance, strength and everyday performance.",
    image: functionalImg,
    alt: "Athlete performing a kettlebell functional training movement",
  },
];

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              Train With <span className="text-primary">Purpose</span>
            </>
          }
          description="Six focused programs built by expert coaches — whatever your goal, there is a proven path waiting for you."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <Reveal key={program.name} delay={(index % 3) * 120}>
              <article className="group h-full border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-foreground">
                    {program.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
