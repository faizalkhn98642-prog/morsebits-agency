import type {
  BlogPost,
  PortfolioItem,
  ProcessStep,
  Service,
  Stat,
  Testimonial,
} from "../types";

export const services: Service[] = [
  {
    id: "rust",
    icon: "⚙️",
    title: "Rust Development",
    description:
      "High-performance, memory-safe applications built with Rust. From backend services to embedded systems.",
    subServices: [
      "Custom Development",
      "Consulting",
      "Web Design",
      "Enterprise Applications",
      "Custom Blockchains",
      "NFT Marketplace",
    ],
    accentClass: "bg-orange-500/10 border-orange-500/20",
  },
  {
    id: "web3",
    icon: "🔗",
    title: "Web3 & Blockchain",
    description:
      "Decentralized platform development on Solana, Ethereum, and emerging L2 networks with full DeFi integration.",
    subServices: [
      "Smart Contracts",
      "DeFi Protocols",
      "NFT Ecosystems",
      "DAO Governance",
      "Cross-chain Bridges",
      "Token Launches",
    ],
    accentClass: "bg-primary/10 border-primary/20",
  },
  {
    id: "ai",
    icon: "🧠",
    title: "AI Services",
    description:
      "Custom machine learning models and algorithm solutions for business intelligence, customer insights, and automation.",
    subServices: [
      "Predictive Analytics",
      "NLP Solutions",
      "Computer Vision",
      "Recommendation Engines",
      "LLM Integration",
      "MLOps",
    ],
    accentClass: "bg-purple-500/10 border-purple-500/20",
  },
  {
    id: "marketing",
    icon: "📈",
    title: "Email Marketing",
    description:
      "Strategic digital marketing campaigns designed to boost online sales, grow audiences, and maximize ROI.",
    subServices: [
      "Campaign Strategy",
      "Automation Flows",
      "A/B Testing",
      "Analytics & Reporting",
      "List Segmentation",
      "CRM Integration",
    ],
    accentClass: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export const stats: Stat[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Blockchain Solutions" },
  { value: "4+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Customer Request",
    description:
      "You share your vision, goals, and technical requirements. We listen and ask the right questions.",
    icon: "💬",
  },
  {
    step: 2,
    title: "Specs & Cost Estimates",
    description:
      "We produce a detailed technical specification and transparent cost breakdown — no surprises.",
    icon: "📋",
  },
  {
    step: 3,
    title: "Prototyping & UX/UI Design",
    description:
      "Interactive wireframes and high-fidelity designs validated with real user feedback before we write a line of code.",
    icon: "🎨",
  },
  {
    step: 4,
    title: "Frontend & Backend Development",
    description:
      "Parallel development sprints with weekly demos and continuous integration for rapid iteration.",
    icon: "💻",
  },
  {
    step: 5,
    title: "Testing",
    description:
      "Rigorous QA: unit tests, integration tests, security audits, and load testing to ensure production readiness.",
    icon: "🧪",
  },
  {
    step: 6,
    title: "Delivery",
    description:
      "Smooth deployment to your infrastructure with full documentation, knowledge transfer, and go-live support.",
    icon: "🚀",
  },
  {
    step: 7,
    title: "Ongoing Support",
    description:
      "Post-launch monitoring, performance optimization, and priority support to keep your product thriving.",
    icon: "🛡️",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "MorseBits delivered our entire blockchain infrastructure in record time. Their Rust expertise is second to none — the system handles 10k TPS without breaking a sweat.",
    author: "Arjun Mehta",
    role: "CTO",
    company: "MimirChain",
    avatar: "AM",
  },
  {
    id: "t2",
    quote:
      "We needed a DeFi protocol that was both secure and blazing fast. MorseBits not only nailed the technical execution but also challenged our thinking in the best way possible.",
    author: "Sofia Reyes",
    role: "CEO",
    company: "CryptoWave",
    avatar: "SR",
  },
  {
    id: "t3",
    quote:
      "From ideation to launch in 8 weeks — the team's ability to turn complex requirements into elegant solutions is genuinely impressive. Best technical partnership we've had.",
    author: "Daniel Park",
    role: "Product Manager",
    company: "NextGen Apps",
    avatar: "DP",
  },
  {
    id: "t4",
    quote:
      "Security and compliance in FinTech is non-negotiable. MorseBits understood that from day one. Their Rust backend has been running in production for 18 months with zero incidents.",
    author: "Priya Kapoor",
    role: "Head of Development",
    company: "FinTech Solutions",
    avatar: "PK",
  },
  {
    id: "t5",
    quote:
      "We needed custom AI models to track sustainability metrics at scale. MorseBits built exactly what we needed and provided ongoing support that kept us moving.",
    author: "Lars Eriksson",
    role: "Project Lead",
    company: "Net-Zero Initiative",
    avatar: "LE",
  },
  {
    id: "t6",
    quote:
      "The e-commerce platform MorseBits built handles our 200k daily users seamlessly. The attention to performance and UX details set them apart from every other agency we've worked with.",
    author: "Aisha Mohammed",
    role: "CEO",
    company: "Bizzy Buy",
    avatar: "AM",
  },
  {
    id: "t7",
    quote:
      "Our email marketing automation went from mediocre to exceptional after MorseBits overhauled the system. Open rates up 67%, conversions up 41%. The data speaks for itself.",
    author: "Tom Whitfield",
    role: "CMO",
    company: "W4U Marketing",
    avatar: "TW",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "MimirChain Core Protocol",
    description:
      "High-throughput L1 blockchain written in Rust with custom consensus mechanism achieving 10,000+ TPS.",
    category: "Blockchain",
    tags: ["Rust", "Consensus", "P2P Networking"],
  },
  {
    id: "p2",
    title: "CryptoWave DeFi Platform",
    description:
      "Full-stack DeFi protocol on Solana with AMM, liquidity pools, and yield farming mechanisms.",
    category: "Web3",
    tags: ["Solana", "Rust", "DeFi", "Anchor"],
  },
  {
    id: "p3",
    title: "NeuralEdge Analytics",
    description:
      "Enterprise ML platform for real-time customer behaviour prediction with 94% accuracy on conversion propensity.",
    category: "AI",
    tags: ["PyTorch", "Rust FFI", "Kafka", "PostgreSQL"],
  },
  {
    id: "p4",
    title: "ChainVault NFT Marketplace",
    description:
      "Gas-optimized NFT marketplace on Ethereum supporting ERC-721 and ERC-1155 with cross-chain bridging.",
    category: "Web3",
    tags: ["Ethereum", "Solidity", "IPFS", "React"],
  },
  {
    id: "p5",
    title: "Bizzy Buy Commerce Engine",
    description:
      "Custom e-commerce backend in Rust serving 200k daily users with sub-10ms response times globally.",
    category: "Rust",
    tags: ["Rust", "Actix-web", "Redis", "PostgreSQL"],
  },
  {
    id: "p6",
    title: "FinVault Compliance Suite",
    description:
      "Automated KYC/AML compliance system with real-time transaction monitoring and regulatory reporting.",
    category: "FinTech",
    tags: ["Rust", "Compliance", "ML", "Microservices"],
  },
  {
    id: "p7",
    title: "Net-Zero Carbon Tracker",
    description:
      "AI-powered sustainability platform tracking scope 1-3 emissions for enterprise organizations.",
    category: "AI",
    tags: ["Python", "ML", "Dashboard", "API Integration"],
  },
  {
    id: "p8",
    title: "GovDAO Governance Protocol",
    description:
      "On-chain governance framework enabling token-weighted voting with time-locked execution and quorum controls.",
    category: "Blockchain",
    tags: ["Substrate", "Rust", "DAO", "Smart Contracts"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title:
      "Why Rust is the Language of Choice for High-Stakes Blockchain Infrastructure",
    excerpt:
      "Memory safety, zero-cost abstractions, and fearless concurrency — we break down why Rust dominates the blockchain infrastructure stack and what it means for your next project.",
    category: "Rust",
    date: "March 15, 2025",
    readTime: "8 min read",
  },
  {
    id: "b2",
    title:
      "Building Gas-Efficient DeFi Protocols: Lessons from 10+ Deployments",
    excerpt:
      "Gas optimization is an art and a science. After deploying over a dozen DeFi protocols, we've distilled the patterns that cut gas costs by 30-60% without compromising security.",
    category: "Web3",
    date: "February 28, 2025",
    readTime: "12 min read",
  },
  {
    id: "b3",
    title: "Practical LLM Integration for Enterprise: Beyond the Hype",
    excerpt:
      "LLMs offer real business value — but only when integrated with discipline. We share our framework for evaluating, integrating, and measuring ROI on AI language model deployments.",
    category: "AI",
    date: "January 20, 2025",
    readTime: "10 min read",
  },
];
