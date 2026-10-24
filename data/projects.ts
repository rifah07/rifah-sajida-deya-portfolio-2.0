import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "hallmate",
    title: "HallMate: Women's Hall Portal",
    description:
      "The website and resident portal for a women's hall at Jagannath University: ten roles, from residents and house tutors to the provost, guard and dining staff, each with a dashboard for their job, plus a public site with admission, events and notices.",
    image: "/projects/hallmate.png",
    techStack: ["Next.js 16", "TypeScript", "Express 5", "PostgreSQL", "Prisma", "SSLCommerz"],
    features: [
      "Privacy enforced in the API: support staff never see residents' phones or rooms; tutors see only their floor",
      "Digital ID card with QR and a phone-camera scanner for the gate; visitor approval and check-in",
      "Seat renewal bills with online payment (bKash, Nagad, cards) verified server to server",
      "Public read-only demo logins for every role, enforced in one middleware and covered by a test",
    ],
    github: {
      frontend: "https://github.com/rifah07/hallmate-frontend",
      backend: "https://github.com/rifah07/hallmate-backend",
    },
    live: {
      frontend: "https://hallmate.vercel.app",
      backend: "https://hallmate-backend.vercel.app/health",
    },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "devscript",
    title: "DevScript: Developer Writing Platform",
    description:
      "One NestJS API behind two branded sites: a technical magazine open to every developer and a Bangla/English poetry journal, with strict per-site data isolation.",
    image: "/projects/devscript.png",
    techStack: ["NestJS", "GraphQL", "MongoDB", "Next.js 16", "Gemini", "TypeScript"],
    features: [
      "Rotating refresh tokens, email verification and a security audit pinned by regression tests",
      "Per-user AI quotas enforced atomically in MongoDB; semantic related posts over Gemini embeddings",
      "Autosaving Markdown studio with images, series and scheduled publishing",
      "Server-rendered, mostly static pages with a strict Content Security Policy",
    ],
    github: {
      frontend: "https://github.com/rifah07/devscript-web",
      backend: "https://github.com/rifah07/devscript-api",
    },
    live: {
      frontend: "https://devscript-seven.vercel.app",
    },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "shopbot-ai-ecommerce-chatbot",
    title: "ShopBot: AI E-Commerce Chatbot",
    description:
      "A storefront where customers can also shop entirely through chat. Gemini only turns messages into structured intents; Zod validates them and the service layer does the actual work, so the AI never touches business data directly.",
    image: "/projects/shopbot.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Gemini AI",
      "Zod",
      "Tailwind CSS",
    ],
    features: [
      "10 chat intents: browse, add/remove/update cart, checkout, cancel orders and request missing sizes",
      "Falls back cleanly when Gemini is overloaded or returns malformed JSON",
      "JWT access + refresh tokens in HTTP-only cookies, with customer and admin roles",
      "Admin dashboard for orders and size requests; chat history saved per user",
    ],
    github: { frontend: "https://github.com/rifah07/ai-ecommerce-chatbot" },
    live: { frontend: "https://ai-ecommerce-chatbot-six.vercel.app/shop" },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "shopsphere",
    title: "ShopSphere E-commerce Platform",
    description:
      "A full-featured multivendor e-commerce REST API with competitor price scraping, payments, and analytics.",
    image: "/projects/shopsphere.png",
    techStack: [
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Puppeteer",
      "Stripe",
      "JWT",
    ],
    features: [
      "Role-based authentication (Admin/Seller/Buyer) with JWT",
      "Competitor price scraping via Puppeteer (headless Chrome) with smart pricing suggestions",
      "Payment integration (Stripe/PayPal/COD) with coupon and refund systems",
      "Product search, filtering, cart, wishlist, Q&A, and soft-delete",
      "Revenue analytics dashboard for admin and sellers",
      "Full OpenAPI 3.0 Swagger documentation",
    ],
    github: {
      backend:
        "https://github.com/rifah07/ShopSphere__A-Complete-World-for-Shopping__Backend",
    },
    live: {
      frontend: "https://shopsphere-complete-world-for-shopping.lovable.app/",
      backend:
        "https://shopsphere-a-complete-world-for-shopping.onrender.com/api-docs",
    },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "multi-tenant-workspace",
    title: "Multi-Tenant Workspace API",
    description:
      "A scalable multi-tenant backend system with strict tenant isolation and role-based access control.",
    image: "/projects/workspace.png",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    features: [
      "Tenant isolation with organization-level data boundaries",
      "Role-based access (Admin, Member)",
      "ACID-compliant schema with transactions",
      "Optimized indexed queries for performance",
    ],
    github: { backend: "https://github.com/rifah07/multi_tenant_organization" },
    live: {
      backend: "https://multi-tenant-organization-9d2r.onrender.com/api-docs",
    },
    category: "Backend",
    featured: true,
  },
  {
    id: "telegram-expense-tracker-bot",
    title: "Telegram Expense Tracker Bot",
    description:
      "A full-stack expense tracking system with a Telegram bot interface, JWT-secured REST API, and a React dashboard, with AI-powered natural language expense parsing via Gemini.",
    image: "/projects/expense-tracker.png",
    techStack: [
      "Node.js",
      "Express",
      "Telegram API",
      "Prisma",
      "PostgreSQL",
      "Gemini AI",
      "React",
    ],
    features: [
      "AI parsing via Gemini: type '500 uber ride yesterday' and it extracts amount, category, and date",
      "JWT auth with Telegram ID - no password needed",
      "Full REST API: expenses, budgets, breakdowns by day/week/month",
      "React dashboard with doughnut chart, budget progress bar, and expense filters",
    ],
    github: {
      frontend:
        "https://github.com/rifah07/expense-tracker-telegram-bot-frontend",
      backend:
        "https://github.com/rifah07/expense-tracker-telegram-bot-backend",
    },
    live: {
      frontend: "https://expense-tracker-telegram-bot-fronte.vercel.app/",
      backend: "https://t.me/ExpenseTrack_R_Bot",
    },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "mini-ecommerce-nest",
    title: "Mini E-Commerce Platform",
    description:
      "A production-ready e-commerce system focusing on modular architecture, transactional data consistency, and fraud-resistant order processing.",
    image: "/projects/mini-ecommerce.png",
    techStack: ["NestJS", "TypeScript", "MySQL", "TypeORM", "JWT"],
    features: [
      "Transactional order processing with atomic stock updates",
      "JWT auth with HTTP-only cookies (access + refresh)",
      "Fraud prevention with cancellation limits",
      "Order state machine with controlled transitions",
    ],
    github: {
      frontend: "https://github.com/rifah07/mini_ecommerce_frontend",
      backend: "https://github.com/rifah07/mini_ecommerce_nestjs",
    },
    live: {
      frontend: "https://mini-ecommerce-frontend-sandy.vercel.app/",
      backend: "https://mini-ecommerce-nestjs.onrender.com/api/docs/",
    },
    category: "Full Stack",
    featured: false,
  },
  {
    id: "financial-tracker",
    title: "Financial Tracker Suite",
    description:
      "A financial management system with analytics, reporting, and automation.",
    image: "/projects/financial-tracker.png",
    techStack: ["Node.js", "MongoDB", "Express"],
    features: [
      "JWT authentication with secure password hashing",
      "Transaction tracking with auto balance calculation",
      "PDF report generation",
      "Email notifications",
    ],
    github: {
      frontend: "https://github.com/rifah07/Financial-Tracker-Suite__Frontend",
      backend: "https://github.com/rifah07/Financial-Tracker-Suite__Backend",
    },
    live: {
      frontend: "https://financial-tracker-suite-frontend.vercel.app/",
      backend: "https://financial-tracker-suite-nodejs.onrender.com/api-docs/",
    },
    category: "Full Stack",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
