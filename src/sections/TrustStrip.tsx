import { Reveal } from "@/components/Reveal";
import { CLIENT_LOGOS } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface/50 py-12">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
          Helping brands build visibility, authority &amp; growth online.
        </p>
        {/* Replace these text placeholders with real client logo images. */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {CLIENT_LOGOS.map((logo) => (
            <li
              key={logo}
              className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-foreground/35 transition-colors duration-300 hover:text-primary"
            >
              {logo}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
