"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const catColor: Record<string, string> = {
  "Full Stack": "bg-[hsl(220_70%_50%)] text-white border-transparent",
  Backend: "bg-[hsl(168_60%_38%)] text-white border-transparent",
  //IoT: "bg-[hsl(220_10%_30%)] text-white border-transparent",
};
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 3) * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden hover:border-[hsl(var(--primary)/0.35)] hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.06)] transition-all duration-300 glow-hover"
    >
      {/* Image */}
      <div className="relative h-44 bg-[hsl(var(--muted))] overflow-hidden">
        {!imgErr ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgErr(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mx-auto mb-2">
                <span className="text-[hsl(var(--primary))] text-xl font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="text-[hsl(var(--muted-foreground))] text-xs font-mono">
                {project.category}
              </span>
            </div>
          </div>
        )}
        <span
          className={cn(
            "absolute top-3 left-3 text-[10px] font-medium px-2 py-0.5 rounded-full border",
            catColor[project.category],
          )}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-[hsl(var(--foreground))] text-base mb-1.5 leading-snug group-hover:text-[hsl(var(--primary))] transition-colors">
          {project.title}
        </h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border)/0.5)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-[hsl(var(--muted-foreground))]"
            >
              <CheckCircle2
                size={11}
                className="text-[hsl(var(--accent))] mt-0.5 shrink-0"
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Links */}
        <div className="flex flex-wrap gap-1 pt-3 border-t border-[hsl(var(--border)/0.5)]">
          {/* GitHub links */}
          {project.github.frontend && (
            <a
              href={project.github.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] px-2.5 py-1.5 rounded-md hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Github size={12} /> Frontend
            </a>
          )}
          {project.github.backend && (
            <a
              href={project.github.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] px-2.5 py-1.5 rounded-md hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Github size={12} /> Backend
            </a>
          )}

          {/* Live links */}
          <div className="flex gap-1 ml-auto">
            {project.live.frontend && (
              <a
                href={project.live.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] px-2.5 py-1.5 rounded-md hover:bg-[hsl(var(--accent)/0.1)] transition-colors"
              >
                <ExternalLink size={11} /> Frontend
              </a>
            )}
            {project.live.backend && (
              <a
                href={project.live.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] px-2.5 py-1.5 rounded-md hover:bg-[hsl(var(--accent)/0.1)] transition-colors"
              >
                <ExternalLink size={11} /> Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
