import { Reveal } from "@/components/Reveal";
import ctaImage from "@/assets/cta-bg.jpg";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <img
        src={ctaImage}
        alt="Silhouette of an athlete lifting a heavy barbell in a dramatic dark gym"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden="true"
      />

      <Reveal className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Your Future Self
          <br />
          <span className="text-primary">Will Thank You.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Stop waiting for the perfect time. Start building the body and confidence
          you&rsquo;ve always wanted.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-primary px-10 py-5 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-glow"
        >
          Join Ismail Digital
        </a>
      </Reveal>
    </section>
  );
}
