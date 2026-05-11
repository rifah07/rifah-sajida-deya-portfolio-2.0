import { projects } from "@/data/projects";
import Projects from "@/components/sections/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Rifah Sajida Deya",
  description:
    "Complete project portfolio - backend systems, full-stack apps, and APIs I've built, with code samples and design insights.",
};

export default function ProjectsPage() {
  return (
    <div className="gradient-mesh min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-[hsl(var(--accent))] tracking-widest uppercase mb-3">
            — Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-4">
            All Projects
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-xl mx-auto">
            A complete collection of systems, APIs, and applications I&apos;ve
            built.
          </p>
        </div>
        <Projects projects={projects} showAll={true} />
      </div>
    </div>
  );
}
