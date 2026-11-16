import { Link } from "react-router-dom";
import {
  CalendarClock,
  TrendingUp,
  SlidersHorizontal,
  Clapperboard,
  Gamepad2,
  Database,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import BrandUnderline from "../components/BrandUnderline";
import IconTile from "../components/IconTile";
import { CV_FILENAME, CV_URL, LINKEDIN_URL } from "../lib/links";

import homeShot from "../assets/projects/gamecenter/home.jpg";
import browseShot from "../assets/projects/gamecenter/browse.jpg";
import gameDetailShot from "../assets/projects/gamecenter/gamedetail.jpg";
import mediaGalleryShot from "../assets/projects/gamecenter/media-gallery.jpg";

const stats = [
  { value: "7,000+", label: "Games in the library" },
  { value: "100", label: "New games fetched daily" },
  { value: "4", label: "Pages shipped end to end" },
  { value: "3", label: "External APIs integrated" },
];

const heroTags = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
];

const features = [
  {
    title: "Daily auto-growing library",
    icon: CalendarClock,
    body: "A scheduled GitHub Actions job pulls 100 new games from RAWG every night, plus a manual workflow with a quality gate that filters out shovelware and test entries when re-fetching recent releases.",
  },
  {
    title: "New & trending home feed",
    icon: TrendingUp,
    body: "The homepage ranks games by live player counts and release recency, so the front door changes as the data does instead of showing a fixed curated list.",
  },
  {
    title: "Powerful browse & filtering",
    icon: SlidersHorizontal,
    body: "Filter by genre and platform, sort by rating, release date or relevance, and switch between grid and list views across a library of thousands of games.",
  },
  {
    title: "Rich game detail pages",
    icon: Clapperboard,
    body: "Metacritic scores, a player-rating breakdown, platform availability, official storefront links and tags, plus a media gallery with screenshots and trailers streamed via hls.js.",
  },
  {
    title: "Live Steam integration",
    icon: Gamepad2,
    body: "Real-time player counts, patch notes and pricing pulled directly from the Steam Store and Steam Web APIs, layered on top of the RAWG catalog data.",
  },
  {
    title: "Full-stack data pipeline",
    icon: Database,
    body: "Designed the Postgres schema in Prisma, built the Express API, and wrote the ingestion scripts, including migrating the backend to Prisma 7's new driver-adapter model.",
  },
];

const engineeringNotes = [
  "Adopted Prisma 7 early, which meant migrating off the old DATABASE_URL-in-env pattern to its new prisma.config.ts and driver-adapter model (@prisma/adapter-pg) ahead of most tutorials.",
  "Added a quality gate to the fetch pipeline. RAWG's catalog includes a lot of shovelware and test entries, so recent-release fetches now filter by a minimum \"added\" (wishlist) count.",
  "Went through several full visual redesigns (a RAWG-inspired detail layout, a navy \"New and trending\" home, a sidebar restyle) rather than settling for the first pass.",
];

const gallery = [
  { src: homeShot, caption: "Home: new & trending, ranked by player counts and release date" },
  { src: browseShot, caption: "Browse: filter by genre and platform, sort by rating" },
  { src: gameDetailShot, caption: "Game detail: Metacritic score and player rating breakdown" },
  { src: mediaGalleryShot, caption: "Media gallery and full game info, sourced from RAWG and Steam" },
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "React Router", "TanStack Query", "hls.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma ORM", "PostgreSQL (Supabase)"],
  },
  {
    category: "Integration",
    items: ["RAWG API", "Steam Store API", "Steam Web API"],
  },
  {
    category: "Automation & DevOps",
    items: ["GitHub Actions", "Scheduled Cron Jobs", "CI Data Pipelines"],
  },
];

export default function GameCenter() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[160px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[160px]"></div>

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
            Personal Project · Solo-Built (2026)
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            GameCenter
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Built solo, deployed, and growing itself every day
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            GameCenter is a game discovery platform I designed, built and deployed entirely on my
            own. It pulls from RAWG and Steam to maintain a library of thousands of games,
            refreshed automatically every night by a scheduled GitHub Actions job, with live Steam
            pricing and player counts layered on top. The whole stack is mine end to end: schema,
            API, and a full React frontend with search, filtering and rich game detail pages.
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
                <p className="bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Solo project</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What I built</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The database schema, the API, the data pipeline and the frontend are all my own
            work, built from the ground up.
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

        {/* Engineering notes */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Engineering notes</SectionLabel>
            <h3 className="mt-3 text-2xl font-semibold">A few things worth calling out</h3>
            <ul className="mt-6 space-y-4">
              {engineeringNotes.map((line) => (
                <li key={line} className="flex gap-3 leading-7 text-white/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Inside the product</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">Screenshots of the live app</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Real data from the running app: the library, its filters, and a game detail page
            pulled straight from RAWG and Steam.
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
              This page covers GameCenter, a solo personal project. Head back to the portfolio for
              the rest of my work, check out the source, or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="rounded-2xl bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-brand-soft"
              >
                ← Back to portfolio
              </Link>
              <a
                href="https://github.com/ildomota/Game-center"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand/60 hover:bg-white/5"
              >
                View in GitHub
              </a>
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
