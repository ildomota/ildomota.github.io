// A recreation of the Teams/Outlook approval card technical owners see before
// a deployment reaches production. All names, apps and environments below are
// placeholder data invented for this page — no real deployment is shown.
export default function ApprovalCardMockup() {
  const meta = [
    { label: "Deployer", value: "Dev Team Member" },
    { label: "Target", value: "Production" },
    { label: "Notes", value: "Adds invoice retry logic" },
    { label: "Approval type", value: "Everyone must approve" },
  ];

  const standardConnections = [
    "Outlook Procurement Sender · dedicated · runs as Service Account",
    "SharePoint Supplier Documents · runs as Service Account",
    "Dataverse Core · runs as Service Account",
  ];

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-xl shadow-black/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-white/50">MyApp 1.0.0.4 → PROD</p>
            <p className="mt-1 text-lg font-semibold text-white">Deployment approval</p>
          </div>
          <span className="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
            1 connector to review
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/10 py-4 text-sm">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-white/40">{item.label}</dt>
              <dd className="mt-0.5 text-white/85">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-400/5 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-300">
            <span aria-hidden="true">⚠</span> Multiple connection references
          </p>
          <p className="mt-2 text-sm text-white/85">
            <span className="font-mono text-amber-200">(2)</span> Office 365 Outlook · runs as{" "}
            <span className="text-white/60">Service Account</span>
          </p>
          <p className="mt-1 text-sm italic text-white/50">
            Ask the deployer to use one reference. A second one only makes sense when emails must
            come from a different sender.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-white/60">
            Standard connection references (6) <span className="text-white/35">· No review needed</span>
          </p>
          <ul className="mt-2 space-y-1 text-sm text-white/45">
            {standardConnections.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="text-white/30">…</li>
          </ul>
        </div>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs leading-5 text-white/50">
          <span className="font-medium text-white/70">Also check before approving:</span> tables,
          dataflows and apps are in their designated core solutions.
        </p>
      </div>

      <p className="mt-4 text-center text-xs italic text-white/35">
        Recreated with placeholder data for this page — no real app names, people or environments
        are shown.
      </p>
    </div>
  );
}
