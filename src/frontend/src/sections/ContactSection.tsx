import { useState } from "react";
import { Button } from "../components/GlowButton";
import { SectionHeading, SectionWrapper } from "../components/SectionWrapper";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper sectionId="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Ready to Build Something Great?"
        subtitle="Tell us about your project and we'll get back to you with a detailed proposal within 24 hours."
      />

      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <div
            className="bg-card border border-primary/40 rounded-xl p-12 text-center shadow-glow-accent"
            data-ocid="contact-success"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Message Sent!
            </h3>
            <p className="text-muted-foreground">
              Thanks for reaching out. We'll review your project details and
              respond within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 flex flex-col gap-5"
            data-ocid="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  data-ocid="contact-input-name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  data-ocid="contact-input-email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company"
                className="text-sm font-medium text-foreground"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                data-ocid="contact-input-company"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="service"
                className="text-sm font-medium text-foreground"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                data-ocid="contact-select-service"
              >
                <option value="">Select a service...</option>
                <option value="rust">Rust Development</option>
                <option value="web3">Web3 & Blockchain</option>
                <option value="ai">AI Services</option>
                <option value="marketing">Email Marketing</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, technical requirements, timeline, and budget..."
                className="bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                data-ocid="contact-input-message"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full mt-2"
              data-ocid="contact-submit"
            >
              Send Message
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We respond within 24 hours · No spam, ever · contact@morsebits.com
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
