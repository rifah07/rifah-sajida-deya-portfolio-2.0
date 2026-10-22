"use client";

import { motion } from "framer-motion";
import {
  Download,
  Eye,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const timeline = [
  {
    icon: Briefcase,
    type: "work",
    title: "Junior Full-Stack Engineer",
    org: "Periscale AI",
    period: "June 2026 - Present",
    detail:
      "Periscale is an all-in-one commerce platform: orders, CRM, inventory, couriers, accounting, a social inbox, website builder, marketplace sales and AI employees that chat with customers. Joined as an intern in June 2026, promoted to Junior Full-Stack Engineer in October 2026. I build full-stack and AI features across the whole product: the Django backend, the React/TypeScript dashboard and the FastAPI + LangGraph agent service, plus a Hono/TypeScript backend for a field-service product.",
    highlights: [
      "Improved the AI sales agent that talks to customers on Messenger, Instagram, WhatsApp and the website in English, Bangla and Banglish. It now takes orders in chat, understands product photos and voice notes, and remembers returning customers",
      "Built the human handoff flow, so the agent brings in a team member when it should and the answer still reaches the customer, even after they leave the chat",
      "Made replies faster and more dependable with smarter caching, timeouts and retries, so messages are no longer dropped or stuck",
      "Integrated the Carrybee, Pathao and Steadfast couriers and redesigned order management into separate call-center, processing and shipment boards",
      "Shipped commerce features from database to UI: discounts, delivery zones, service packages, automated follow-ups and inbox analytics",
    ],
  },
  {
    icon: BookOpen,
    type: "research",
    title:
      "Identifying Influential Biomarkers of Colorectal Cancer Using Bioinformatics and Machine Learning Approaches with Explainable AI",
    org: "IET Systems Biology · Wiley",
    period: "Accepted Oct 2026",
    detail:
      "Co-first author. My B.Sc. thesis research, combining bioinformatics analysis, machine learning and explainable AI to find the biomarkers that matter most in colorectal cancer. Open access, currently in production. DOI: 10.1049/syb2.70092",
    highlights: [
      "Journal indexed in SCIE, Scopus and Web of Science · Q2 · Impact Factor 1.9",
    ],
  },
  {
    icon: GraduationCap,
    type: "edu",
    title: "B.Sc. Computer Science & Engineering",
    org: "Jagannath University, Dhaka",
    period: "2019 - 2025",
    detail:
      "CGPA 3.53. Algorithms, data structures, distributed systems and software engineering, with a thesis in machine learning for cancer biomarker discovery.",
  },
  {
    icon: Briefcase,
    type: "work",
    title: "Backend Developer (Projects)",
    org: "Independent",
    period: "2022 - Present",
    detail:
      "Built production-grade backends: e-commerce platforms, multi-tenant APIs and financial trackers.",
  },
];

export default function Resume() {
  return (
    <Section
      id="resume"
      className="bg-[hsl(var(--muted)/0.3)] border-y border-[hsl(var(--border)/0.5)]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Resume"
              title="Experience, Research & Education"
              description="A snapshot of my journey. Full details are in the CV."
            />
            <div className="flex flex-wrap gap-3">
              <a
                href="/Rifah_Sajida_Deya_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-medium hover:bg-[hsl(var(--primary)/0.9)] transition-colors"
              >
                <Eye size={15} /> View CV
              </a>
              <a
                href="/Rifah_Sajida_Deya_cv.pdf"
                download
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-medium hover:bg-[hsl(var(--muted))] transition-colors"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
            <p className="mt-5 text-xs text-[hsl(var(--muted-foreground))] font-mono">
              PDF · Updated October 2026
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[hsl(var(--border))]" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-11"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center">
                    <t.icon
                      size={14}
                      className={
                        t.type === "work"
                          ? "text-[hsl(var(--accent))]"
                          : "text-[hsl(var(--primary))]"
                      }
                    />
                  </div>
                  <div className="bg-[hsl(var(--card))] rounded-xl border border-[hsl(var(--border))] p-4 hover:border-[hsl(var(--primary)/0.2)] transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-[hsl(var(--foreground))] text-sm leading-snug">
                        {t.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[hsl(var(--muted-foreground))] whitespace-nowrap shrink-0">
                        {t.period}
                      </span>
                    </div>
                    <p className="text-xs text-[hsl(var(--accent))] font-medium mb-2">
                      {t.org}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {t.detail}
                    </p>
                    {t.highlights && (
                      <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {t.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
