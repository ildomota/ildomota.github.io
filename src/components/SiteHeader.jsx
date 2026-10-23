import { Link } from "react-router-dom";

// Shared top bar for every page. Pass page-specific nav/links as children.
export default function SiteHeader({ children }) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="group">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Portfolio</p>
          <h1 className="text-xl font-semibold transition group-hover:text-white/80">Ildo Mota</h1>
        </Link>
        {children}
      </div>
    </header>
  );
}
