"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Server, GitBranch, Layers, Zap } from "lucide-react";

const cards = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Modular, maintainable systems from monoliths to microservices.",
  },
  {
    icon: Layers,
    title: "Database Design",
    desc: "ACID schemas, indexing strategies, and ORM-level transactions.",
  },
  {
    icon: GitBranch,
    title: "API Development",
    desc: "Clean REST APIs with auth flows, rate limiting, and error conventions.",
  },
  {
    icon: Zap,
    title: "Production Mindset",
    desc: "Security-first: idempotent ops, fraud prevention, edge case handling.",
  },
];

export default function About() {
  return (
    <Section id="about" className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <SectionHeader
            eyebrow="About Me"
            title="Building things that run in production."
          />
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
            <p>
              My work centers on building{" "}
              <span className="text-[hsl(var(--foreground))] font-semibold">
                reliable, well-structured APIs
              </span>{" "}
              and backend systems that handle real-world edge cases: concurrent
              requests, transactional consistency, auth vulnerabilities, and
              graceful failures.
            </p>
            <p>
              I care about code that&apos;s easy to reason about — clean
              separation of concerns, explicit over implicit, and systems a
              future engineer can maintain without archaeology.
            </p>
            <p>
              Currently deepening expertise in{" "}
              <span className="text-[hsl(var(--foreground))] font-semibold">
                distributed systems
              </span>
              , system design patterns, and cloud-native deployment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300 glow-hover"
            >
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mb-3">
                <c.icon size={17} className="text-[hsl(var(--primary))]" />
              </div>
              <h3 className="font-semibold text-[hsl(var(--foreground))] text-sm mb-1.5">
                {c.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
