import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/content/site";

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
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-[0.28em] text-foreground transition-colors hover:text-primary"
          aria-label={`${BRAND.name} home`}
        >
          ISMAIL<span className="text-primary">IFY</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden border border-primary/60 bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow sm:inline-block"
          >
            Let&rsquo;s Talk
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
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[28rem] border-b" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-sm font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Let&rsquo;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
