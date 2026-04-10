import { stats } from "../data/content";

export function StatsSection() {
  return (
    <section className="bg-card/50 border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
              data-ocid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <p className="font-display font-bold text-4xl md:text-5xl text-tight mb-1 text-primary">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
