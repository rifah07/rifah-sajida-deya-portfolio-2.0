"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/ui/project-card";
import { Section, SectionHeader } from "@/components/ui/section";

interface ProjectsProps {
  projects: Project[];
  showAll?: boolean;
}

export default function Projects({ projects, showAll = false }: ProjectsProps) {
  return (
    <Section id="projects" className={showAll ? "pt-0" : undefined}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {!showAll && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <SectionHeader
              eyebrow="Work"
              title="Selected Projects"
              description="Systems I've architected and shipped — backend-first, production-focused."
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
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
