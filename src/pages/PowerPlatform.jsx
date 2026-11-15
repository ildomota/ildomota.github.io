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
  ArrowRight,
  ChevronRight,
  Upload,
  ClipboardCheck,
  Table2,
  UserCheck,
  Rocket,
  XCircle,
  Stethoscope,
  FileText,
  HeartPulse,
  ListTree,
  ShieldAlert,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import IconTile from "../components/IconTile";
import { CV_FILENAME, CV_URL, LINKEDIN_URL } from "../lib/links";
import ApprovalCardMockup from "../components/ApprovalCardMockup";
import HealthCheckMockup from "../components/HealthCheckMockup";

const topics = [
  {
    href: "#pipeline",
    number: "01",
    title: "Deployment Pipeline",
    icon: Rocket,
    body: "Governed DEV → PROD deployments with automated checks, owner approvals and connection remapping.",
  },
  {
    href: "#health-check",
    number: "02",
    title: "Health Check",
    icon: Stethoscope,
    body: "A Power Apps tool that documents every solution automatically and flags flows that could break.",
  },
];

// The happy path of a deployment, in order. The automatic rejection branches
// off the two checks (steps 2 and 3) and is rendered separately below them.
const deploymentSteps = [
  {
    title: "Developer deploys",
    icon: Upload,
    body: "A developer starts a deployment from DEV through the shared pipeline. No production rights needed.",
  },
  {
    title: "Standards check",
    icon: ClipboardCheck,
    body: "The approval flow checks that the solution follows the team's standards.",
  },
  {
    title: "Structure check",
    icon: Table2,
    body: "If it passes, the flow checks the structure: tables and connection references.",
  },
  {
    title: "Owner approval",
    icon: UserCheck,
    body: "The solution's technical owners get an approval with the deployer's notes, and approve or reject.",
  },
  {
    title: "Lands in PROD",
    icon: Rocket,
    body: "Connection references are remapped to a service account, and the solution lands in PROD.",
  },
];

const healthCheckFeatures = [
  {
    title: "Documentation that writes itself",
    icon: FileText,
    body: "Every solution in the environment is documented automatically, so nobody has to write or update it by hand.",
  },
  {
    title: "Health and deployability at a glance",
    icon: HeartPulse,
    body: "Each solution shows whether its flows and connections are healthy and whether it's deployable, with flow errors and misused connections flagged.",
  },
  {
    title: "From solution to single step",
    icon: ListTree,
    body: "Open a solution to see all its components. The Flows tab lists every flow inside it, and opening a flow documents each step and action in order.",
  },
  {
    title: "Catches silent failures",
    icon: ShieldAlert,
    body: "Spots steps with no error handling and tells you when a flow could fail silently, before it happens in production.",
  },
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
    body: "A Dataverse table maps each connector to its production connection: one shared default per connector, with specific rows overriding it for Shared, Dedicated, Pending or Retired connections.",
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
    body: "Flags a solution using more than one connection for the same connector (against the team's one-reference standard) and puts it at the top of the approval with guidance for the reviewer.",
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
  "Built a four-scenario demo solution and walked a senior developer through the full loop: flagged → fixed by the deployer → cleanly approved.",
];

