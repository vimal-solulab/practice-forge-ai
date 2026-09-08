import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Users,
  Landmark,
  Calculator,
  FolderOpen,
  Wallet,
  Workflow,
  FileText,
  FileCheck2,
  Receipt,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Bot,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Send,
  MessageSquare,
  Search,
  ClipboardList,
  Clock,
  LayoutDashboard,
  Paperclip,
  UserPlus,
  FolderInput,
  Eye,
  Repeat,
  Menu,
  X,
  Mail,
  ScrollText,
  UsersRound,
  CalendarClock,
  Columns3,
  BarChart3,
  ScanLine,
  CircleUserRound,
  type LucideIcon,
} from "lucide-react";
import {
  BigLine,
  Check,
  Counter,
  Cta,
  Dot,
  IconTile,
  Pill,
  Reveal,
  Section,
  Sparkline,
  Stat,
} from "@/components/site/primitives";

const DEMO_EMAIL = "sales@solulab.com"; // TODO: replace with the real demo-request inbox
const DEMO_SUBJECT = "Demo Request — PracticeOS AI";
const DEMO_BODY = `Hi PracticeOS AI team,

I'd like to request a demo of PracticeOS AI for our firm.

Firm name:
Number of clients managed:
Preferred date/time for a demo:

Thanks,`;
const DEMO_LINK = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(DEMO_BODY)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PracticeOS AI — AI Operating System for Accounting Firms" },
      {
        name: "description",
        content:
          "PracticeOS AI runs the whole firm: CRM, jobs, documents, workpapers, tax, BAS, billing and advisory, with AI working across every client workflow.",
      },
      {
        property: "og:title",
        content: "PracticeOS AI — AI Operating System for Accounting Firms",
      },
      {
        property: "og:description",
        content:
          "One practice operating system with AI working across every client workflow — from onboarding to advisory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#ai-agents", label: "AI Agents" },
  { href: "#advisory", label: "Advisory" },
  { href: "#command", label: "Command Centre" },
];

const lifecycle: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Onboard",
    desc: "Entities, contacts, engagements, authorities",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Collect",
    desc: "Documents, source data, client requests",
    icon: FolderInput,
  },
  {
    step: "03",
    title: "Prepare",
    desc: "Bookkeeping, reconciliations, workpapers",
    icon: Calculator,
  },
  { step: "04", title: "Review", desc: "Exceptions, tax positions, manager review", icon: Eye },
  { step: "05", title: "Lodge", desc: "BAS, returns, compliance workflows", icon: Send },
  { step: "06", title: "Bill", desc: "WIP, invoices, payments", icon: Receipt },
  {
    step: "07",
    title: "Advise",
    desc: "Forecasting, tax planning, business insights",
    icon: TrendingUp,
  },
  {
    step: "08",
    title: "Retain",
    desc: "Ongoing tasks, client communication, next-best action",
    icon: Repeat,
  },
];

