import type { ReactNode } from "react";

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
    <section id={id} className={`border-t border-border/60 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5">
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Cta({
  children,
  variant = "primary",
  href = "#demo",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:brightness-110 glow-ring"
      : "border border-border bg-surface-2/60 text-foreground hover:bg-surface-2";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/50 p-4">
      <p className="font-display text-2xl font-semibold text-foreground md:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

export function BigLine({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto max-w-4xl text-center font-display text-2xl leading-snug text-foreground md:text-4xl">
      {children}
    </p>
  );
}

export function Dot({ tone }: { tone: "alert" | "warn" | "caution" }) {
  const color =
    tone === "alert" ? "bg-alert" : tone === "warn" ? "bg-warn" : "bg-caution";
  return <span className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${color}`} />;
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-0.5 text-primary">✓</span>
      <span>{children}</span>
    </li>
  );
}
