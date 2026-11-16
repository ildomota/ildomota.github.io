import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BrandUnderline from "./BrandUnderline";

// Shared top bar for every page. Pass page-specific nav/links as children.
// Give those links the `nav-link` class to get the orange hover underline.
export default function SiteHeader({ children }) {
  const progress = useRef(null);

  // The orange line pinned to the top of the window fills as the page is scrolled.
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header className="relative z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="group">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand">Portfolio</p>
              <h1 className="relative inline-block text-xl font-semibold">
                Ildo Mota
                <BrandUnderline className="-bottom-1.5 h-1.5 opacity-80 transition duration-300 group-hover:opacity-100" />
              </h1>
            </div>
          </Link>
          {children}
        </div>
      </header>
      <div
        ref={progress}
        className="pointer-events-none fixed inset-x-0 top-0 z-30 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-soft"
        style={{ transform: "scaleX(0)" }}
      ></div>
    </>
  );
}
