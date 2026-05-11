"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const groups = [
  {
    cat: "Languages",
    color: "primary",
    skills: ["TypeScript", "JavaScript", "Ruby", "C++", "Python"],
  },
  {
    cat: "Backend",
    color: "accent",
    skills: ["Node.js", "NestJS", "Express.js"],
  },
  {
    cat: "Database",
    color: "primary",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma / TypeORM"],
  },
  {
    cat: "Frontend",
    color: "accent",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    cat: "Auth & Security",
    color: "primary",
    skills: ["JWT", "HTTP-only Cookies", "RBAC"],
  },
  {
    cat: "Tools & DevOps",
    color: "accent",
    skills: ["Git / GitHub", "Vercel", "Render", "REST Design"],
  },
];

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
              <div className="flex flex-wrap gap-2">
                {g.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border border-[hsl(var(--border)/0.5)] font-medium"
                  >
                    {skill}
                  </span>
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
