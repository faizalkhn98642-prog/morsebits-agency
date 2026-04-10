import { Handshake, Lightbulb, Puzzle } from "lucide-react";
import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";

const PILLARS = [
  {
    id: "expertise",
    icon: Lightbulb,
    heading: "Strategic Expertise",
    description:
      "Our engineers bring deep, specialist knowledge in Rust, blockchain, and AI — not generalist dabbling. We've shipped production systems across every domain we serve, so you benefit from battle-tested patterns on day one.",
    accentClass: "text-primary bg-primary/10 border-primary/20",
  },
  {
    id: "solutions",
    icon: Puzzle,
    heading: "Made-For-You Solutions",
    description:
      "Off-the-shelf tools slow ambitious teams down. We design every architecture from first principles around your specific constraints, scale targets, and business logic — no copy-paste templates.",
    accentClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    id: "partnership",
    icon: Handshake,
    heading: "A Powerful Partnership",
    description:
      "We embed as a true technical partner, not a ticket-taking vendor. Transparent timelines, weekly demos, and a shared stake in your success mean you always know where things stand and why.",
    accentClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper sectionId="why-choose-us" alt>
      <SectionHeading
        eyebrow="Why MorseBits"
        title="Why Teams Choose Us"
        subtitle="The difference between good software and great software comes down to the people behind it — and the principles they build on."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-glow transition-smooth lift-on-hover group flex flex-col"
              data-ocid={`why-pillar-${pillar.id}`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 border transition-smooth ${pillar.accentClass} group-hover:scale-105`}
              >
                <Icon size={22} strokeWidth={1.75} />
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3 tracking-tight">
                {pillar.heading}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
