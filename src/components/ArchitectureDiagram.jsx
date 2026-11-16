import { Fragment } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import IconTile from "./IconTile";

function TierCard({ tier, accent, stacked }) {
  return (
    <div
      className={`flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 ${stacked ? "lg:h-full lg:flex-col" : ""}`}
    >
      <IconTile icon={tier.icon} />
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${accent}`}>{tier.label}</p>
        <h4 className="mt-1 font-semibold text-white">{tier.title}</h4>
        <p className="mt-2 text-sm leading-6 text-white/65">{tier.body}</p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-white/30" aria-hidden="true">
      <ChevronRight className="hidden h-5 w-5 lg:block" />
      <ChevronDown className="h-5 w-5 lg:hidden" />
    </div>
  );
}

// "Architecture" section in the CineVibe layout: columns of cards joined by chevrons.
// `architecture` comes from lib/projectArchitectures.js. Two layouts:
//  - default: three columns (client, backend, data), cards can stack inside a column
//  - sequence: five single cards in the order things happen, icon above the text
export default function ArchitectureDiagram({ architecture }) {
  const sequence = architecture.layout === "sequence";
  const grid = sequence
    ? "lg:items-stretch lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2"
    : "items-center lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]";

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionLabel>Architecture</SectionLabel>
      <h3 className="mt-3 text-3xl font-semibold">How it fits together</h3>
      <p className="mt-4 max-w-3xl leading-8 text-white/70">{architecture.intro}</p>

      <div className={`mt-8 grid gap-4 ${grid}`}>
        {architecture.columns.map((column, index) => (
          <Fragment key={column[0].title}>
            {index > 0 && <FlowArrow />}
            <div className="grid gap-4">
              {column.map((tier) => (
                <TierCard key={tier.title} tier={tier} accent={architecture.accent} stacked={sequence} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
