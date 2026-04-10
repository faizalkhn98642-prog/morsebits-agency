import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { Button } from "./GlowButton";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

const SECTION_IDS = [
  "services",
  "why-choose-us",
  "portfolio",
  "process",
  "testimonials",
  "blog",
  "contact",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent",
      )}
      data-ocid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="MorseBits home"
          data-ocid="nav-logo"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm glow-accent">
            M
          </span>
          <span className="font-display font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-smooth">
            MorseBits
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/20",
                  )}
                  data-ocid={`nav-link-${id}`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => handleNavClick("#contact")}
            data-ocid="nav-cta"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-ocid="nav-hamburger"
        >
          <span
            className="block w-5 h-0.5 bg-current mb-1 transition-smooth"
            style={{
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 bg-current mb-1 transition-smooth"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-current transition-smooth"
            style={{
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-card/95 backdrop-blur-md border-b border-border transition-smooth overflow-hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        data-ocid="nav-mobile-menu"
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-smooth"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2 border-t border-border mt-2">
            <Button
              type="button"
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => handleNavClick("#contact")}
            >
              Book a Call
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
