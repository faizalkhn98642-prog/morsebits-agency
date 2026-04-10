# Design Brief

## Direction

MorseBits Dark Agency — Futuristic Web3/Rust development agency website. Deep navy base with electric cyan accents, maximalist scale with minimalist color discipline.

## Tone

Brutalist + tech-forward. Clean brutalism with electric accents — no playfulness, no warmth. Every pixel earns its place. Inspired by Stripe + Linear visual language applied to agency positioning.

## Differentiation

Glowing electric blue card borders with sharp, tight-tracked Space Grotesk headlines on deep navy. Generous whitespace amplifies every element's impact. Subtle gradients only on headline text overlays for readability.

## Color Palette

| Token      | Light OKLCH       | Dark OKLCH         | Role                          |
| ---------- | ----------------- | ------------------ | ----------------------------- |
| background | 0.99 0.005 265    | 0.10 0.02 265      | Primary surface               |
| foreground | 0.18 0.01 265     | 0.95 0.008 265     | Primary text                  |
| card       | 1.0 0.0 0         | 0.14 0.025 265     | Elevated card surface         |
| primary    | 0.55 0.22 265     | 0.72 0.22 200      | Electric blue (accent, CTA)   |
| secondary  | 0.92 0.01 265     | 0.18 0.02 265      | Muted blue-gray               |
| muted      | 0.92 0.01 265     | 0.30 0.02 265      | Secondary text, disabled      |
| accent     | 0.55 0.22 265     | 0.72 0.22 200      | Highlight, interactive       |

## Typography

- Display: Space Grotesk — bold, geometric, hero headlines (72px+, letter-spacing: -0.05em)
- Body: Plus Jakarta Sans — professional, highly readable (16px-18px for paragraphs, 14px for UI)
- Mono: JetBrains Mono — code samples, technical content
- Scale: hero `text-5xl md:text-7xl font-bold text-tight`, h2 `text-3xl md:text-5xl font-bold text-tight`, labels `text-xs font-semibold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Layered surface hierarchy with electric glow accents. Cards use subtle borders (1px) with glowing shadow on hover. No drop shadows — glow effects only. Navigation sticky with 8px blur. Muted background cards alternate sections.

## Structural Zones

| Zone    | Background          | Border                | Notes                                          |
| ------- | ------------------- | --------------------- | ---------------------------------------------- |
| Header  | 0.14 0.025 265 (dk) | 1px electric primary  | Sticky, glass blur, no logo shadow             |
| Content | 0.10 0.02 265 (dk)  | —                     | Hero on background, sections on card surfaces  |
| Cards   | 0.14 0.025 265 (dk) | 1px primary + glow    | Lift on hover, glow-pulse animation            |
| Footer  | 0.14 0.025 265 (dk) | top 1px primary       | Links in muted, CTA in primary                 |

## Spacing & Rhythm

Section gaps 80px+ vertical. Card padding 32px. Hero CTA buttons margin-top 40px. Service grid gaps 24px. Micro-spacing: 8px/12px/16px increments. Generous breathing room emphasizes each section's independence.

## Component Patterns

- Buttons: Filled primary for primary CTAs, outline secondary for secondary. Border-radius 12px (pill). On hover: lift 4px, glow intensifies.
- Cards: Semi-transparent 0.05 opacity overlay, 1px electric border, hover glow. Border-radius 8px.
- Links: Foreground color, underline on hover, no glow.
- Labels: Uppercase, font-semibold, tracking-widest, muted text. Above each section.

## Motion

- Entrance: fade-in 0.5s ease-out on page load, staggered slide-up for card decks
- Hover: lift 4px + glow-lg shadow 0.3s smooth, no bounce
- Decorative: glow-pulse 3s infinite on hero CTA and featured cards

## Constraints

- No warm colors. Cool undertones (hue 200-280) only.
- Electric primary reserved for CTAs, card borders, accents — use sparingly.
- No rgba colors in gradients — OKLCH functions only.
- Minimum 80px section gaps. Never crowd.
- Headlines: Space Grotesk, letter-spacing -0.05em, always text-tight.

## Signature Detail

Glowing electric cyan card borders with hover lift and glow-pulse animation. Instantly recognizable Web3-forward aesthetic. Electric blue hue 200 (cyan) separates MorseBits from generic agency sites.
