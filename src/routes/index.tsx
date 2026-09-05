import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evaltech — Threat Detection Documentation" },
      {
        name: "description",
        content:
          "A documentation toolkit for cybersecurity threat detection. Download professional PDF guides on cyber risks, prevention, detection tools, and legal responsibilities.",
      },
      {
        property: "og:title",
        content: "Evaltech — Threat Detection Documentation",
      },
      {
        property: "og:description",
        content:
          "A documentation toolkit for cybersecurity threat detection. Download professional PDF guides on cyber risks, prevention, detection tools, and legal responsibilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Evaltech — Threat Detection Documentation",
      },
      {
        name: "twitter:description",
        content:
          "A documentation toolkit for cybersecurity threat detection. Download professional PDF guides on cyber risks, prevention, detection tools, and legal responsibilities.",
      },
    ],
  }),
  component: Index,
});

const docs = [
  {
    id: "risk-01",
    category: "RISK / 01",
    title: "Major Cyber Attack Risks & Prevention",
    description:
      "A threat-modeling walkthrough of the attack classes that actually land in the wild — and the controls that stop them before detection.",
    pages: "14",
    span: "md:col-span-8",
    variant: "dark" as const,
    file: "/pdfs/major-cyber-attack-risks-and-prevention.pdf",
  },
  {
    id: "risk-02",
    category: "RISK / 02",
    title: "Phishing & Social Engineering",
    description: "Credential harvesting, BEC, and the human surface.",
    pages: "6",
    span: "md:col-span-4",
    variant: "signal" as const,
    file: "/pdfs/phishing-and-social-engineering.pdf",
  },
  {
    id: "risk-03",
    category: "RISK / 03",
    title: "Ransomware Operations",
    description: "Initial access, exfiltration, and the double-extortion playbook.",
    pages: "7",
    span: "md:col-span-4",
    variant: "card" as const,
    file: "/pdfs/ransomware-operations.pdf",
  },
  {
    id: "risk-04",
    category: "RISK / 04",
    title: "Supply-Chain & Dependency",
    description: "Compromised third parties and the transitive trust problem.",
    pages: "6",
    span: "md:col-span-4",
    variant: "card" as const,
    file: "/pdfs/supply-chain-and-dependency.pdf",
  },
  {
    id: "risk-05",
    category: "RISK / 05",
    title: "Zero-Day & Exploit Risk",
    description: "Window-of-exposure management and virtual patching.",
    pages: "5",
    span: "md:col-span-4",
    variant: "card" as const,
    file: "/pdfs/zero-day-and-exploit-risk.pdf",
  },
  {
    id: "detection-06",
    category: "DETECTION / 06",
    title: "Threat Detection Tooling",
    description:
      "EDR, SIEM, NDR, and honeypots — what each is for, when it's worth it, and how they compose.",
    pages: "22",
    span: "md:col-span-8",
    variant: "card" as const,
    file: "/pdfs/threat-detection-tooling.pdf",
  },
  {
    id: "legal-07",
    category: "LEGAL / 07",
    title: "The Legal Mandate of Detection",
    description: "Authority, duties, notification, and liability.",
    pages: "8",
    span: "md:col-span-4",
    variant: "card" as const,
    file: "/pdfs/legal-mandate-of-detection.pdf",
  },
];

function DownloadLink({
  file,
  label,
  variant,
}: {
  file: string;
  label: string;
  variant: "dark" | "signal" | "card";
}) {
  const colorClass =
    variant === "dark"
      ? "text-signal"
      : variant === "signal"
        ? "text-ink font-bold"
        : "text-signal";

  return (
    <a
      href={file}
      download
      className={`font-mono text-xs tracking-wide inline-flex items-center gap-2 transition-colors hover:opacity-80 ${colorClass}`}
    >
      {label} <span aria-hidden="true">↓</span>
    </a>
  );
}

