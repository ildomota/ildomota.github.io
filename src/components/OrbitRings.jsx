// Dotted ring with two slowly rotating arcs, echoing the presentation deck.
// Fills its parent, which should be `relative` and square.
export default function OrbitRings() {
  return (
    <svg viewBox="-130 -130 260 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <circle
        r="124"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />
      <g
        className="animate-spin [animation-duration:14s] motion-reduce:animate-none"
        style={{ transformOrigin: "0px 0px" }}
      >
        <circle
          r="108"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="170 509"
        />
      </g>
      <g
        className="animate-spin [animation-direction:reverse] [animation-duration:20s] motion-reduce:animate-none"
        style={{ transformOrigin: "0px 0px" }}
      >
        <circle
          r="108"
          fill="none"
          stroke="#5ab6f2"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="56 623"
        />
      </g>
    </svg>
  );
}
