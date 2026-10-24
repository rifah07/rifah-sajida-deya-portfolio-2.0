"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.07 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("section-fade py-20 md:py-28", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-14 max-w-2xl", className)}>
      {eyebrow && (
        <p className="font-mono text-xs text-[hsl(var(--accent))] tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
