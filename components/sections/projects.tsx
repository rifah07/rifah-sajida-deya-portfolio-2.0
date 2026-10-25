"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/project";
import {
  BrowserFrame,
  LiveBadge,
  ProjectCard,
  ProjectLinks,
} from "@/components/ui/project-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  projects: Project[];
  showAll?: boolean;
}

export default function Projects({ projects, showAll = false }: ProjectsProps) {
  const [filter, setFilter] = useState("All");
  // On the home page the first project gets the spotlight; the rest fill the grid
  const featured = showAll ? undefined : projects[0];
  const rest = showAll ? projects : projects.slice(1);
  const categories = ["All", ...new Set(rest.map((p) => p.category))];
  const shown = rest.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" className={showAll ? "pt-0" : undefined}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {!showAll && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Work"
              title="Selected Projects"
              description="Systems I've architected and shipped: backend-first, production-focused."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] border border-[hsl(var(--border))] px-4 py-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-all shrink-0 group"
            >
              See all{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        )}

        {featured && <FeaturedProject project={featured} />}

        <div
          role="group"
          aria-label="Filter projects"
          className="mb-6 flex flex-wrap gap-1.5"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                filter === c
                  ? "text-[hsl(var(--primary-foreground))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]",
              )}
            >
              {filter === c && (
                <motion.span
                  layoutId={`filter-pill-${showAll}`}
                  className="absolute inset-0 rounded-full bg-[hsl(var(--primary))]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
              <span className="relative">
                {c}{" "}
                <span className="opacity-60">
                  {rest.filter((p) => c === "All" || p.category === c).length}
                </span>
              </span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-medium hover:bg-[hsl(var(--muted))] transition-colors group"
            >
              View all projects{" "}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative mb-14 grid items-center gap-8 overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 sm:p-6 lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:p-8"
    >
      {/* a wash of the theme's colours behind the window */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-[hsl(var(--primary)/0.12)] blur-3xl"
      />
      <BrowserFrame
        project={project}
        sizes="(max-width: 1024px) 100vw, 640px"
        className="relative shadow-2xl shadow-[hsl(var(--foreground)/0.08)] transition-transform duration-500 group-hover:-rotate-[0.6deg]"
      />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[hsl(var(--accent))]">
            Featured · {project.category}
          </span>
          {project.live.frontend && <LiveBadge />}
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-tight text-[hsl(var(--foreground))] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-base">
          {project.description}
        </p>
        <ul className="mb-5 space-y-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
            >
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-[hsl(var(--accent))]"
              />
              {f}
            </li>
          ))}
        </ul>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[hsl(var(--border)/0.6)] bg-[hsl(var(--muted))] px-2 py-0.5 font-mono text-[11px] text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}
