import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";
import { services } from "../data/content";

export function ServicesSection() {
  return (
    <SectionWrapper sectionId="services" alt>
      <SectionHeading
        eyebrow="What We Do"
        title="Services That Drive Results"
        subtitle="From low-level systems programming to cutting-edge AI integrations, we cover the full technical stack your business needs to win."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-glow transition-smooth lift-on-hover group"
            data-ocid={`service-card-${service.id}`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5 border transition-smooth ${service.accentClass ?? "bg-primary/10 border-primary/20"} group-hover:border-primary/40`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-xl text-foreground mb-3 tracking-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-5">
              {service.description}
            </p>

            {/* Sub-services */}
            {service.subServices && (
              <div className="flex flex-wrap gap-2">
                {service.subServices.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-muted/20 text-muted-foreground"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
