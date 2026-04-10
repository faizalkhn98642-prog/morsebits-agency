import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";
import { processSteps } from "../data/content";

export function ProcessSection() {
  return (
    <SectionWrapper sectionId="process" alt>
      <SectionHeading
        eyebrow="How We Work"
        title="Our 7-Step Delivery Process"
        subtitle="A battle-tested methodology that ships on time, every time — with full transparency at every stage."
      />

      <div className="relative">
        {/* Connector line (desktop) */}
        <div
          className="hidden lg:block absolute top-7 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--primary) / 0.4), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 0.08}s` }}
              data-ocid={`process-step-${step.step}`}
            >
              {/* Step circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center text-xl mb-4 group-hover:border-primary group-hover:shadow-glow transition-smooth">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="font-mono text-xs text-primary/60 mb-1 tracking-widest">
                {String(step.step).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-sm text-foreground mb-2 tracking-tight leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
