"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const THEMES = [
  {
    id: "dark",
    label: "Midnight",
    hint: "Calm and dark",
    swatch: "linear-gradient(135deg, #12151c 55%, #5b8def 55%)",
  },
  {
    id: "light",
    label: "Daylight",
    hint: "Warm paper white",
    swatch: "linear-gradient(135deg, #f8f6f2 55%, #2f6fdb 55%)",
  },
  {
    id: "meadow",
    label: "Meadow",
    hint: "Hills, trees, a pond and a river",
    swatch:
      "linear-gradient(180deg, #dbeaf0 0 45%, #b8d4a8 45% 75%, #7fa774 75%)",
  },
  {
    id: "moonlit",
    label: "Moonlit",
    hint: "Stars, a moon and the sea at night",
    swatch:
      "radial-gradient(circle at 70% 30%, #f6e7b0 0 14%, transparent 15%), linear-gradient(180deg, #0b1430 60%, #1d3b6b 60%)",
  },
];

const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

export function ThemeMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // Close on a click outside; focus the chosen theme when opening
  useEffect(() => {
    if (!open) return;
    const menu = root.current;
    (
      menu?.querySelector<HTMLElement>('[aria-checked="true"]') ??
      menu?.querySelector<HTMLElement>('[role="menuitemradio"]')
    )?.focus();
    const onPointer = (e: PointerEvent) => {
      if (!menu?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  function choose(id: string, e: React.MouseEvent) {
    const html = document.documentElement;
    const box = root.current!.getBoundingClientRect();
    // Keyboard "clicks" have no position: spread from the menu button instead
    const x = e.clientX || box.x + box.width / 2;
    const y = e.clientY || box.y + box.height / 2;
    html.style.setProperty("--reveal-x", `${x}px`);
    html.style.setProperty("--reveal-y", `${y}px`);

    // The transition needs the new class synchronously; next-themes then saves it
    const apply = () => {
      html.classList.remove(...THEMES.map((t) => t.id));
      html.classList.add(id);
      html.style.setProperty(
        "color-scheme",
        id === "light" || id === "meadow" ? "light" : "dark",
      );
    };
    if (
      document.startViewTransition &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.startViewTransition(apply);
    } else apply();
    setTheme(id);
    setOpen(false);
  }

  function onMenuKey(e: React.KeyboardEvent<HTMLDivElement>) {
    const items = [
      ...e.currentTarget.querySelectorAll<HTMLElement>(
        '[role="menuitemradio"]',
      ),
    ];
    const at = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "Escape") {
      setOpen(false);
      root.current?.querySelector<HTMLElement>("button")?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      items[(at + step + items.length) % items.length]?.focus();
    }
  }

  const current = THEMES.find((t) => t.id === resolvedTheme);
  return (
    <div className="relative" ref={root}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={mounted && current ? `Theme: ${current.label}` : "Theme"}
        className={cn(
          "tip grid place-items-center w-9 h-9 rounded-full border border-transparent hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors",
          open && "tip-off",
        )}
      >
        <span
          className="block w-5 h-5 rounded-full ring-1 ring-[hsl(var(--foreground)/0.25)]"
          style={{ background: mounted ? current?.swatch : undefined }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Choose a theme"
            onKeyDown={onMenuKey}
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.16 }}
            className="glass absolute right-0 top-[calc(100%+10px)] z-50 w-68 origin-top-right rounded-2xl p-1.5 shadow-2xl"
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="menuitemradio"
                aria-checked={t.id === resolvedTheme}
                onClick={(e) => choose(t.id, e)}
                className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left outline-none hover:bg-[hsl(var(--foreground)/0.07)] focus-visible:bg-[hsl(var(--foreground)/0.07)]"
              >
                <span
                  className={cn(
                    "w-9 h-9 shrink-0 rounded-[10px] ring-1 ring-[hsl(var(--foreground)/0.2)]",
                    t.id === resolvedTheme &&
                      "ring-2 ring-[hsl(var(--primary))] ring-offset-2 ring-offset-[hsl(var(--card))]",
                  )}
                  style={{ background: t.swatch }}
                />
                <span>
                  <span className="block text-sm font-semibold text-[hsl(var(--foreground))]">
                    {t.label}
                  </span>
                  <span className="block text-xs text-[hsl(var(--muted-foreground))]">
                    {t.hint}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
