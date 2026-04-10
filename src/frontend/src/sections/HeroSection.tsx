import { Button } from "../components/GlowButton";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x1080.jpg)",
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(var(--primary) / 0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          Rust · Web3 · AI
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-tight text-foreground mb-6 text-balance animate-slide-up">
          Engineering{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(var(--primary)), oklch(0.65 0.18 240))",
            }}
          >
            Future-Proof
          </span>
          <br />
          Systems
        </h1>

        <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-balance leading-relaxed animate-fade-in">
          MorseBits builds secure, scalable, and intelligent applications at the
          intersection of blockchain and artificial intelligence. We turn
          complex tech challenges into seamless digital solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Button
            type="button"
            variant="hero"
            size="lg"
            onClick={() => scrollTo("contact")}
            data-ocid="hero-cta-primary"
          >
            Book a Call
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => scrollTo("contact")}
            data-ocid="hero-cta-secondary"
          >
            Estimate Project Cost
          </Button>
        </div>

        {/* Service preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 max-w-4xl mx-auto">
          {[
            {
              icon: "⚙️",
              label: "Rust Systems Engineering",
              desc: "High-performance, memory-safe backend infrastructure",
            },
            {
              icon: "🔗",
              label: "Web3 & Decentralized Apps",
              desc: "Smart contract development on Solana & Ethereum",
            },
            {
              icon: "🧠",
              label: "Applied AI Solutions",
              desc: "Advanced ML models and predictive analytics",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-5 text-left hover:border-primary/50 hover:shadow-glow transition-smooth lift-on-hover"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 animate-fade-in">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
