import { Facebook, Linkedin, Twitter } from "lucide-react";

const currentYear = new Date().getFullYear();

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Rust Development", href: "#services" },
      { label: "Web3 & Blockchain", href: "#services" },
      { label: "AI Services", href: "#services" },
      { label: "Email Marketing", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/morsebits",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/morsebits",
    Icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/morsebits",
    Icon: Twitter,
  },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm glow-accent">
                M
              </span>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                MorseBits
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Building tomorrow's web, today. We engineer secure, scalable, and
              intelligent applications for the most ambitious teams.
            </p>

            {/* Contact */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="mailto:contact@morsebits.com"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow text-muted-foreground hover:text-primary text-sm transition-smooth"
                aria-label="Email"
              >
                <span>✉️</span>
                <span>contact@morsebits.com</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-2" data-ocid="footer-social">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-muted/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-smooth"
                  data-ocid={`footer-social-${label.toLowerCase().replace(/\s|\//g, "-")}`}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-muted-foreground hover:text-primary text-sm transition-smooth"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} MorseBits Private Limited. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