const otherWork = [
  {
    title: "Power Automate flow documentation",
    stack: "MkDocs (Material) · Markdown · Git",
    icon: BookOpen,
    body: "Documented all 11 Power Automate flows, including inactive and experimental ones, behind a Dataverse-backed planning app for wind turbine installation projects. Organised into Getting Started, Canvas App, Model-Driven App, Business Logic, Dataverse, Power Automate and Integrations, with every flow page following one template: Purpose · Trigger · Steps · Where it's called from.",
  },
  {
    title: "Azure DevOps Git integration assessment",
    stack: "Azure DevOps · GitLab · Power Platform ALM",
    icon: GitBranch,
    body: "Assessed bringing source control to Power Platform development and migrating existing repositories from GitLab. Clarified the deployment model with the team (deployment stays in native Power Platform Pipelines, Git is for source control only) and identified the need for Git development standards, since none existed yet.",
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

function DeploymentStep({ step, number, last }) {
  return (
    <li className="relative flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 lg:block">
      <IconTile icon={step.icon} />
      <div className="lg:mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-300/80">
          Step {number}
        </p>
        <h5 className="mt-1 font-semibold text-white">{step.title}</h5>
        <p className="mt-2 text-sm leading-6 text-white/65">{step.body}</p>
      </div>
      {!last && (
        <ChevronRight
          className="absolute -right-5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-white/30 lg:block"
          aria-hidden="true"
        />
      )}
    </li>
  );
}

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
            Built and tested end to end
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            During my internship at Siemens Energy I build on Microsoft Power Platform. Two
            projects stand out: a shared deployment pipeline that takes solutions from DEV to PROD
            without anyone holding personal production rights, and Health Check, a Power Apps tool
            I proposed that documents every solution in the environment and flags what could
            break.
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <a
                key={topic.href}
                href={topic.href}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <IconTile icon={topic.icon} />
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-teal-300/80">{topic.number}</p>
                  <h4 className="mt-1 flex items-center gap-2 text-lg font-semibold text-white">
                    {topic.title}
                    <ArrowRight
                      className="h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </h4>
                  <p className="mt-2 text-base leading-7 text-white/65">{topic.body}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Project 01: deployment pipeline */}
        <section id="pipeline" className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-16 pb-12">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-teal-300">PROJECT 01</p>
            <span className="h-px flex-1 bg-white/10"></span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Deployment Pipeline</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
            A shared DEV → PROD pipeline any developer on the team can use, so solutions reach
            production without anyone holding personal production rights. A Power Automate
            approval flow checks every deployment, routes it to the solution's technical owners in
            Teams, and remaps connections automatically once it's approved.
          </p>

          <h4 className="mt-12 text-xl font-semibold">How a deployment works</h4>
          <ol className="mt-6 grid gap-6 lg:grid-cols-5">
            {deploymentSteps.slice(0, 3).map((step, index) => (
              <DeploymentStep key={step.title} step={step} number={index + 1} />
            ))}

            <li className="relative ml-8 rounded-2xl border border-dashed border-rose-400/40 bg-rose-400/[0.06] p-5 lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:ml-0">
              <span className="absolute -top-6 left-1/4 hidden h-6 border-l border-dashed border-rose-400/40 lg:block"></span>
              <span className="absolute -top-6 left-3/4 hidden h-6 border-l border-dashed border-rose-400/40 lg:block"></span>
              <p className="flex items-center gap-2 font-semibold text-rose-200">
                <XCircle className="h-5 w-5 text-rose-300" strokeWidth={1.75} aria-hidden="true" />
                Automatic rejection
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                If a check spots a problem, like an unmapped connection reference or a table
                that belongs to another solution, the flow rejects the deployment by itself and
                emails the developer what to fix. No approver's time is wasted.
              </p>
            </li>

            {deploymentSteps.slice(3).map((step, index) => (
              <DeploymentStep key={step.title} step={step} number={index + 4} last={index === 1} />
            ))}
          </ol>
        </section>

        {/* What I built */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Under the hood</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What I built</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The ten components behind that flow, from delegated deployment to the email that
            closes the loop.
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
            over several rounds: from listing every connection reference to restructuring the
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

        {/* Project 02: Health Check */}
        <section id="health-check" className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-16 pb-12">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-teal-300">PROJECT 02</p>
            <span className="h-px flex-1 bg-white/10"></span>
          </div>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Health Check</h3>
          <p className="mt-2 text-sm text-white/50">Power Apps · Dataverse · Proposed and built by me</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
            A Power Apps tool that automatically documents every solution in the environment. It
            shows at a glance whether a solution's flows and connections are healthy and whether
            it's deployable, then lets you drill all the way down to a single step inside a flow.
          </p>

          <div className="mt-10">
            <HealthCheckMockup />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {healthCheckFeatures.map((item) => (
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
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href={CV_URL}
                download={CV_FILENAME}
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