const products: {
  title: string;
  verb: string;
  icon: LucideIcon;
  items: string[];
  note?: string;
  preview: ReactNode;
}[] = [
  {
    title: "Client 360",
    verb: "Manage",
    icon: Users,
    preview: (
      <div className="flex items-center gap-2.5">
        <div className="flex -space-x-2">
          {["JD", "AS", "MK"].map((initials) => (
            <span
              key={initials}
              className="grid size-7 place-items-center rounded-full border-2 border-background bg-primary/15 text-[10px] font-semibold text-primary"
            >
              {initials}
            </span>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">+1,281 more clients</span>
      </div>
    ),
    items: [
      "Individuals",
      "Companies",
      "Trusts",
      "Partnerships",
      "SMSFs",
      "Directors",
      "Related entities",
      "Contacts",
      "Engagement history",
    ],
    note: "See the full client relationship instantly.",
  },
  {
    title: "Job & Workflow Management",
    verb: "Manage",
    icon: Workflow,
    preview: (
      <div className="flex gap-2">
        {[
          ["To do", "12"],
          ["In progress", "8"],
          ["Review", "4"],
        ].map(([label, n]) => (
          <div
            key={label}
            className="flex-1 rounded-lg border border-border bg-surface/60 p-2 text-center"
          >
            <p className="font-display text-sm font-semibold text-foreground">{n}</p>
            <p className="text-[9px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    ),
    items: [
      "Jobs",
      "Recurring work",
      "Deadlines",
      "Staff allocation",
      "Capacity",
      "Review stages",
      "Dependencies",
      "SLAs",
    ],
    note: "Every job moves through a defined workflow.",
  },
  {
    title: "Documents & Client Portal",
    verb: "Collect and manage",
    icon: FolderOpen,
    preview: (
      <div className="space-y-1.5">
        {["Bank_statement.pdf", "Invoice_0231.pdf"].map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 rounded-md border border-border bg-surface/60 px-2 py-1.5"
          >
            <FileText className="size-3.5 shrink-0 text-primary/70" strokeWidth={2} />
            <span className="min-w-0 flex-1 truncate text-[10px] text-muted-foreground">{f}</span>
            <CheckCircle2 className="size-3.5 shrink-0 text-success" strokeWidth={2} />
          </div>
        ))}
      </div>
    ),
    items: [
      "Bank statements",
      "Invoices",
      "Payroll records",
      "Contracts",
      "Tax documents",
      "Workpapers",
      "Signed forms",
    ],
    note: "Client requests, uploads and approvals in one place.",
  },
  {
    title: "Workpapers & Reconciliation",
    verb: "Support",
    icon: Calculator,
    preview: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 36 36" className="size-11 shrink-0 -rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border)" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="97.4"
            strokeDashoffset={97.4 * (1 - 0.91)}
          />
        </svg>
        <div>
          <p className="font-display text-sm font-semibold text-foreground">91% reconciled</p>
          <p className="text-[10px] text-muted-foreground">XYZ Pty Ltd — FY26</p>
        </div>
      </div>
    ),
    items: [
      "Trial balance",
      "Bank reconciliations",
      "Fixed assets",
      "Loans",
      "Payroll",
      "GST",
      "Adjustments",
      "Supporting evidence",
    ],
  },
  {
    title: "Tax & Compliance Workflows",
    verb: "Manage",
    icon: Landmark,
    preview: (
      <div className="flex flex-wrap gap-1.5">
        {["BAS · 5d", "GST · 12d", "Tax · 21d"].map((d) => (
          <span
            key={d}
            className="inline-flex items-center gap-1 rounded-md border border-warn/30 bg-warn/10 px-2 py-1 text-[10px] font-medium text-warn"
          >
            <CalendarClock className="size-3" strokeWidth={2.25} />
            {d}
          </span>
        ))}
      </div>
    ),
    items: [
      "BAS",
      "GST",
      "Income tax",
      "Company tax",
      "Trusts",
      "Payroll obligations",
      "Lodgement deadlines",
      "Review checklists",
    ],
  },
  {
    title: "WIP, Billing & Practice Performance",
    verb: "Track",
    icon: Wallet,
    preview: (
      <div className="flex h-10 items-end gap-1.5">
        {[40, 65, 50, 80, 60, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    ),
    items: [
      "Time",
      "WIP",
      "Fixed fees",
      "Billing",
      "Write-offs",
      "Recovery",
      "Staff utilisation",
      "Client profitability",
    ],
  },
];

const montage: { name: string; detail: string; icon: LucideIcon }[] = [
  { name: "Practice dashboard", detail: "1,284 clients · 342 jobs live", icon: LayoutDashboard },
  { name: "AI workpaper completion", detail: "91% complete · 6 exceptions", icon: FileCheck2 },
  { name: "Client document chaser", detail: "Auto follow-ups in progress", icon: MessageSquare },
  { name: "Tax review", detail: "38 returns ready for review", icon: Landmark },
  { name: "Advisory opportunities", detail: "26 clients flagged this month", icon: TrendingUp },
  { name: "AI Practice Command Centre", detail: "4 issues need attention", icon: Search },
];

function Index() {
  useEffect(() => {
    document.getElementById("page-root")?.classList.add("reveal-ready");
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="page-root" className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              P
            </span>
            <span className="truncate font-display text-lg font-semibold">PracticeOS AI</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Cta href={DEMO_LINK} variant="primary">
              <span className="hidden sm:inline">Book a Demo</span>
              <span className="sm:hidden">Demo</span>
            </Cta>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      {/* SECTION 1 — HERO */}
      <section id="top" className="navy relative overflow-hidden bg-background py-12 md:py-16">
        {/* Aurora glows */}
        <div className="pointer-events-none absolute -top-[15%] -left-[10%] size-[55%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-[10%] -bottom-[15%] size-[55%] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Content side */}
          <div className="flex flex-col space-y-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium tracking-wide text-primary">
                The AI OS for Accounting, Tax & Advisory Firms
              </span>
            </div>

            <h1 className="text-5xl leading-[1.08] font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Run more clients with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                fewer manual handoffs.
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Clients. Jobs. Workpapers. Documents. BAS. Tax. Advisory. Billing. Deadlines — one
              practice operating system with AI working across every client workflow.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Cta href={DEMO_LINK} variant="invert" icon={ArrowRight}>
                See PracticeOS AI in Action
              </Cta>
              <Cta href={DEMO_LINK} variant="ghost" icon={Mail}>
                Request a Tailored Demo
              </Cta>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border/60 pt-6">
              {[
                "CRM",
                "Workflow",
                "Documents",
                "Workpapers",
                "Tax",
                "BAS",
                "Advisory",
                "Billing",
              ].map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>

          {/* Glass dashboard mockup */}
          <div className="relative">
            <div className="panel flex flex-col overflow-hidden rounded-3xl">
              <div className="flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border px-4">
                <div className="flex shrink-0 gap-1.5">
                  <span className="size-2.5 rounded-full bg-alert/40" />
                  <span className="size-2.5 rounded-full bg-warn/40" />
                  <span className="size-2.5 rounded-full bg-primary/40" />
                </div>
                <span className="truncate font-display text-[10px] tracking-widest text-muted-foreground uppercase">
                  Practice Dashboard · FY26 Live
                </span>
                <span className="hidden w-12 shrink-0 sm:block" />
              </div>
              <div className="flex-1 space-y-5 p-5 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <Stat value="1,284" label="Active Clients" icon={Users} />
                  <Stat value="342" label="Jobs In Progress" icon={Workflow} />
                  <Stat value="87" label="Awaiting Client Info" icon={Clock} />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <Stat value="64" label="BAS Due" icon={Landmark} />
                  <Stat value="38" label="Tax Returns Ready" icon={FileCheck2} />
                  <Stat value="A$286K" label="WIP" icon={Wallet} />
                </div>
                <div className="animate-float-soft rounded-2xl border border-primary/25 bg-surface-2/50 p-5 shadow-[0_20px_45px_-24px_rgb(0_0_0/0.55)]">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 font-display text-xs font-semibold text-foreground sm:text-sm">
                      <Sparkles className="size-4 text-primary" strokeWidth={2.25} />
                      AI Practice Manager
                      <span className="relative ml-0.5 flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                      </span>
                    </span>
                    <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">
                      42 jobs can progress today
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { text: "18 clients are blocking tax work", tone: "warn" as const },
                      { text: "9 returns have unusual transactions", tone: "alert" as const },
                      { text: "27 client follow-ups can be sent now", tone: "success" as const },
                    ].map((s) => (
                      <div
                        key={s.text}
                        className="flex h-9 items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 text-xs text-muted-foreground sm:text-sm"
                      >
                        <Dot tone={s.tone} />
                        {s.text}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="flex-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
                    >
                      Advance Jobs →
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-lg border border-border bg-surface/60 px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-surface-2"
                    >
                      Review Exceptions →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LIFECYCLE */}
      <Section eyebrow="One system from client onboarding to advisory">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Stop running the firm through inboxes, spreadsheets, practice software and endless
            follow-ups.
          </h2>
          <p className="mt-4 text-muted-foreground">
            PracticeOS connects the full client lifecycle.
          </p>
        </Reveal>

        {/* Connected horizontal stepper — one continuous line at lg+, a
            clean numbered grid (no partial/broken line) below that. */}
        <div className="relative mt-10">
          <div className="absolute top-6 right-[6%] left-[6%] hidden h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 lg:block" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-3">
            {lifecycle.map((l, i) => (
              <Reveal
                key={l.step}
                delay={i * 60}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 grid size-12 place-items-center rounded-full border-2 border-primary/30 bg-background text-primary shadow-sm transition-colors group-hover:border-primary">
                  <l.icon className="size-5" strokeWidth={2} />
                </div>
                <p className="mt-3 font-display text-sm font-semibold text-foreground">
                  {l.step} — {l.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{l.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <BigLine>One client. One job history. One financial truth.</BigLine>
        </div>

        <Reveal>
          <div className="panel mt-8 overflow-hidden p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["CLIENT", "DATA", "WORKPAPERS", "TAX", "REVIEW", "LODGE", "ADVISE"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="rounded-xl border border-primary/30 bg-surface-2/70 px-4 py-2 font-display text-xs tracking-widest">
                    {s}
                  </span>
                  {i < 6 && <ArrowRight className="size-4 text-primary" strokeWidth={2.5} />}
                </div>
              ))}
            </div>
            <div className="relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-center text-sm text-foreground">
              <div className="flow-line absolute inset-x-0 bottom-0 h-0.5 opacity-70" />
              <Bot className="size-4 shrink-0 text-primary" strokeWidth={2.25} />
              AI running underneath every stage
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 3 — CORE PLATFORM */}
      <Section id="platform" eyebrow="The core practice operating system">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Everything needed to run the firm.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <article className="panel flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <IconTile icon={p.icon} size="lg" />
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold uppercase tracking-wide">
                      {p.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.verb}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-border bg-surface-2/40 p-3">
                  {p.preview}
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.items.map((i2) => (
                    <li
                      key={i2}
                      className="rounded-lg border border-border bg-surface-2/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {i2}
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-4 text-sm text-foreground/90">{p.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <BigLine>This runs the accounting practice, not just one accounting task.</BigLine>
        </div>
      </Section>

      {/* SECTION 4 — AI WORKPAPER AGENT */}
      <Section id="ai-agents" eyebrow="AI Workpaper Agent">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Turn a folder of client documents into a review-ready file.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto_1.1fr] lg:items-center">
          <Reveal className="panel p-7">
            <p className="eyebrow">Messy client documents</p>
            <div className="mt-4 space-y-2.5">
              {[
                { label: "Bank statements", icon: Wallet },
                { label: "Invoices", icon: Receipt },
                { label: "Payroll reports", icon: ClipboardList },
                { label: "Loan statements", icon: Landmark },
                { label: "Asset documents", icon: FolderOpen },
                { label: "Prior-year workpapers", icon: FileText },
                { label: "Accounting exports", icon: FileCheck2 },
              ].map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-muted-foreground"
                >
                  <d.icon className="size-4 shrink-0 text-primary/70" strokeWidth={2} />
                  {d.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-center justify-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-display text-sm text-primary">
              <ArrowRight className="size-4" strokeWidth={2.5} />
              <span className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                <Bot className="relative size-5" strokeWidth={2.25} />
              </span>
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
              <ScanLine className="size-3.5" strokeWidth={2.25} />
              AI processing…
            </span>
          </Reveal>

          <Reveal delay={200} className="panel p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold">XYZ Pty Ltd — FY26</h3>
              <span className="font-display text-4xl font-bold text-primary">
                <Counter value="91%" />
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Job completion — structured workpaper file
            </p>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[91%] rounded-full bg-primary" />
            </div>
            <ul className="mt-5 space-y-2">
              <Check>Bank accounts reconciled</Check>
              <Check>Payroll matched</Check>
              <Check>Fixed asset schedule prepared</Check>
              <Check>GST reviewed</Check>
              <Check>Loan balances verified</Check>
            </ul>
            <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-foreground">
              <AlertTriangle className="size-4 text-warn" strokeWidth={2.25} />6 items require
              attention
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Dot tone="warn" />
                Director loan variance
              </li>
              <li className="flex gap-2">
                <Dot tone="warn" />
                Missing equipment invoice
              </li>
              <li className="flex gap-2">
                <Dot tone="caution" />
                Travel expense classification
              </li>
              <li className="flex gap-2">
                <Dot tone="caution" />
                Two unmatched payments
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Cta href={DEMO_LINK} variant="primary">
                Review Exceptions
              </Cta>
              <Cta href={DEMO_LINK} variant="ghost">
                Request Client Information
              </Cta>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Identify and classify documents",
            "Extract financial data",
            "Match evidence to accounts",
            "Prepare reconciliations",
            "Draft workpapers",
            "Identify missing information",
            "Flag anomalies",
            "Prepare reviewer notes",
          ].map((s, i) => (
            <Reveal key={s} delay={(i % 4) * 60}>
              <div className="h-full rounded-xl border border-border bg-surface/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <span className="font-display text-xs text-primary">{i + 1}</span>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <BigLine>AI prepares the file. Accountants review judgement-heavy exceptions.</BigLine>
        </div>
      </Section>

      {/* SECTION 5 — AI CLIENT CHASER */}
      <Section eyebrow="AI Client Chaser">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Stop paying accountants to chase documents.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            PracticeOS knows exactly what every job is waiting for.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal className="panel h-full p-6">
            <h3 className="font-display text-lg font-semibold">BAS — ABC Plumbing</h3>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Missing</p>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {["July bank statement", "Fuel invoices", "Payroll report"].map((m) => (
                <li key={m} className="flex gap-2">
                  <Dot tone="alert" />
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              {[
                "Sends the request",
                "Follows up automatically",
                "Answers simple client questions",
                "Receives uploaded files",
                "Classifies the documents",
                "Updates the job",
                "Advances the workflow",
              ].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface-2/50 px-3 py-2 text-sm text-muted-foreground"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/15 font-display text-xs text-primary">
                    {i + 1}
                  </span>
                  {s}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="panel flex h-full flex-col p-6">
            <p className="eyebrow">Example conversation</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-4">
                <p className="mb-1 flex items-center gap-1.5 font-display text-xs text-primary">
                  <Bot className="size-3.5" strokeWidth={2.25} />
                  PracticeOS AI
                </p>
                Hi David, we're preparing your September BAS. We still need the July business bank
                statement and payroll summary.
              </div>
              <div className="ml-auto flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-muted-foreground">
                <Paperclip className="size-4 shrink-0" strokeWidth={2} />
                Client uploads both files.
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-4">
                <p className="mb-1 flex items-center gap-1.5 font-display text-xs text-primary">
                  <Bot className="size-3.5" strokeWidth={2.25} />
                  PracticeOS AI
                </p>
                Thanks — both documents have been received and matched to your BAS job.
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-surface-2/50 p-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Behind the scenes
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 font-display text-sm">
                <span className="rounded-md border border-border px-2 py-1 text-muted-foreground line-through">
                  WAITING FOR CLIENT
                </span>
                <ArrowRight className="size-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="rounded-md bg-success/15 px-2 py-1 text-success">PREPARATION</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="panel mt-8 flex flex-wrap items-center justify-center gap-3 p-5 text-sm">
            {[
              { label: "Missing Documents", icon: AlertCircle },
              { label: "AI Follow-Up", icon: Send },
              { label: "Client Upload", icon: Paperclip },
              { label: "AI Classification", icon: Sparkles },
              { label: "Job Automatically Advances", icon: CheckCircle2 },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/60 px-3 py-1.5">
                  <s.icon className="size-3.5 text-primary" strokeWidth={2.25} />
                  {s.label}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="size-4 text-primary" strokeWidth={2.5} />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <BigLine>
            No spreadsheets tracking who owes what. No inbox archaeology. No manual chasing.
          </BigLine>
        </div>
      </Section>

      {/* SECTION 6 — REVIEW & ADVISORY COPILOT */}
      <Section id="advisory" eyebrow="AI Review & Advisory Copilot">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Don't just prepare the numbers. Find the story inside them.
          </h2>
          <p className="mt-4 text-muted-foreground">
            AI continuously reviews client financial data for:
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Unusual transactions",
              "Margin changes",
              "Cash-flow deterioration",
              "Expense spikes",
              "Revenue trends",
              "Payroll changes",
              "Tax planning opportunities",
              "Working-capital issues",
              "Business-performance anomalies",
            ].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal className="panel h-full p-7">
            <h3 className="font-display text-lg font-semibold">
              Client Insight — Greenfield Services
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Revenue",
                  value: "+18%",
                  icon: TrendingUp,
                  tone: "success" as const,
                  points: [40, 45, 50, 58, 65, 74],
                },
                {
                  label: "Gross Margin",
                  value: "31% → 24%",
                  icon: TrendingDown,
                  tone: "warn" as const,
                  points: [72, 68, 63, 58, 53, 48],
                },
                {
                  label: "Receivables Days",
                  value: "39 → 61",
                  icon: TrendingDown,
                  tone: "alert" as const,
                  points: [38, 42, 48, 53, 58, 61],
                },
                {
                  label: "Payroll",
                  value: "+27%",
                  icon: TrendingUp,
                  tone: "primary" as const,
                  points: [42, 48, 55, 60, 68, 75],
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="min-w-0 rounded-xl border border-border bg-surface-2/50 p-3.5 sm:p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <m.icon
                      className={`size-4 shrink-0 ${
                        m.tone === "success"
                          ? "text-success"
                          : m.tone === "warn"
                            ? "text-warn"
                            : m.tone === "alert"
                              ? "text-alert"
                              : "text-primary"
                      }`}
                      strokeWidth={2.25}
                    />
                    <Sparkline points={m.points} tone={m.tone} width={56} height={22} />
                  </div>
                  <p className="mt-2 truncate font-display text-lg font-semibold text-foreground sm:text-xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="panel h-full p-7">
            <p className="eyebrow">AI Observation</p>
            <p className="mt-3 text-sm text-foreground/90">
              Revenue is growing, but cash conversion and gross margin have deteriorated materially.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Suggested advisory conversation
            </p>
            <ul className="mt-3 space-y-2">
              <Check>Review pricing</Check>
              <Check>Analyse labour utilisation</Check>
              <Check>Tighten debtor collection</Check>
              <Check>Reforecast the next 13 weeks</Check>
            </ul>
            <div className="mt-6">
              <Cta href={DEMO_LINK} variant="primary" icon={ArrowRight}>
                Create Advisory Pack
              </Cta>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="panel mt-5 p-6">
            <p className="eyebrow">Another opportunity</p>
            <p className="mt-3 text-sm text-foreground/90">
              Based on current profitability and planned capital purchases, review timing of
              equipment acquisition before year-end.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <BigLine>Turn compliance clients into advisory opportunities automatically.</BigLine>
        </div>
      </Section>

      {/* SECTION 7 — COMMAND CENTRE */}
      <Section id="command" eyebrow="AI Practice Command Centre">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Ask your entire firm what needs attention.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Which jobs will miss deadline?",
              "Which clients are holding up work?",
              "Which tax returns are ready for review?",
              "Where is WIP getting stuck?",
              "Which clients are unprofitable?",
              "Which staff are overloaded?",
              "Which clients have advisory opportunities?",
              "What should each team work on today?",
            ].map((q) => (
              <a
                key={q}
                href="#command-response"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-medium text-primary transition-colors hover:border-primary/50 hover:bg-primary/16"
              >
                <Search className="size-3.5 shrink-0" strokeWidth={2.25} />
                {q}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div id="command-response" className="panel mt-8 scroll-mt-24 p-6 md:p-8">
            <div className="max-w-lg rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-sm md:ml-auto">
              <p className="mb-1 font-display text-xs text-muted-foreground">Partner</p>
              What is blocking month-end delivery?
            </div>

            <div className="mt-4 rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-5">
              <p className="flex items-center gap-1.5 font-display text-xs text-primary">
                <Bot className="size-3.5" strokeWidth={2.25} />
                PracticeOS AI
              </p>
              <p className="mt-2 text-sm font-medium">4 issues are slowing the practice.</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Dot tone="alert" />
                  <span>
                    87 jobs waiting on clients —{" "}
                    <span className="text-foreground">A$94K WIP currently blocked.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <Dot tone="warn" />
                  36 jobs awaiting manager review
                </li>
                <li className="flex gap-2">
                  <Dot tone="warn" />
                  12 staff members above planned capacity
                </li>
                <li className="flex gap-2">
                  <Dot tone="caution" />
                  18 jobs missing source documentation
                </li>
              </ul>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                Recommended actions
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Send Client Follow-Ups", "Redistribute Reviews", "Reassign Capacity"].map(
                  (a) => (
                    <Pill key={a}>{a}</Pill>
                  ),
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Cta href={DEMO_LINK} variant="primary" icon={ArrowRight}>
                  Execute Actions
                </Cta>
                <Cta href={DEMO_LINK} variant="ghost" icon={ArrowRight}>
                  View Jobs
                </Cta>
              </div>
            </div>

            <div className="mt-6 max-w-lg rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-sm md:ml-auto">
              <p className="mb-1 font-display text-xs text-muted-foreground">Partner</p>
              Which clients should we approach for advisory this month?
            </div>

            <div className="mt-4 rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-5">
              <p className="flex items-center gap-1.5 font-display text-xs text-primary">
                <Bot className="size-3.5" strokeWidth={2.25} />
                PracticeOS AI
              </p>
              <p className="mt-2 text-sm font-medium">26 clients show strong advisory signals.</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["7", "cash-flow deterioration"],
                  ["6", "rapidly increasing payroll"],
                  ["5", "margin compression"],
                  ["4", "high excess cash"],
                  ["4", "rapid revenue growth"],
                ].map(([n, label]) => (
                  <div key={label} className="rounded-xl border border-border bg-surface/70 p-3">
                    <p className="font-display text-xl font-semibold">
                      <Counter value={n ?? ""} />
                    </p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <BigLine>Don't just monitor the practice. Let AI help operate it.</BigLine>
        </div>
      </Section>

      {/* SECTION 8 — FINAL VALUE + CTA */}
      <Section id="demo" eyebrow="One operating model" className="navy bg-background">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Grow the client base without growing administration at the same rate.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Core Practice Platform",
              icon: LayoutDashboard,
              items: [
                "CRM",
                "Workflow",
                "Documents",
                "Workpapers",
                "Tax",
                "Billing",
                "Advisory",
                "Reporting",
              ],
            },
            {
              title: "AI Workforce",
              icon: Bot,
              items: [
                "Workpaper Agent",
                "Client Chaser",
                "Review Copilot",
                "Advisory Copilot",
                "Document AI",
                "Practice Manager",
              ],
            },
            {
              title: "Human Operations",
              icon: UsersRound,
              items: [
                "Bookkeeping",
                "Payroll",
                "Workpaper preparation",
                "BAS preparation",
                "Document processing",
                "Tax support",
                "Client administration",
                "Practice back office",
              ],
              note: "Optional APT-powered support for:",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="panel h-full p-6">
                <div className="flex items-center gap-2.5">
                  <IconTile icon={c.icon} size="sm" />
                  <h3 className="font-display text-sm uppercase tracking-widest text-primary">
                    {c.title}
                  </h3>
                </div>
                {c.note && <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {c.items.map((i2) => (
                    <li
                      key={i2}
                      className="rounded-lg border border-border bg-surface-2/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {i2}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <BigLine>= One AI-Powered Operating Model for the Entire Firm</BigLine>
          <Reveal as="p" className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Accountants should advise clients and make professional judgements. AI should handle the
            repetitive work around every engagement.
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap justify-center gap-3">
            <Cta href={DEMO_LINK} variant="invert" icon={ArrowRight}>
              See PracticeOS AI in Action
            </Cta>
            <Cta href={DEMO_LINK} variant="ghost" icon={Mail}>
              Request a Tailored Demo
            </Cta>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {montage.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 70}>
              <div className="panel flex h-40 flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-border px-3">
                  <span className="size-1.5 rounded-full bg-alert/50" />
                  <span className="size-1.5 rounded-full bg-warn/50" />
                  <span className="size-1.5 rounded-full bg-primary/50" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 p-3">
                  <div className="flex items-center gap-2">
                    <IconTile icon={m.icon} size="sm" />
                    <div className="h-2 flex-1 rounded-full bg-surface-2" />
                  </div>
                  <div className="h-2 w-4/5 rounded-full bg-surface-2" />
                  <div className="h-2 w-1/2 rounded-full bg-surface-2" />
                </div>
                <div className="border-t border-border px-3 py-2">
                  <p className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                    {m.name}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-muted-foreground/70">{m.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <footer className="navy border-t border-border/60 bg-background py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div className="max-w-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                  P
                </span>
                <span className="font-display text-base text-foreground">PracticeOS AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The AI Operating System for Modern Accounting & Advisory Firms.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Powered by APT Business Services + SoluLab
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:items-end">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Explore
              </p>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={DEMO_LINK}
                className="flex items-center gap-1.5 text-primary transition-colors hover:brightness-125 sm:justify-end"
              >
                <Mail className="size-3.5" strokeWidth={2.25} />
                {DEMO_EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PracticeOS AI. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <ScrollText className="size-3.5" strokeWidth={2} />
              Built for modern accounting & advisory firms.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