function DocCard({
  doc,
  index,
}: {
  doc: (typeof docs)[number];
  index: number;
}) {
  const baseClasses =
    "flex flex-col justify-between p-8 min-h-[260px] animate-rise group transition-colors";
  const variantClasses =
    doc.variant === "dark"
      ? "bg-ink text-paper"
      : doc.variant === "signal"
        ? "bg-signal text-ink"
        : "bg-paper border border-ink/15 hover:border-signal";

  const titleColor = doc.variant === "dark" ? "text-paper" : "text-ink";
  const descColor =
    doc.variant === "dark"
      ? "text-paper/70"
      : doc.variant === "signal"
        ? "text-ink/70"
        : "text-inksoft";
  const metaColor =
    doc.variant === "dark"
      ? "text-paper/50"
      : doc.variant === "signal"
        ? "text-ink/60"
        : "text-inksoft/70";
  const categoryColor =
    doc.variant === "dark"
      ? "text-signal"
      : doc.variant === "signal"
        ? "text-ink/60"
        : "text-signal";

  return (
    <article
      className={`${doc.span} ${baseClasses} ${variantClasses}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div>
        <span
          className={`font-mono text-[10px] tracking-widest ${categoryColor}`}
        >
          {doc.category}
        </span>
        <h2
          className={`font-display font-bold mt-3 leading-tight text-balance ${titleColor} ${doc.span === "md:col-span-8" ? "text-2xl md:text-3xl max-w-[16ch]" : "text-xl"}`}
        >
          {doc.title}
        </h2>
        <p
          className={`font-sans text-sm leading-relaxed mt-4 text-pretty ${descColor} ${doc.span === "md:col-span-8" ? "max-w-[46ch]" : "max-w-[34ch]"}`}
        >
          {doc.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <span className={`font-mono text-[10px] tracking-widest ${metaColor}`}>
          {doc.pages} PAGES · PDF
        </span>
        <DownloadLink
          file={doc.file}
          label={doc.span === "md:col-span-8" ? "Download REPORT" : "Download"}
          variant={doc.variant}
        />
      </div>
    </article>
  );
}

function ToolingIcon() {
  return (
    <span
      className="shrink-0 w-12 h-12 border border-ink/20 grid place-items-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12 fill-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M14 3V45"
          stroke="#151310"
          strokeWidth="2"
          pathLength={1}
          className="doc-mark"
        />
        <path
          d="M22 3V45"
          stroke="#151310"
          strokeWidth="2"
          pathLength={1}
          className="doc-mark"
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M30 3V45"
          stroke="#151310"
          strokeWidth="2"
          pathLength={1}
          className="doc-mark"
          style={{ animationDelay: "0.45s" }}
        />
        <path
          d="M38 3V45"
          stroke="#E8451A"
          strokeWidth="3"
          pathLength={1}
          className="doc-mark"
          style={{ animationDelay: "0.6s" }}
        />
      </svg>
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      <header className="fixed inset-x-0 top-0 z-30 bg-paper/90 border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden sm:flex items-center gap-8 text-xs font-medium text-inksoft">
            <Link to="/" className="hover:text-ink transition-colors">
              Overview
            </Link>
            <a
              href="#library"
              className="hover:text-ink transition-colors"
            >
              Library
            </a>
            <a href="#methodology" className="hover:text-ink transition-colors">
              Methodology
            </a>
            <a href="#compliance" className="hover:text-ink transition-colors">
              Compliance
            </a>
          </nav>
          <span className="font-mono text-[10px] tracking-widest text-inksoft/70">
            v3.1 · 2025
          </span>
        </div>
      </header>

      <main className="pt-28 pb-24 max-w-6xl mx-auto px-6">
        <section className="animate-rise">
          <p className="font-mono text-[11px] tracking-widest text-signal">
            THREAT INTELLIGENCE · DOCUMENTATION TOOLKIT
          </p>
          <h1 className="font-display font-bold text-ink text-4xl md:text-[3.4rem] leading-[0.95] tracking-tight mt-4 text-balance max-w-[16ch]">
            Threat detection, documented.
          </h1>
          <p className="font-sans text-inksoft text-lg leading-relaxed mt-6 max-w-[52ch] text-pretty">
            A curated library of field-grade reports on cyber risk, prevention,
            detection tooling, and the legal boundaries of your mandate.
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 mt-10 pb-10 border-b border-ink/10">
            {[
              { value: "07", label: "REPORTS" },
              { value: "68", label: "PAGES" },
              { value: "12", label: "FRAMEWORKS" },
              { value: "Q4", label: "2025", signal: true },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="animate-rise"
                style={{ animationDelay: `${(i + 1) * 60}ms` }}
              >
                <span
                  className={`block font-display font-bold text-2xl leading-none ${stat.signal ? "text-signal" : "text-ink"}`}
                >
                  {stat.value}
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-inksoft/70 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="library" className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {docs.map((doc, index) => (
              <DocCard key={doc.id} doc={doc} index={index} />
            ))}
          </div>
        </section>

        <section
          id="methodology"
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-ink/10 pt-16"
        >
          <div>
            <span className="font-mono text-[11px] tracking-widest text-signal">
              METHODOLOGY
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-3 leading-tight tracking-tight text-balance">
              Built for operators, not just auditors.
            </h2>
            <p className="font-sans text-inksoft text-base leading-relaxed mt-4 max-w-[52ch] text-pretty">
              Each report starts with a real attack pattern, maps it to the
              controls that matter, and ends with a checklist you can run during
              an incident. The language is precise, the format is scannable, and
              the advice is actionable.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Risk-first: every control is tied to a specific threat.",
              "Detection-second: prevention fails; know what to watch for.",
              "Legal-last: understand the boundaries before you act.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 border border-ink/10 bg-paper"
              >
                <span className="font-mono text-xs text-signal mt-0.5">
                  0{i + 1}
                </span>
                <p className="font-sans text-sm text-inksoft leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="compliance"
          className="mt-16 bg-ink text-paper p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="font-mono text-[11px] tracking-widest text-signal">
                COMPLIANCE NOTE
              </span>
              <h2 className="font-display font-bold text-2xl mt-3 leading-tight tracking-tight text-balance">
                Reference material, not legal advice.
              </h2>
              <p className="font-sans text-paper/70 text-sm leading-relaxed mt-4 max-w-[52ch] text-pretty">
                Evaltech documents are written for professional education and
                operational reference. Always consult qualified legal counsel
                before making decisions that affect privacy, surveillance, or
                breach-notification obligations.
              </p>
            </div>
            <ToolingIcon />
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <Logo />
            <p className="font-sans text-xs text-inksoft mt-2 max-w-[40ch]">
              Documentation for threat detection. Reports are illustrative
              sample material, not legal advice.
            </p>
          </div>
          <div className="flex items-center gap-8 font-mono text-[11px] text-inksoft">
            <span>© 2025 Evaltech</span>
            <a href="#library" className="hover:text-signal transition-colors">
              Index
            </a>
            <a href="mailto:hello@evaltech.io" className="hover:text-signal transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
