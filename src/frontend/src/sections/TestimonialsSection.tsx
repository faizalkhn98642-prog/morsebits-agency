import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";
import { testimonials } from "../data/content";

export function TestimonialsSection() {
  return (
    <SectionWrapper sectionId="testimonials">
      <SectionHeading
        eyebrow="Client Voices"
        title="What Our Clients Say"
        subtitle="Real feedback from the teams who trusted us with their most critical technical challenges."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-glow transition-smooth lift-on-hover ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
            data-ocid={`testimonial-${t.id}`}
          >
            {/* Quote marks */}
            <div
              className="text-4xl font-display font-bold leading-none mb-4 opacity-40 text-primary"
              aria-hidden="true"
            >
              "
            </div>

            <blockquote className="text-muted-foreground leading-relaxed text-sm mb-6">
              {t.quote}
            </blockquote>

            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-sm text-primary flex-shrink-0">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {t.author}
                </p>
                <p className="text-muted-foreground text-xs truncate">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
