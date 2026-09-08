import { createFileRoute } from "@tanstack/react-router";
import { BigLine, Check, Cta, Dot, Pill, Section, Stat } from "@/components/site/primitives";

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

const lifecycle = [
  ["01 — Onboard", "Entities, contacts, engagements, authorities"],
  ["02 — Collect", "Documents, source data, client requests"],
  ["03 — Prepare", "Bookkeeping, reconciliations, workpapers"],
  ["04 — Review", "Exceptions, tax positions, manager review"],
  ["05 — Lodge", "BAS, returns, compliance workflows"],
  ["06 — Bill", "WIP, invoices, payments"],
  ["07 — Advise", "Forecasting, tax planning, business insights"],
  ["08 — Retain", "Ongoing tasks, client communication, next-best action"],
];

const products: { title: string; verb: string; items: string[]; note?: string }[] = [
  {
    title: "Client 360",
    verb: "Manage",
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

function Index() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              P
            </span>
            <span className="font-display text-lg font-semibold">PracticeOS AI</span>
          </div>
          <Cta variant="ghost">Request a Tailored Demo</Cta>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Aurora glows */}
        <div className="pointer-events-none absolute -top-[15%] -left-[10%] size-[55%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-[10%] -bottom-[15%] size-[55%] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
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
              <Cta>See PracticeOS AI in Action →</Cta>
              <Cta variant="ghost">Request a Tailored Demo</Cta>
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
            <div className="panel flex aspect-[4/3.4] flex-col overflow-hidden rounded-3xl">
              <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-4">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-alert/40" />
                  <span className="size-2.5 rounded-full bg-warn/40" />
                  <span className="size-2.5 rounded-full bg-primary/40" />
                </div>
                <span className="font-display text-[10px] tracking-widest text-muted-foreground uppercase">
                  Practice Dashboard · FY26 Live
                </span>
                <span className="w-12" />
              </div>
              <div className="flex-1 space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  <Stat value="1,284" label="Active Clients" />
                  <Stat value="342" label="Jobs In Progress" />
                  <Stat value="87" label="Awaiting Client Info" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Stat value="64" label="BAS Due" />
                  <Stat value="38" label="Tax Returns Ready" />
                  <Stat value="A$286K" label="WIP" />
                </div>
                <div className="rounded-2xl border border-border bg-surface-2/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-display text-xs font-semibold text-foreground">
                      AI Practice Manager
                    </span>
                    <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">
                      42 jobs can progress today
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "18 clients are blocking tax work",
                      "9 returns have unusual transactions",
                      "27 client follow-ups can be sent now",
                    ].map((s) => (
                      <div
                        key={s}
                        className="flex h-9 items-center rounded-lg border border-border bg-surface/60 px-3 text-xs text-muted-foreground"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating overlays */}
            <div className="panel animate-float-soft absolute -bottom-7 -left-4 flex items-center gap-3 rounded-2xl border-accent/30 p-4 md:-left-8">
              <span className="grid size-8 place-items-center rounded-lg bg-accent/20 text-accent">
                ✓
              </span>
              <div>
                <p className="text-[10px] text-muted-foreground">BAS Lodged</p>
                <p className="font-display text-xs font-bold text-foreground">Auto-verified</p>
              </div>
            </div>

            <div className="panel absolute -top-6 -right-2 w-56 space-y-2 rounded-2xl border-primary/30 p-4 md:-right-6">
              <p className="text-[10px] font-bold tracking-widest text-primary uppercase">
                AI Co-pilot
              </p>
              <p className="text-xs text-foreground italic">
                "Potential tax saving identified for Client X…"
              </p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full w-[60%] bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LIFECYCLE */}
      <Section eyebrow="One system from client onboarding to advisory">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Stop running the firm through inboxes, spreadsheets, practice software and endless
          follow-ups.
        </h2>
        <p className="mt-4 text-muted-foreground">PracticeOS connects the full client lifecycle.</p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map(([step, desc]) => (
            <div key={step} className="rounded-2xl border border-border bg-surface/70 p-5">
              <p className="font-display text-sm font-semibold text-primary">{step}</p>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BigLine>One client. One job history. One financial truth.</BigLine>
        </div>

        <div className="panel mt-10 overflow-hidden p-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["CLIENT", "DATA", "WORKPAPERS", "TAX", "REVIEW", "LODGE", "ADVISE"].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="rounded-xl border border-primary/30 bg-surface-2/70 px-4 py-2 font-display text-xs tracking-widest">
                  {s}
                </span>
                {i < 6 && <span className="text-primary">→</span>}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-center text-sm text-foreground">
            AI running underneath every stage
          </div>
        </div>
      </Section>

      {/* SECTION 3 — CORE PLATFORM */}
      <Section eyebrow="The core practice operating system">
        <h2 className="text-3xl font-semibold md:text-4xl">Everything needed to run the firm.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.title} className="panel flex flex-col p-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {p.verb}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border bg-surface-2/50 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              {p.note && <p className="mt-4 text-sm text-foreground/90">{p.note}</p>}
            </article>
          ))}
        </div>
        <div className="mt-12">
          <BigLine>This runs the accounting practice, not just one accounting task.</BigLine>
        </div>
      </Section>

      {/* SECTION 4 — AI WORKPAPER AGENT */}
      <Section id="workpaper" eyebrow="AI Workpaper Agent">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Turn a folder of client documents into a review-ready file.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1.1fr] lg:items-center">
          <div className="panel p-6">
            <p className="eyebrow">Drop in</p>
            <div className="mt-4 space-y-2">
              {[
                "Bank statements",
                "Invoices",
                "Payroll reports",
                "Loan statements",
                "Asset documents",
                "Prior-year workpapers",
                "Accounting exports",
              ].map((d, i) => (
                <div
                  key={d}
                  className="rounded-lg border border-border bg-surface-2/50 px-4 py-2.5 text-sm text-muted-foreground"
                  style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 font-display text-sm text-primary">
              → AI →
            </span>
          </div>

          <div className="panel p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold">XYZ Pty Ltd — FY26</h3>
              <span className="font-display text-3xl font-bold text-primary">91%</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Job completion
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[91%] rounded-full bg-primary" />
            </div>
            <ul className="mt-5 space-y-2">
              <Check>Bank accounts reconciled</Check>
              <Check>Payroll matched</Check>
              <Check>Fixed asset schedule prepared</Check>
              <Check>GST reviewed</Check>
              <Check>Loan balances verified</Check>
            </ul>
            <p className="mt-5 text-sm font-medium text-foreground">6 items require attention</p>
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
              <Cta>Review Exceptions</Cta>
              <Cta variant="ghost">Request Client Information</Cta>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            <div key={s} className="rounded-xl border border-border bg-surface/70 p-4">
              <span className="font-display text-xs text-primary">{i + 1}</span>
              <p className="mt-1 text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BigLine>
            AI prepares the file. Accountants review judgement-heavy exceptions.
          </BigLine>
        </div>
      </Section>

      {/* SECTION 5 — AI CLIENT CHASER */}
      <Section eyebrow="AI Client Chaser">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Stop paying accountants to chase documents.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          PracticeOS knows exactly what every job is waiting for.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="panel p-6">
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
          </div>

          <div className="panel flex flex-col p-6">
            <p className="eyebrow">Example conversation</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-4">
                <p className="mb-1 font-display text-xs text-primary">PracticeOS AI</p>
                Hi David, we're preparing your September BAS. We still need the July business bank
                statement and payroll summary.
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-muted-foreground">
                Client uploads both files.
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-4">
                <p className="mb-1 font-display text-xs text-primary">PracticeOS AI</p>
                Thanks — both documents have been received and matched to your BAS job.
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-surface-2/50 p-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Behind the scenes
              </p>
              <p className="mt-2 font-display text-sm">
                <span className="text-muted-foreground line-through">WAITING FOR CLIENT</span>
                <span className="mx-2 text-primary">→</span>
                <span className="text-primary">PREPARATION</span>
              </p>
            </div>
          </div>
        </div>

        <div className="panel mt-8 flex flex-wrap items-center justify-center gap-3 p-5 text-sm">
          {["Missing Documents", "AI Follow-Up", "Client Upload", "Job Automatically Advances"].map(
            (s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5">
                  {s}
                </span>
                {i < 3 && <span className="text-primary">→</span>}
              </div>
            ),
          )}
        </div>

        <div className="mt-12">
          <BigLine>
            No spreadsheets tracking who owes what. No inbox archaeology. No manual chasing.
          </BigLine>
        </div>
      </Section>

      {/* SECTION 6 — REVIEW & ADVISORY COPILOT */}
      <Section eyebrow="AI Review & Advisory Copilot">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Don't just prepare the numbers. Find the story inside them.
        </h2>
        <p className="mt-4 text-muted-foreground">
          AI continuously reviews client financial data for:
        </p>
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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="panel p-6">
            <h3 className="font-display text-lg font-semibold">
              Client Insight — Greenfield Services
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Stat value="+18%" label="Revenue" />
              <Stat value="31% → 24% ⚠" label="Gross Margin" />
              <Stat value="39 → 61 ⚠" label="Receivables Days" />
              <Stat value="+27%" label="Payroll" />
            </div>
          </div>
          <div className="panel p-6">
            <p className="eyebrow">AI Observation</p>
            <p className="mt-3 text-sm text-foreground/90">
              Revenue is growing, but cash conversion and gross margin have deteriorated
              materially.
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
              <Cta>Create Advisory Pack →</Cta>
            </div>
          </div>
        </div>

        <div className="panel mt-5 p-6">
          <p className="eyebrow">Another opportunity</p>
          <p className="mt-3 text-sm text-foreground/90">
            Based on current profitability and planned capital purchases, review timing of
            equipment acquisition before year-end.
          </p>
        </div>

        <div className="mt-12">
          <BigLine>Turn compliance clients into advisory opportunities automatically.</BigLine>
        </div>
      </Section>

      {/* SECTION 7 — COMMAND CENTRE */}
      <Section eyebrow="AI Practice Command Centre">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Ask your entire firm what needs attention.
        </h2>

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
            <Pill key={q}>{q}</Pill>
          ))}
        </div>

        <div className="panel mt-10 p-6 md:p-8">
          <div className="max-w-lg rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-sm md:ml-auto">
            <p className="mb-1 font-display text-xs text-muted-foreground">Partner</p>
            What is blocking month-end delivery?
          </div>

          <div className="mt-4 rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-5">
            <p className="font-display text-xs text-primary">PracticeOS AI</p>
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
              {["Send Client Follow-Ups", "Redistribute Reviews", "Reassign Capacity"].map((a) => (
                <Pill key={a}>{a}</Pill>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Cta>Execute Actions →</Cta>
              <Cta variant="ghost">View Jobs →</Cta>
            </div>
          </div>

          <div className="mt-6 max-w-lg rounded-2xl rounded-tr-sm border border-border bg-surface-2/70 p-4 text-sm md:ml-auto">
            <p className="mb-1 font-display text-xs text-muted-foreground">Partner</p>
            Which clients should we approach for advisory this month?
          </div>

          <div className="mt-4 rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 p-5">
            <p className="font-display text-xs text-primary">PracticeOS AI</p>
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
                  <p className="font-display text-xl font-semibold">{n}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <BigLine>Don't just monitor the practice. Let AI help operate it.</BigLine>
        </div>
      </Section>

      {/* SECTION 8 — FINAL VALUE + CTA */}
      <Section id="demo" eyebrow="One operating model">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Grow the client base without growing administration at the same rate.
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Core Practice Platform",
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
          ].map((c) => (
            <div key={c.title} className="panel p-6">
              <h3 className="font-display text-sm uppercase tracking-widest text-primary">
                {c.title}
              </h3>
              {c.note && <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>}
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border bg-surface-2/50 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <BigLine>= One AI-Powered Operating Model for the Entire Firm</BigLine>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Accountants should advise clients and make professional judgements. AI should handle
            the repetitive work around every engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta>See PracticeOS AI in Action →</Cta>
            <Cta variant="ghost">Request a Tailored Demo</Cta>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Practice dashboard",
            "AI workpaper completion",
            "Client document chaser",
            "Tax review",
            "Advisory opportunities",
            "AI Practice Command Centre",
          ].map((s) => (
            <div
              key={s}
              className="panel flex h-32 items-end p-4 text-xs uppercase tracking-widest text-muted-foreground"
            >
              {s}
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">PracticeOS AI</p>
          <p>The AI Operating System for Modern Accounting & Advisory Firms.</p>
          <p className="mt-3 text-xs">Powered by APT Business Services + SoluLab</p>
        </div>
      </footer>
    </main>
  );
}
