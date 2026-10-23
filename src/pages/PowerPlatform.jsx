import { Link } from "react-router-dom";
import {
  Bot,
  Workflow,
  Network,
  RefreshCw,
  ShieldCheck,
  ListChecks,
  ScanSearch,
  UserPlus,
  MailCheck,
  Wrench,
  KeyRound,
  Split,
  FileSearch,
  BellRing,
  BookOpen,
  GitBranch,
  ClipboardList,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import IconTile from "../components/IconTile";
import ApprovalCardMockup from "../components/ApprovalCardMockup";

const stats = [
  { value: "10", label: "Automated pipeline components" },
  { value: "11", label: "Power Automate flows documented" },
  { value: "3", label: "Approval UX iterations shipped live" },
  { value: "4", label: "Internship projects delivered" },
];

const heroTags = [
  "Power Automate",
  "Power Apps",
  "Dataverse",
  "Power Platform Pipelines",
  "Service Principals",
  "Microsoft Entra ID",
  "ALM",
  "Governance",
];

const pipelineComponents = [
  {
    title: "Delegated deployment",
    icon: Bot,
    body: "Deployments run under a service principal instead of a personal account, so developers ship to production without ever holding production rights. Deployed flows end up owned by the service principal.",
  },
  {
    title: "Automated approval flow",
    icon: Workflow,
    body: "A Power Automate flow triggers on every deployment request, validates connections, and routes an approval card to the solution's technical owners before approving or rejecting through the pipeline API.",
  },
  {
    title: "Connection mapping table",
    icon: Network,
    body: "A Dataverse table maps each connector to its production connection — one shared default per connector, with specific rows overriding it for Shared, Dedicated, Pending or Retired connections.",
  },
  {
    title: "Automatic remapping",
    icon: RefreshCw,
    body: "Once approved, every connection reference in the deployment settings is rewritten to point at the correct production connection. Developers never touch production connections directly.",
  },
  {
    title: "Fail-fast validation",
    icon: ShieldCheck,
    body: "Unmapped connections, missing configuration rows or missing approvers stop the deployment before an approval is even sent, with an email telling the deployer exactly what to fix.",
  },
  {
    title: "Per-solution approval rules",
    icon: ListChecks,
    body: "A configuration table defines technical owners per solution, whether approval is required, and whether one approver is enough or everyone must sign off. Low-risk solutions can auto-approve.",
  },
  {
    title: "Duplicate connection detection",
    icon: ScanSearch,
    body: "Flags a solution using more than one connection for the same connector — against the team's one-reference standard — and puts it at the top of the approval with guidance for the reviewer.",
  },
  {
    title: "Post-deployment automation",
    icon: UserPlus,
    body: "Adds a monitored service account as co-owner of every deployed flow after a successful run, so failure alerts land in an inbox someone is actually watching.",
  },
  {
    title: "Deployment outcome email",
    icon: MailCheck,
    body: "A branded HTML email tells the deployer and technical owners whether the deployment succeeded or failed, with rejected deployments filtered out so nobody gets a misleading failure notice.",
  },
  {
    title: "Dataflow ownership fix",
    icon: Wrench,
    body: "Dataflows deployed by the service principal came out unusable because Dataverse doesn't support reassigning their owner. Found and automated the underlying service's update-owner endpoint instead.",
  },
];

const challenges = [
  {
    title: "OAuth connections under delegated deployment",
    icon: KeyRound,
    body: "OAuth connection references failed when deployed through the service principal. Resolved it by generating the deployment settings JSON directly in the approval flow instead of relying on the deployer's own connections.",
  },
  {
    title: "One connector, multiple connections",
    icon: Split,
    body: "Some connectors (like HTTP with Microsoft Entra ID) legitimately needed more than one connection, which broke a simple one-row-per-connector mapping. Designed and verified the default + override model to handle it.",
  },
  {
    title: "False \"missing dependency\" errors",
    icon: FileSearch,
    body: "Leftover references from flows edited outside their solution caused pipeline validation to report missing dependencies. Traced the cause back to the editing pattern and documented the fix for the team.",
  },
  {
    title: "Dataflow ownership & alerting gaps",
    icon: BellRing,
    body: "Dataflow ownership, flow-failure alerting, and misleading failure emails on rejected deployments were each found during testing and closed off with a small, configurable automation.",
  },
];

const testing = [
  "Ran every component type used across the team's solutions through the pipeline and logged the results in a checklist.",
  "Covered every approval path: approve and reject with comments, no approval required, missing technical owners, unmapped connections, first-to-respond vs. everyone-must-approve, and default vs. dedicated remapping.",
  "Built a four-scenario demo solution and walked a senior developer through the full loop — flagged, fixed by the deployer, then cleanly approved.",
];

const otherWork = [
  {
    title: "Power Automate flow documentation",
    stack: "MkDocs (Material) · Markdown · Git",
    icon: BookOpen,
    body: "Documented all 11 Power Automate flows — including inactive and experimental ones — behind a Dataverse-backed planning app for wind turbine installation projects. Organised into Getting Started, Canvas App, Model-Driven App, Business Logic, Dataverse, Power Automate and Integrations, with every flow page following one template: Purpose · Trigger · Steps · Where it's called from.",
  },
  {
    title: "Azure DevOps Git integration assessment",
    stack: "Azure DevOps · GitLab · Power Platform ALM",
    icon: GitBranch,
    body: "Assessed bringing source control to Power Platform development and migrating existing repositories from GitLab. Clarified the deployment model with the team — deployment stays in native Power Platform Pipelines, Git is for source control only — and identified the need for Git development standards, since none existed yet.",
  },
  {
    title: "Connector usage inventory",
    stack: "Dataverse Web API · FetchXML · Python · Excel",
    icon: ClipboardList,
    body: "Queried the Dataverse Web API to find which connectors each solution actually uses, not just references. Combined the results with Python into an Excel inventory that fed directly into the pipeline's component checklist and drove the default and dedicated connection decisions.",
  },
];

const skillGroups = [
  {
    category: "Power Platform",
    items: ["Power Automate", "Power Apps", "Dataverse", "Power Platform Pipelines", "Connection References", "Solutions & ALM"],
  },
  {
    category: "Identity & Integration",
    items: ["Service Principals", "Microsoft Entra ID", "REST APIs", "OAuth Connections"],
  },
  {
    category: "Governance & DevOps",
    items: ["Approval Workflows", "Configuration-driven Design", "Azure DevOps", "Git", "GitLab", "MkDocs"],
  },
  {
    category: "Data & Tooling",
    items: ["Python", "JSON", "HTML Email Templates"],
  },
];

export default function PowerPlatform() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[160px]"></div>

      <SiteHeader>
        <Link
          to="/"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </SiteHeader>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
            Internship · Siemens Energy (2026)
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Power Platform Engineering
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Built, tested end to end, demoed
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Built a shared DEV → PROD deployment pipeline at Siemens Energy, so solutions reach
            production without anyone holding personal production rights. A Power Automate
            approval flow validates every connection against a
            Dataverse mapping table, flags duplicate connections, routes approvals to each
            solution's technical owners in Teams, and remaps connections automatically after
            approval. Post-deployment automations add monitoring co-owners, reassign dataflow
            ownership, and send branded outcome emails.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <p className="bg-gradient-to-r from-blue-300 via-violet-300 to-teal-300 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Flagship project</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What I built</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            One shared pipeline any developer on the team can use to deploy to production — with a
            human approval step, automatic connection handling, and governance checks built in.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pipelineComponents.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <IconTile icon={item.icon} />
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-base leading-7 text-white/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approval UX */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Designed with the people who use it</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">The approval card</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The approval card is what a technical owner sees in Teams or Outlook before letting
            code into production, so I iterated on it with my supervisor and a senior developer
            over several rounds — from listing every connection reference, to restructuring the
            whole message around duplicates, the signal that actually needs a human's attention. I
            shipped three real layout variants as actual deployments and let the team pick the
            final design from their own approval emails.
          </p>

          <div className="mt-10">
            <ApprovalCardMockup />
          </div>
        </section>

        {/* Challenges */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Engineering challenges</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">Problems I had to solve</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <IconTile icon={item.icon} />
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-base leading-7 text-white/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testing */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Quality bar</SectionLabel>
            <h3 className="mt-3 text-2xl font-semibold">Tested like it was going to production</h3>
            <ul className="mt-6 space-y-4">
              {testing.map((line) => (
                <li key={line} className="flex gap-3 leading-7 text-white/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other internship work */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Also part of the internship</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">Other delivered work</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {otherWork.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <IconTile icon={item.icon} />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">{item.stack}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-3 text-base leading-7 text-white/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Skills demonstrated</SectionLabel>
            <h3 className="mt-3 text-3xl font-semibold">Tools and strengths</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-white/50">{group.category}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center md:p-10">
            <h3 className="text-2xl font-semibold">Want the full picture?</h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-white/70">
              This page covers the Power Platform work from my internship. Head back to the
              portfolio for the rest of my projects, or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                ← Back to portfolio
              </Link>
              <a
                href="https://www.linkedin.com/in/ildo-mota-32a39b21b/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href="/Ildo_CV2.pdf"
                download
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
