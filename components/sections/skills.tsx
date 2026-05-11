"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const groups = [
  {
    cat: "Languages",
    color: "primary",
    skills: [
      { n: "TypeScript", v: 90 },
      { n: "JavaScript", v: 88 },
      { n: "Ruby", v: 80 },
      { n: "C++", v: 75 },
      { n: "Python", v: 70 },
    ],
  },
  {
    cat: "Backend",
    color: "accent",
    skills: [
      { n: "Node.js", v: 90 },
      { n: "NestJS", v: 85 },
      { n: "Express.js", v: 88 },
    ],
  },
  {
    cat: "Database",
    color: "primary",
    skills: [
      { n: "PostgreSQL", v: 82 },
      { n: "MySQL", v: 80 },
      { n: "MongoDB", v: 85 },
      { n: "Prisma/TypeORM", v: 82 },
    ],
  },
  {
    cat: "Frontend",
    color: "accent",
    skills: [
      { n: "React", v: 75 },
      { n: "Next.js", v: 72 },
      { n: "Tailwind CSS", v: 80 },
    ],
  },
  {
    cat: "Auth & Security",
    color: "primary",
    skills: [
      { n: "JWT ", v: 85 },
      { n: "HTTP-only Cookies", v: 82 },
      { n: "RBAC", v: 80 },
    ],
  },
  {
    cat: "Tools & DevOps",
    color: "accent",
    skills: [
      { n: "Git / GitHub", v: 88 },
      { n: "Vercel", v: 80 },
      { n: "Render", v: 80 },
      { n: "REST Design", v: 90 },
    ],
  },
];

const bar: Record<string, string> = {
  primary: "bg-[hsl(var(--primary))]",
  accent: "bg-[hsl(var(--accent))]",
};
const dot: Record<string, string> = {
  primary: "bg-[hsl(var(--primary))]",
  accent: "bg-[hsl(var(--accent))]",
};
const label: Record<string, string> = {
  primary: "text-[hsl(var(--primary))]",
  accent: "text-[hsl(var(--accent))]",
};

export default function Skills() {
  return (
    <Section
      id="skills"
      className="bg-[hsl(var(--muted)/0.3)] border-y border-[hsl(var(--border)/0.5)]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Technologies"
          description="The tools I use to build, ship, and maintain production systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.cat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${dot[g.color]}`} />
                <span
                  className={`font-mono text-[10px] font-medium uppercase tracking-widest ${label[g.color]}`}
                >
                  {g.cat}
                </span>
              </div>
              <div className="space-y-3">
                {g.skills.map((s, si) => (
                  <div key={s.n}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[hsl(var(--foreground))] font-medium">
                        {s.n}
                      </span>
                      <span className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">
                        {s.v}%
                      </span>
                    </div>
                    <div className="h-1 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${bar[g.color]} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.v}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: gi * 0.08 + si * 0.05 + 0.3,
                          duration: 0.7,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "REST API",
            "TypeORM",
            "Prisma",
            "JWT",
            "SOLID",
            "DDD",
            "MVC",
            "Modular Architecture",
            "Idempotency",
            "RBAC",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)] text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
