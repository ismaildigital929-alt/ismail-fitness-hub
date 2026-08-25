import { Facebook, Instagram, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import alexImg from "@/assets/trainer-alex.jpg";
import marcusImg from "@/assets/trainer-marcus.jpg";
import sarahImg from "@/assets/trainer-sarah.jpg";

const TRAINERS = [
  {
    name: "Alex Carter",
    specialty: "Strength & Conditioning Coach",
    image: alexImg,
    alt: "Portrait of strength and conditioning coach Alex Carter with arms crossed",
  },
  {
    name: "Marcus Johnson",
    specialty: "Personal Trainer",
    image: marcusImg,
    alt: "Portrait of personal trainer Marcus Johnson smiling with a towel over his shoulder",
  },
  {
    name: "Sarah Williams",
    specialty: "Fitness & Wellness Coach",
    image: sarahImg,
    alt: "Portrait of fitness and wellness coach Sarah Williams in the gym",
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

export function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-20 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title={
            <>
              Meet Our <span className="text-primary">Expert Trainers</span>
            </>
          }
          description="Certified coaches who live what they teach — and know how to get you to your goal."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 120}>
              <article className="group relative overflow-hidden border border-border bg-card">
                <img
                  src={trainer.image}
                  alt={trainer.alt}
                  width={832}
                  height={1024}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-foreground">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    {trainer.specialty}
                  </p>
                  <ul className="mt-4 flex translate-y-3 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href="#"
                          aria-label={`${trainer.name} on ${social.label}`}
                          className="flex h-9 w-9 items-center justify-center border border-foreground/20 text-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <social.icon className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
