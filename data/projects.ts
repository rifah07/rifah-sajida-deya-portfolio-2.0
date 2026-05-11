import { Project } from "@/types/project";

export const projects: Project[] = [
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
    id: "shopsphere",
    title: "ShopSphere E-commerce Platform",
    description:
      "A full-featured e-commerce system with authentication, payments, and analytics.",
    image: "/projects/shopsphere.png",
    techStack: ["TypeScript", "Node.js", "MongoDB"],
    features: [
      "Role-based authentication (Admin/Seller/Buyer)",
      "Payment integration (Stripe/PayPal)",
      "Product search, cart, wishlist",
      "Revenue analytics dashboard",
    ],
    github: {
      frontend: "https://github.com/rifah07/shopsphere-frontend",
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
    featured: true,
  },
  {
    id: "hallmate",
    title: "Hallmate — Campus Companion",
    description:
      "A production-grade, domain-driven hall management system for university residential halls — covering seat allocation, payments, complaints, visitor management, and role-based dashboards for students, admins, and parents.",
    image: "/projects/hall.png",
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Zod",
    ],
    features: [
      "Role-based access for Students, House Tutors, Provost, Staff, and Parents",
      "Digital hall ID card with QR code, seat application, leave and gate pass management",
      "Payment integration (bKash, Nagad, Cards) with automated billing & tracking",
      "Priority-based complaint system (P0 to P3 SLA), visitor approval, and study room booking",
    ],
    github: {
      backend: "https://github.com/rifah07/hallmate-backend",
    },
    live: {},
    category: "Backend",
    featured: true,
  },
  {
    id: "telegram-expense-tracker-bot",
    title: "Telegram Expense Tracker Bot",
    description:
      "A full-stack expense tracking system with a Telegram bot interface, JWT-secured REST API, and a React dashboard — featuring AI-powered natural language expense parsing via Gemini.",
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
      "AI parsing via Gemini — type '500 uber ride yesterday' and it extracts amount, category, and date",
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
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
