// Hand-drawn orange underline from the presentation deck.
// Place it inside a `relative inline-block` element; it stretches to that element's width.
export default function BrandUnderline({ className = "-bottom-2 h-2.5" }) {
  return (
    <svg
      viewBox="0 0 300 30"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 21 C80 5 170 5 296 15"
        fill="none"
        stroke="var(--color-brand-soft)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
