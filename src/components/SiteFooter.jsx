import { ArrowUp } from "lucide-react";

// Shared page footer. "#top" scrolls to the top of the page in every browser.
export default function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-8 pt-4 text-sm text-white/50">
      <p>
        <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-brand align-middle"></span>
        Ildo Mota · 2026
      </p>
      <a href="#top" className="inline-flex min-h-11 items-center gap-2 transition hover:text-white">
        Back to top <ArrowUp className="h-4 w-4 text-brand" aria-hidden="true" />
      </a>
    </footer>
  );
}
