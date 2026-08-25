import { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Ismail Digital home">
          <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-extrabold uppercase tracking-widest text-foreground">
            Ismail<span className="text-primary">Digital</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-glow sm:inline-block"
          >
            Join Now
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[26rem] border-b" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="block bg-primary px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider text-primary-foreground"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
