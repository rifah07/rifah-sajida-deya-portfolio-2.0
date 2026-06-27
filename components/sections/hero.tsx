"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[hsl(var(--primary)/0.05)] blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[450px] h-[450px] rounded-full bg-[hsl(var(--accent)/0.05)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--foreground)) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-7">
            <span className="font-mono text-xs text-[hsl(var(--accent))] tracking-widest uppercase">
              Available for work
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent))] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--accent))]" />
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[hsl(var(--foreground))] leading-none mb-5 tracking-tight"
          >
            Rifah
            <br />
            <span className="text-[hsl(var(--primary))]">Sajida</span>{" "}
            <span className="text-[hsl(var(--muted-foreground)/0.5)] font-light italic">
              Deya
            </span>
          </motion.h1>

          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[hsl(var(--accent))]" />
            <p className="font-mono text-sm text-[hsl(var(--muted-foreground))] tracking-wide">
              Backend Developer · CSE Graduate
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xl mb-10"
          >
            I build{" "}
            <span className="text-[hsl(var(--foreground))] font-semibold">
              scalable backend systems
            </span>
            , RESTful APIs, and production-ready web applications — with a focus
            on reliability and clean architecture.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-medium hover:bg-[hsl(var(--primary)/0.9)] transition-colors shadow-sm"
            >
              <FolderOpen size={15} /> View Projects
            </button>
            <a
              href="/Rifah_Sajida_Deya_cv.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))] text-sm font-medium hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Download size={15} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap gap-10">
            {[
              ["6+", "Projects Shipped"],
              ["4+", "Tech Stacks"],
              ["3", "Databases"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                  {v}
                </p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono mt-0.5">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))]"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
