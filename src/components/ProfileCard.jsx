import profile from "../assets/profile.jpg.jfif";
import BrandUnderline from "./BrandUnderline";
import OrbitRings from "./OrbitRings";

const skills = [
  "C",
  "Python",
  "Java",
  "C#",
  "Docker",
  "JavaScript",
  "Power Automate",
  "Power Apps",
  "Dataverse",
  "Power Platform Pipelines",
];

const focus = ["Process automation", "Governance and security", "Software development"];

// Compact profile card. The rings and the underline echo the presentation deck.
export default function ProfileCard() {
  return (
    <div className="relative self-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"></div>

      <div className="relative mx-auto aspect-square w-full max-w-92">
        <OrbitRings />
        <img
          src={profile}
          alt="Ildo Mota"
          className="absolute inset-[9.7%] h-[80.6%] w-[80.6%] rounded-full object-cover shadow-lg shadow-black/50 ring-4 ring-white/5"
        />
      </div>

      <div className="relative mt-6">
        <h3 className="relative inline-block text-3xl font-bold tracking-tight">
          Ildo Mota
          <BrandUnderline />
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
