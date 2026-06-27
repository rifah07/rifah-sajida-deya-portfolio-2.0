"use client";

import { motion } from "framer-motion";
import { Download, Eye, GraduationCap, Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const timeline = [
  {
    icon: Briefcase, type: "work",
    title: "Full-Stack Engineer Intern",
    org: "Periscale AI",
    period: "June 2026 – Present",
    detail: "Working across the Django backend and React/TypeScript frontend of a SaaS platform — contributing to feature development, bug fixes, and integration work.",
  },
  {
    icon: GraduationCap,
    type: "edu",
    title: "B.Sc. Computer Science & Engineering",
    org: "Jagannath University, Dhaka",
    period: "2019 – 2025",
    detail:
      "Algorithms, data structures, distributed systems, and software engineering fundamentals.",
  },
  {
    icon: Briefcase,
    type: "work",
    title: "Backend Developer (Projects)",
    org: "Independent",
    period: "2022 – Present",
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
              title="Experience & Education"
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
              PDF · Updated June 2026
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
