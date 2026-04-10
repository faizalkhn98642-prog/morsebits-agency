export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  subServices?: string[];
  accentClass?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "Blockchain" | "AI" | "Rust" | "Web3" | "FinTech";
  tags: string[];
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}
