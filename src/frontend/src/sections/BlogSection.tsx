import { Button } from "../components/GlowButton";
import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";
import { blogPosts } from "../data/content";

const categoryColors: Record<string, string> = {
  Rust: "#e05d44",
  Web3: "#3b82f6",
  AI: "#a855f7",
};

export function BlogSection() {
  return (
    <SectionWrapper sectionId="blog" alt>
      <SectionHeading
        eyebrow="Insights"
        title="From the MorseBits Lab"
        subtitle="Deep technical dives, architecture decisions, and lessons learned from the front lines of Rust, Web3, and AI development."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-smooth lift-on-hover group"
            data-ocid={`blog-post-${post.id}`}
          >
            {/* Decorative image placeholder */}
            <div
              className="h-44 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, oklch(var(--card)) 0%, ${categoryColors[post.category] ?? "#3b82f6"}22 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-mono text-6xl font-bold opacity-10"
                  style={{ color: categoryColors[post.category] ?? "#3b82f6" }}
                >
                  {post.category}
                </span>
              </div>
              {/* Category badge */}
              <span
                className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{
                  color: categoryColors[post.category] ?? "#3b82f6",
                  background: `${categoryColors[post.category] ?? "#3b82f6"}20`,
                  border: `1px solid ${categoryColors[post.category] ?? "#3b82f6"}40`,
                }}
              >
                {post.category}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-base text-foreground mb-3 tracking-tight leading-snug group-hover:text-primary transition-smooth">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              <button
                type="button"
                className="text-primary text-sm font-medium hover:opacity-70 transition-smooth flex items-center gap-1"
                data-ocid={`blog-read-more-${post.id}`}
              >
                Read article
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
