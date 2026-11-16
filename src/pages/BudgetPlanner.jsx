import { Link } from "react-router-dom";
import {
  MessageCircle,
  Brain,
  Mic,
  Users,
  Repeat,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import BrandUnderline from "../components/BrandUnderline";
import IconTile from "../components/IconTile";
import PhoneFrame from "../components/PhoneFrame";
import { CV_FILENAME, CV_URL, LINKEDIN_URL } from "../lib/links";

import assistantShot from "../assets/projects/budgetplanner/assistant.jpg";
import overviewShot from "../assets/projects/budgetplanner/overview.jpg";
import plannerShot from "../assets/projects/budgetplanner/planner.jpg";
import learnedShot from "../assets/projects/budgetplanner/learned.jpg";
import historyShot from "../assets/projects/budgetplanner/history.jpg";
import settingsShot from "../assets/projects/budgetplanner/settings.jpg";

const stats = [
  { value: "2 weeks", label: "From first commit to Beta V2" },
  { value: "15", label: "Screens across the app" },
  { value: "7", label: "AI tools the assistant can call" },
  { value: "8", label: "Serverless API endpoints" },
];

const heroTags = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel Serverless",
  "Supabase",
  "Claude API",
  "PWA",
];

const features = [
  {
    title: "Chat to log an expense",
    icon: MessageCircle,
    body: "Type \"Hoje gastei 62,40€ no Continente\" and the assistant logs the right amount in the right category. Built on LLM tool use, with replies streamed word by word.",
  },
  {
    title: "An assistant that learns",
    icon: Brain,
    body: "Teach it a rule once, like \"Lidl always goes to Supermercado\", and it follows it from then on. Every learned preference is listed in the app and can be removed.",
  },
  {
    title: "Voice input",
    icon: Mic,
    body: "Speech-to-text in the chat, using the browser's built-in Web Speech API, so an expense can be logged hands-free straight from the checkout queue.",
  },
  {
    title: "A private space per person",
    icon: Users,
    body: "Each family member gets their own account, PIN, data and assistant. Income and balance sit behind a second PIN, so they stay private even on a shared phone.",
  },
  {
    title: "Fixed costs on autopilot",
    icon: Repeat,
    body: "Subscriptions, insurance and other fixed costs are generated automatically every month by a scheduled Vercel cron job. No manual re-entry.",
  },
  {
    title: "Investment planner",
    icon: TrendingUp,
    body: "A compound-interest simulator with a live chart: 5 000 € plus 250 € a month at 6% grows to about 132 000 € over 20 years.",
  },
  {
    title: "History & Excel export",
    icon: FileSpreadsheet,
    body: "Search any expense by name, filter by category or period, and export the results to an Excel file in one tap.",
  },
  {
    title: "Security done properly",
    icon: ShieldCheck,
    body: "Signed, HttpOnly session cookies, hashed PINs that users can change themselves, and rate-limited logins with an automatic lockout.",
  },
];

const feedbackLoop = [
  "Used every day by members of my family, each on their own private account.",
  "Ships in versions: every release opens a short \"What's new\" sheet, so testers know exactly what changed.",
  "A feedback button in Settings opens a WhatsApp chat straight to me, and those messages decide what I build next.",
];

const gallery = [
  { src: assistantShot, caption: "The assistant turns plain language into categorized expenses" },
  { src: overviewShot, caption: "Monthly overview: spending by category at a glance" },
  { src: plannerShot, caption: "Investment planner with a compound-interest simulator" },
  { src: learnedShot, caption: "Everything the assistant has learned, editable by the user" },
  { src: historyShot, caption: "History: search, filter by period, export to Excel" },
  { src: settingsShot, caption: "Seven accent themes, PIN change and in-app feedback" },
];

const engineeringNotes = [
  "Haiku 4.5 responses are streamed token by token from a Vercel Edge function, and data is cached locally so the app opens instantly.",
  "Each account has its own API key, so AI usage is tracked per person, and a sandboxed demo mode caps messages per session to keep costs bounded.",
  "Built mobile-only on purpose: a PWA manifest and home-screen icon, iPhone safe-area insets, and touch-first layouts throughout.",
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "PWA", "Web Speech API"],
  },
  {
    category: "Backend & Data",
    items: ["Vercel Serverless & Edge", "Supabase (PostgreSQL)", "Cron Jobs"],
  },
  {
    category: "AI",
    items: ["Claude API", "Tool Use", "Streaming Responses", "Prompt Design"],
  },
  {
    category: "Security",
    items: ["Signed Session Cookies", "PIN Hashing", "Rate Limiting"],
  },
];

export default function BudgetPlanner() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-rose-500/15 blur-[160px]"></div>
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
            Personal Project · Mobile App (2026)
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Budget Planner
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            In daily use by my family and shaped by their feedback
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Budget Planner is a mobile budgeting app with a built-in AI assistant. Instead of
            filling in forms, you just tell it what you spent, in plain language or by voice, and
            it logs and categorizes the expense for you. I designed and built it end to end, it
            installs to the home screen like a native app, and it's become one of the projects I'm
            proudest of: people I care about use it every day.
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
                <p className="bg-gradient-to-r from-rose-300 via-orange-200 to-rose-300 bg-clip-text text-3xl font-bold text-transparent">
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
            Everything from the database and serverless API to the AI assistant and the
            iPhone-first interface is my own work.
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

        {/* Real users */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Built with real users</SectionLabel>
            <h3 className="mt-3 text-2xl font-semibold">A tool people actually rely on</h3>
            <ul className="mt-6 space-y-4">
              {feedbackLoop.map((line) => (
                <li key={line} className="flex gap-3 leading-7 text-white/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300"></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Inside the app</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">Screenshots from the live app</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Captured on an emulated iPhone using a test account, with the example expenses
            entered by chatting to the assistant. The interface is in European Portuguese because it was
            built for my family.
          </p>

          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.caption}>
                <PhoneFrame src={item.src} alt={item.caption} />
                <figcaption className="mx-auto mt-4 max-w-[260px] text-center text-sm leading-6 text-white/60">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Engineering notes */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Engineering notes</SectionLabel>
            <h3 className="mt-3 text-2xl font-semibold">Under the hood</h3>
            <ul className="mt-6 space-y-4">
              {engineeringNotes.map((line) => (
                <li key={line} className="flex gap-3 leading-7 text-white/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300"></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
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
              This page covers Budget Planner, a solo personal project. Head back to the portfolio
              for the rest of my work, or reach out directly.
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
