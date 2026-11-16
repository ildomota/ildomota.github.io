import { Link } from "react-router-dom";
import {
  Sparkles,
  LogIn,
  Moon,
  Search,
  Gauge,
  Component,
  Zap,
  Plug,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import BrandUnderline from "../components/BrandUnderline";
import IconTile from "../components/IconTile";
import { CV_FILENAME, CV_URL, LINKEDIN_URL } from "../lib/links";

import homeShot from "../assets/projects/chesstrack/home.jpg";
import loginShot from "../assets/projects/chesstrack/login.jpg";
import tiltShot from "../assets/projects/chesstrack/tilt.jpg";
import preferencesShot from "../assets/projects/chesstrack/preferences.jpg";

const stats = [
  { value: "8", label: "Features & refactors shipped" },
  { value: "7", label: "Pages & routes in the app" },
  { value: "29", label: "Frontend commits merged" },
  { value: "1", label: "CRA → Vite migration led" },
];

const heroTags = [
  "React",
  "React Router",
  "Vite",
  "Bootstrap",
  "Sass",
  "Lichess OAuth",
  "Vitest",
];

const features = [
  {
    title: "Landing experience",
    icon: Sparkles,
    body: "Built the landing page's rotating hero headline and imagery, and fixed a production build warning on the animation.",
  },
  {
    title: "Lichess OAuth login",
    icon: LogIn,
    body: "Shipped the full login flow: the login page UI, the OAuth redirect and callback handling, and an auto-redirect home once a player is authenticated.",
  },
  {
    title: "Readiness check-in & sessions",
    icon: Moon,
    body: "Before a monitoring session starts, players log sleep and water intake for a readiness check. The frontend starts and ends the session, with a page-unload beacon so a closed tab still ends it cleanly.",
  },
  {
    title: "Chess.com & Lichess lookup",
    icon: Search,
    body: "Search a player on either platform and surface their public ratings and performance from inside the app.",
  },
  {
    title: "IoT dashboard (co-built)",
    icon: Gauge,
    body: "Live temperature and light readings from the team's sensors, auto-refreshing every 10 seconds. Built alongside two teammates.",
  },
  {
    title: "Shared Navbar component",
    icon: Component,
    body: "Refactored page-by-page navigation markup into one reusable component used across every page in the app.",
  },
  {
    title: "CRA → Vite migration",
    icon: Zap,
    body: "Replaced Create React App with Vite across the frontend, updating the build config, dev/build scripts, the CI pipeline and the Docker build to match.",
  },
  {
    title: "Bootstrap & sensor wiring",
    icon: Plug,
    body: "Brought in Bootstrap for the dashboard's layout and wired a teammate's light-sensor component into the live pages.",
  },
];

const gallery = [
  { src: homeShot, caption: "Landing page: animated hero, Lichess sign-in entry point" },
  { src: loginShot, caption: "Lichess OAuth login" },
  { src: tiltShot, caption: "ML tilt predictor, built by a teammate on the ML workstream" },
  { src: preferencesShot, caption: "Player preferences, built by a teammate on the frontend team" },
];

const stackTags = ["Node.js", "Python / FastAPI", "gRPC", "Docker", "Caddy", "C (IoT sensors)"];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "React Router", "Vite", "Bootstrap", "Sass", "Vitest"],
  },
  {
    category: "Integration",
    items: ["Lichess OAuth", "REST APIs", "Browser Lifecycle APIs"],
  },
  {
    category: "Collaboration",
    items: ["Git / GitHub PR Workflow", "Code Review", "Cross-functional Teamwork"],
  },
  {
    category: "Tooling",
    items: ["ESLint", "GitHub Actions CI", "Docker"],
  },
];

export default function ChessTrack() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[160px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[160px]"></div>

      <SiteHeader>
        <Link
          to="/"
          className="nav-link text-sm font-medium text-white/75"
        >
          ← Back to portfolio
        </Link>
      </SiteHeader>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
            SEP4 Team Project · VIA University College (2026)
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            ChessTrack
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Built, deployed, and demoed with a cross-functional team
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            ChessTrack is a chess performance assistant built for SEP4 (VIA University College's
            fourth-semester team project) by a cross-functional team spanning frontend, IoT and
            machine learning. It connects to a player's Lichess or Chess.com account, pairs that
            activity with live environment sensors, and adds a sleep and hydration check-in before
            a session starts. I was the frontend's primary owner for the player-facing
            experience: the landing page, Lichess OAuth login, and chess-platform lookup. I also
            led the team's migration from Create React App to Vite.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <p className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>My contribution</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What I built</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The frontend's player-facing flows, owned end to end, plus a couple of features I
            co-built alongside teammates on the IoT side.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <IconTile icon={item.icon} />
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-base leading-7 text-white/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Inside the product</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What the team shipped</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            ChessTrack shipped with contributions across frontend, IoT and machine learning. These
            are the pages as the team delivered them, some built by me and others by teammates on
            the ML and IoT workstreams, captioned below.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <figure
                key={item.caption}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="aspect-video w-full object-cover object-top"
                />
                <figcaption className="p-4 text-sm text-white/60">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Behind the frontend */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Behind the frontend</SectionLabel>
            <h3 className="mt-3 text-2xl font-semibold">The rest of the system</h3>
            <p className="mt-4 max-w-3xl leading-7 text-white/70">
              The frontend talked to a Node.js API gateway, a Python/FastAPI machine-learning
              service for the tilt predictor, gRPC services for Lichess and IoT data, and
              C-based sensor clients, all deployed together with Docker Compose and Caddy on a
              shared VPS. That side of the system was built by teammates on the IoT and ML
              workstreams.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stackTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl"></div>
            <SectionLabel>Skills demonstrated</SectionLabel>
            <h3 className="mt-3 text-3xl font-semibold">
              Tools and{" "}
              <span className="relative inline-block">
                strengths
                <BrandUnderline />
              </span>
            </h3>
            <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/20"></span>
                    {group.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-brand/60 hover:bg-brand/10 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center md:p-10">
            <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-72 w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"></div>
            <h3 className="text-2xl font-semibold">
              Want the{" "}
              <span className="relative inline-block">
                full picture
                <BrandUnderline />
              </span>
              ?
            </h3>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
              This page covers my frontend work on ChessTrack, a SEP4 team project. Head back to
              the portfolio for the rest of my projects, or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="rounded-2xl bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-brand-soft"
              >
                ← Back to portfolio
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand/60 hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href={CV_URL}
                download={CV_FILENAME}
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand/60 hover:bg-white/5"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
