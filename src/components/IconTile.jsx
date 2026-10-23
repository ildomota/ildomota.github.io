export default function IconTile({ icon }) {
  const Icon = icon;
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
