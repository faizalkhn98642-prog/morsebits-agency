import { useState } from "react";
import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";
import { portfolioItems } from "../data/content";
import type { PortfolioItem } from "../types";

const CATEGORIES = [
  "All",
  "Blockchain",
  "Web3",
  "AI",
  "Rust",
  "FinTech",
] as const;

type CategoryKey = PortfolioItem["category"];

const categoryConfig: Record<
  CategoryKey,
  { bar: string; badge: string; text: string }
> = {
  Blockchain: {
    bar: "from-primary to-transparent",
    badge: "bg-primary/10 border-primary/30 text-primary",
    text: "text-primary",
  },
  Web3: {
    bar: "from-blue-500 to-transparent",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    text: "text-blue-400",
  },
  AI: {
    bar: "from-purple-500 to-transparent",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    text: "text-purple-400",
  },
  Rust: {
    bar: "from-orange-500 to-transparent",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    text: "text-orange-400",
  },
  FinTech: {
    bar: "from-emerald-500 to-transparent",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    text: "text-emerald-400",
  },
};

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  return (
    <SectionWrapper sectionId="portfolio">
      <SectionHeading
        eyebrow="Our Work"
        title="Projects That Define Us"
        subtitle="A selection of the complex technical challenges we've solved for clients across industries."
      />

      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 justify-center mb-12"
        data-ocid="portfolio-filter"
      >
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
              filter === cat
                ? "bg-primary text-primary-foreground shadow-glow"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-card/40"
            }`}
            data-ocid={`portfolio-filter-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((item) => {
          const config = categoryConfig[item.category];
          return (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-smooth lift-on-hover group"
              data-ocid={`portfolio-item-${item.id}`}
            >
              {/* Colored top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${config.bar}`} />

              <div className="p-6">
                {/* Category badge */}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 border ${config.badge}`}
                >
                  {item.category}
                </span>

                <h3
                  className={`font-display font-bold text-base text-foreground mb-2 tracking-tight group-hover:transition-smooth ${config.text} group-hover:opacity-100 opacity-90 transition-smooth`}
                >
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-muted/30 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
