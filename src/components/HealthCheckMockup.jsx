import { Stethoscope } from "lucide-react";

// A recreation of the Health Check app's drill-down: solutions → the flows in
// one solution → the documented steps of one flow. Every solution, flow and
// step below is placeholder data invented for this page.
const tones = {
  ok: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  warn: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  fail: "border-rose-400/30 bg-rose-400/10 text-rose-300",
};

const solutions = [
  { name: "Expense Approvals", tone: "ok", status: "Healthy" },
  { name: "Asset Tracker", tone: "warn", status: "2 warnings", selected: true },
  { name: "Onboarding Requests", tone: "fail", status: "Not deployable" },
  { name: "Room Booking", tone: "ok", status: "Healthy" },
  { name: "Supplier Portal", tone: "ok", status: "Healthy" },
];

const tabs = [
  { label: "Components", count: 14 },
  { label: "Flows", count: 4, active: true },
  { label: "Connections", count: 3 },
];

const flows = [
  { name: "Notify owner on new asset", tone: "ok", status: "Healthy" },
  { name: "Sync assets to SharePoint", tone: "warn", status: "1 warning", selected: true },
  { name: "Monthly asset report", tone: "ok", status: "Healthy" },
  { name: "Archive retired assets", tone: "warn", status: "1 warning" },
];

const steps = [
  { name: "When a row is added", type: "Trigger · Dataverse", body: "Starts when a new asset is registered." },
  { name: "Get asset details", type: "Action · Dataverse", body: "Reads the asset's owner and location." },
  {
    name: "Create item",
    type: "Action · SharePoint",
    body: "Copies the asset to the team's list.",
    issue: "No error handling. If this step fails, the flow fails silently and nobody is notified.",
  },
  { name: "Send confirmation", type: "Action · Outlook", body: "Emails the owner that the sync is done." },
];

function Status({ tone, children }) {
  return (
    <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

function PaneTitle({ children }) {
  return <p className="text-xs uppercase tracking-[0.15em] text-white/40">{children}</p>;
}

function Row({ item }) {
  return (
    <li
      className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm ${
        item.selected ? "bg-white/10 text-white" : "text-white/65"
      }`}
    >
      <span className="truncate">{item.name}</span>
      <Status tone={item.tone}>{item.status}</Status>
    </li>
  );
}

export default function HealthCheckMockup() {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-xl shadow-black/30">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Stethoscope className="h-4 w-4 text-teal-300" aria-hidden="true" />
            Health Check
          </p>
          <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/45">
            Placeholder data
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1fr_1.3fr]">
          <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
            <PaneTitle>Solutions</PaneTitle>
            <ul className="mt-3 space-y-1">
              {solutions.map((item) => (
                <Row key={item.name} item={item} />
              ))}
            </ul>
          </div>

          <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-white">Asset Tracker</p>
              <Status tone="ok">Deployable</Status>
            </div>
            <div className="mt-3 flex border-b border-white/10 text-xs">
              {tabs.map((tab) => (
                <span
                  key={tab.label}
                  className={`-mb-px border-b-2 px-2.5 py-2 ${
                    tab.active ? "border-teal-300 text-white" : "border-transparent text-white/45"
                  }`}
                >
                  {tab.label} <span className="text-white/35">{tab.count}</span>
                </span>
              ))}
            </div>
            <ul className="mt-3 space-y-1">
              {flows.map((item) => (
                <Row key={item.name} item={item} />
              ))}
            </ul>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <PaneTitle>Flow documentation</PaneTitle>
                <p className="mt-1 font-semibold text-white">Sync assets to SharePoint</p>
              </div>
              <Status tone="warn">Can fail silently</Status>
            </div>
            <ol className="mt-4 space-y-2">
              {steps.map((step, index) => (
                <li
                  key={step.name}
                  className={`rounded-lg border p-3 ${
                    step.issue ? "border-amber-400/30 bg-amber-400/5" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-white/90">
                      <span className="mr-2 font-mono text-white/35">{index + 1}</span>
                      {step.name}
                    </p>
                    <p className="shrink-0 text-[11px] text-white/40">{step.type}</p>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/55">{step.body}</p>
                  {step.issue && (
                    <p className="mt-2 flex gap-2 text-xs leading-5 text-amber-200">
                      <span aria-hidden="true">⚠</span>
                      {step.issue}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs italic text-white/35">
        Recreated with placeholder data for this page. No real solutions, flows or environments
        are shown.
      </p>
    </div>
  );
}
