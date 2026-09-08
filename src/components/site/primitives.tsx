import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import type { LucideIcon } from "lucide-react";

export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-border/60 py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        {eyebrow ? (
          <Reveal>
            <p className="eyebrow mb-4">{eyebrow}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

/**
 * Fully visible by default (SSR/no-JS safe). Once mounted client-side, the
 * root layout adds `reveal-ready` to <main>, which is what actually gates
 * the hidden starting state in CSS — so this never depends on JS to be seen.
 */
export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    // Safety net: never let content stay stuck invisible, no matter what.
    const fallback = setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </As>
  );
}

/**
 * Animates the first number found in `value` from 0 up to its target once
 * the element scrolls into view, preserving any surrounding text/prefix/
 * suffix (e.g. "A$286K", "1,284", "91%"). Falls back to the static value
 * immediately if the string has no plain number to animate.
 */
export function Counter({ value, duration = 1100 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const match = value.match(/[\d,]+\.?\d*/);

  useEffect(() => {
    setDisplay(value);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || typeof IntersectionObserver === "undefined") return;

    const raw = match[0];
    const target = Number.parseFloat(raw.replace(/,/g, ""));
    if (Number.isNaN(target)) return;
    const useCommas = raw.includes(",");
    const decimalPart = raw.split(".")[1];
    const decimals = decimalPart ? decimalPart.length : 0;

    let frame: number;
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - progress) ** 3;
        const current = target * eased;
        const formatted = useCommas
          ? Math.round(current).toLocaleString("en-US")
          : current.toFixed(decimals);
        setDisplay(value.replace(raw, formatted));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>{display}</span>;
}

export function Cta({
  children,
  variant = "primary",
  href,
  className = "",
  icon: Icon,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "invert";
  href: string;
  className?: string;
  icon?: LucideIcon;
}) {
  const base =
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:px-6 sm:py-3";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 glow-ring"
      : variant === "invert"
        ? "bg-white text-[#0b1b3a] hover:brightness-95 active:brightness-90 shadow-[0_16px_40px_-20px_rgb(255_255_255/0.5)]"
        : "border border-border bg-surface-2/60 text-foreground hover:border-primary/40 hover:bg-surface-2";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {Icon ? <Icon className="size-4 shrink-0" strokeWidth={2.25} /> : null}
    </a>
  );
}

export function Pill({ children, icon: Icon }: { children: ReactNode; icon?: LucideIcon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/14">
      {Icon ? <Icon className="size-3.5 shrink-0" strokeWidth={2.25} /> : null}
      {children}
    </span>
  );
}

export function Stat({
  value,
  label,
  icon: Icon,
  animate = true,
}: {
  value: string;
  label: string;
  icon?: LucideIcon;
  animate?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-surface-2/50 p-2.5 sm:p-5">
      {Icon ? <Icon className="mb-2 size-4.5 text-primary/70 sm:size-5" strokeWidth={2} /> : null}
      <p className="truncate font-display text-base leading-tight font-semibold text-foreground sm:text-2xl md:text-3xl">
        {animate ? <Counter value={value} /> : value}
      </p>
      <p className="mt-1.5 text-[10px] leading-snug uppercase tracking-wider text-muted-foreground sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export function BigLine({ children }: { children: ReactNode }) {
  return (
    <Reveal
      as="p"
      className="mx-auto max-w-4xl text-center font-display text-2xl leading-snug text-foreground md:text-4xl"
    >
      {children}
    </Reveal>
  );
}

export function Dot({ tone }: { tone: "alert" | "warn" | "caution" | "success" }) {
  const color =
    tone === "alert"
      ? "bg-alert"
      : tone === "warn"
        ? "bg-warn"
        : tone === "success"
          ? "bg-success"
          : "bg-caution";
  return <span className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${color}`} />;
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-0.5 shrink-0 text-success">✓</span>
      <span>{children}</span>
    </li>
  );
}

/** Tiny inline trend chart — no charting library needed for a single line. */
export function Sparkline({
  points,
  tone = "primary",
  width = 96,
  height = 32,
}: {
  points: number[];
  tone?: "primary" | "success" | "warn" | "alert";
  width?: number;
  height?: number;
}) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / range) * (height - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const colorClass =
    tone === "success"
      ? "text-success"
      : tone === "warn"
        ? "text-warn"
        : tone === "alert"
          ? "text-alert"
          : "text-primary";
  const last = coords[coords.length - 1]?.split(",");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={`overflow-visible ${colorClass}`}
      aria-hidden="true"
    >
      <polyline
        points={coords.join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {last ? <circle cx={last[0]} cy={last[1]} r={2.5} fill="currentColor" /> : null}
    </svg>
  );
}

export function IconTile({
  icon: Icon,
  tone = "primary",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "primary" | "accent" | "success" | "warn" | "alert";
  size?: "sm" | "md" | "lg";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-accent/12 text-accent"
      : tone === "success"
        ? "bg-success/12 text-success"
        : tone === "warn"
          ? "bg-warn/12 text-warn"
          : tone === "alert"
            ? "bg-alert/12 text-alert"
            : "bg-primary/12 text-primary";
  const sizeClass =
    size === "lg"
      ? "size-12 rounded-2xl"
      : size === "sm"
        ? "size-8 rounded-lg"
        : "size-10 rounded-xl";
  const iconSize = size === "lg" ? "size-6" : size === "sm" ? "size-4" : "size-5";
  return (
    <span className={`grid shrink-0 place-items-center ${sizeClass} ${toneClass}`}>
      <Icon className={iconSize} strokeWidth={2} />
    </span>
  );
}
