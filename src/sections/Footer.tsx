import { Dumbbell, Facebook, Instagram, Youtube } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: TikTokIcon, label: "TikTok" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2" aria-label="Ismail Digital home">
              <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
                <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-extrabold uppercase tracking-widest text-foreground">
                Ismail<span className="text-primary">Digital</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Train hard. Stay consistent. Become stronger.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={`Ismail Digital on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.3em] text-foreground">
              Navigation
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.3em] text-foreground">
              Contact
            </h2>
            <a
              href="mailto:ismaildigital929@gmail.com"
              className="mt-5 block break-all text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              ismaildigital929@gmail.com
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Open 24/7 for members.</p>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            &copy; 2026 Ismail Digital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
