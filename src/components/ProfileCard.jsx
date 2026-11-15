import profile from "../assets/profile.jpg.jfif";

const skills = [
  "C",
  "Python",
  "Java",
  "C#",
  "Docker",
  "JavaScript",
  "Power Platform",
  "Power Automate",
  "Power Apps",
  "Dataverse",
];

const focus = ["Process automation", "Governance and security", "Software development"];

// Compact profile card. The rings and the underline echo the presentation deck.
export default function ProfileCard() {
  return (
    <div className="relative self-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"></div>

      <div className="relative mx-auto aspect-square w-full max-w-92">
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
        <img
          src={profile}
          alt="Ildo Mota"
          className="absolute inset-[9.7%] h-[80.6%] w-[80.6%] rounded-full object-cover shadow-lg shadow-black/50 ring-4 ring-white/5"
        />
      </div>

      <div className="relative mt-6">
        <h3 className="relative inline-block text-3xl font-bold tracking-tight">
          Ildo Mota
          <svg
            viewBox="0 0 300 30"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-2.5 w-full overflow-visible"
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
        </h3>
        <p className="mt-5 leading-7 text-white/80">
          Software Engineering Student
          <br />
          Power Platform Developer
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Focus</p>
          <ul className="mt-3 space-y-2">
            {focus.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/20"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
