"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const host = (url?: string) => (url ? new URL(url).host : "");

// A soft light that follows the pointer across the card (CSS reads --mx/--my)
function followPointer(e: React.PointerEvent<HTMLElement>) {
  const box = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
}

// The project's screenshot inside a tiny browser window, showing its real address
export function BrowserFrame({
  project,
  className,
  sizes,
}: {
  project: Project;
  className?: string;
  sizes: string;
}) {
  const [imgErr, setImgErr] = useState(false);
  const live = project.live.frontend ?? project.live.backend;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[hsl(0_70%_65%)]" />
        <span className="h-2 w-2 rounded-full bg-[hsl(40_85%_60%)]" />
        <span className="h-2 w-2 rounded-full bg-[hsl(130_45%_55%)]" />
        <span className="ml-2 truncate rounded-md bg-[hsl(var(--muted))] px-2 py-0.5 font-mono text-[10px] text-[hsl(var(--muted-foreground))]">
          {host(live) || "localhost"}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        {!imgErr ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="grid h-full place-items-center font-mono text-xs text-[hsl(var(--muted-foreground))]">
            {project.category}
          </div>
        )}
      </div>
    </div>
  );
}

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--accent)/0.35)] bg-[hsl(var(--accent)/0.1)] px-2 py-0.5 text-[10px] font-medium text-[hsl(var(--accent))]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent))] opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
      </span>
      Live
    </span>
  );
}

// Code and live links, as one row of quiet buttons
export function ProjectLinks({ project }: { project: Project }) {
  const code = [
    ["Frontend", project.github.frontend],
    ["Backend", project.github.backend],
  ].filter(([, url]) => url) as [string, string][];
  const live = project.live.frontend ?? project.live.backend;
  const linkClass =
    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors";
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            linkClass,
            "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90",
          )}
        >
          Live demo <ArrowUpRight size={13} />
        </a>
      )}
      {code.map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} ${label.toLowerCase()} code on GitHub`}
          className={cn(
            linkClass,
            "border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]",
          )}
        >
          <Github size={12} /> {code.length > 1 ? label : "Code"}
        </a>
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 3) * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      onPointerMove={followPointer}
      className="spotlight group flex flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 transition-colors duration-300 hover:border-[hsl(var(--primary)/0.4)]"
    >
      <BrowserFrame
        project={project}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
            {project.category}
          </span>
          {project.live.frontend && <LiveBadge />}
        </div>
        <h3 className="mb-1.5 text-base font-bold leading-snug text-[hsl(var(--foreground))]">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          {project.description}
        </p>

        <ul className="mb-4 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-[hsl(var(--muted-foreground))]"
            >
              <CheckCircle2
                size={12}
                className="mt-0.5 shrink-0 text-[hsl(var(--accent))]"
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[hsl(var(--border)/0.6)] bg-[hsl(var(--muted))] px-2 py-0.5 font-mono text-[10px] text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-[hsl(var(--border)/0.6)] pt-3">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}
