import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download, Lock, Menu, X } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProfileCard from "../components/ProfileCard";
import BrandUnderline from "../components/BrandUnderline";
import OrbitRings from "../components/OrbitRings";
import PresentationPlayer from "../components/PresentationPlayer";
import { CV_FILENAME, CV_URL, GITHUB_URL, LINKEDIN_URL, PRESENTATION_URL } from "../lib/links";

import powerPlatformImg from "../assets/projects/PowerPlatform.svg";
import budgetPlannerImg from "../assets/projects/budgetplanner/thumbnail.jpg";
import gameCenterImg from "../assets/projects/gamecenter/home.jpg";
import chessTrackImg from "../assets/projects/chesstrack/home.jpg";
import cineVibeImg from "../assets/projects/cinevibe/thumbnail.jpg";
import webImg from "../assets/projects/Web.png";
import mlImg from "../assets/projects/MachineLearning.png";
import embeddedImg from "../assets/projects/Embedded.jpg";
import devopsImg from "../assets/projects/Devops.jpg";

const projects = [
  {
    title: "Power Platform Engineering",
    subtitle: "Internship",
    image: powerPlatformImg,
    badge: { label: "Featured", className: "border-teal-400/40 bg-slate-950/75 text-teal-300" },
    description:
      "My internship work at Siemens Energy: a governed DEV → PROD deployment pipeline, and Health Check, a Power Apps tool that documents and checks every solution.",
    tech: ["Power Automate", "Power Apps", "Dataverse", "Power Platform Pipelines"],
    internalPath: "/power-platform",
    linkLabel: "View Internship Work",
  },
  {
    title: "Budget Planner",
    subtitle: "Personal Project",
    image: budgetPlannerImg,
    badge: { label: "In Daily Use", className: "border-rose-400/40 bg-slate-950/75 text-rose-300" },
    description:
      "A mobile budgeting app where you just tell an AI assistant what you spent and it logs it for you. Used every day by my family.",
    tech: ["React", "TypeScript", "Supabase", "Claude API"],
    internalPath: "/budget-planner",
  },
  {
    title: "GameCenter",
    subtitle: "Personal Project",
    image: gameCenterImg,
    badge: { label: "Automated System", className: "border-violet-400/40 bg-slate-950/75 text-violet-300" },
    description:
      "A game discovery platform with a self-growing library, pulling fresh titles from RAWG and live pricing from Steam every day. Solo-built end to end, frontend to database.",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL", "TanStack Query"],
    internalPath: "/gamecenter",
  },
  {
    title: "ChessTrack",
    subtitle: "Semester Project",
    image: chessTrackImg,
    badge: { label: "Team Project", className: "border-amber-400/40 bg-slate-950/75 text-amber-300" },
    description:
      "A chess performance assistant pairing Lichess/Chess.com activity with IoT sensors and an ML tilt predictor. I built the frontend as part of a cross-functional team.",
    tech: ["React", "Vite", "React Router", "Lichess OAuth"],
    internalPath: "/chesstrack",
  },
  {
    title: "CineVibe",
    subtitle: "Semester Project",
    image: cineVibeImg,
    badge: { label: "Distributed System", className: "border-fuchsia-400/40 bg-slate-950/75 text-fuchsia-300" },
    description:
      "A cinema booking system: pick a showtime, choose seats on a live seat map, add snacks and pay with loyalty points. Built as a team across C# and Java.",
    tech: ["Blazor", "ASP.NET Core", "Spring Boot", "PostgreSQL"],
    internalPath: "/cinevibe",
  },
];

const coursework = [
  {
    title: "Web Development",
    image: webImg,
    description: "JavaScript fundamentals, DOM manipulation and core frontend concepts.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ildomota/web2-exercises",
  },
  {
    title: "Regression Models",
    image: mlImg,
    description: "Comparing Ridge, Lasso and Elastic Net regression on standardized data in Jupyter.",
    tech: ["Python", "Scikit-learn"],
    github: "https://github.com/ildomota/Exercises",
  },
  {
    title: "Embedded Controllers",
    image: embeddedImg,
    description: "C on a microcontroller: LEDs driven by button input, working directly with registers.",
    tech: ["C", "AVR", "PlatformIO"],
    github: "https://github.com/ildomota/esw-exercises",
  },
  {
    title: "Containerized Spring Boot",
    image: devopsImg,
    description: "A Spring Boot app packaged with Docker and deployed to a local Kubernetes cluster.",
    tech: ["Java", "Docker", "Kubernetes"],
    github: "https://github.com/ildomota/devops-exercises",
  },
];

const internshipHighlights = [
  "Sole developer of the team's central deployment pipeline, so solutions reach production without anyone needing personal admin rights.",
  "Proposed and built Health Check, a Power Apps tool that documents every solution and flow, and flags flow errors, misused connections and missing error handling.",
  "Researched solution-architecture best practices, presented my recommendation to the lead developers and implemented it.",
];

const internshipTags = ["Power Automate", "Power Apps", "Dataverse", "Pipelines & ALM"];

const skillGroups = [
  { label: "Power Platform", items: ["Power Automate", "Power Apps", "Dataverse", "Power Platform Pipelines"] },
  { label: "Web", items: ["React", "TypeScript", "JavaScript", "Node.js", "Prisma", "Blazor", "HTML/CSS"] },
  { label: "Languages & Data", items: ["Java", "C#", "Python", "C", "SQL", "PostgreSQL", "Supabase"] },
  { label: "DevOps & Tools", items: ["Azure DevOps", "Docker", "Kubernetes", "Git & GitHub", "Vercel", "PlatformIO"] },
];

// Teaser for an upcoming project: no page, no screenshots, just a hint.
function TeaserCard() {
  return (
    <article className="relative flex flex-col rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.07]">
      <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-950/75 px-3 py-1 text-xs font-medium text-sky-300 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300"></span>
        Coming Soon
      </span>
      <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-slate-950">
        <div className="absolute -left-8 -top-10 h-36 w-36 animate-pulse rounded-full bg-sky-500/40 blur-2xl"></div>
        <div className="absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-emerald-400/25 blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="relative flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
            <Lock className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <p className="text-xs font-semibold tracking-[0.3em] text-white/60">UNDER WRAPS</p>
        </div>
      </div>
      <p className="text-sm text-white/50">Personal Project · SaaS · In Development</p>
      <h4 className="mt-3 text-xl font-semibold">My First SaaS</h4>
      <p className="mt-4 leading-7 text-white/70">
        A product I'm building from scratch, and my first SaaS. The details are under wraps for
        now, but it's on its way.
      </p>
      <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
        {["w-16", "w-24", "w-20"].map((width) => (
          <span key={width} className={`h-6 ${width} animate-pulse rounded-full border border-white/10 bg-white/10`}></span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-white/20 px-4 py-2 text-sm font-medium text-white/50">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Stay Tuned
        </span>
      </div>
    </article>
  );
}

const navItems = [
  { id: "about", label: "About" },
  { id: "presentation", label: "Presentation" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Header nav for the home page: inline links on wide screens, a menu button on phones.
function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
        {navItems.slice(0, -1).map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="nav-link">
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full border border-brand/50 px-4 py-1.5 font-medium text-brand-soft transition hover:border-brand hover:bg-brand hover:text-slate-950"
        >
          Contact
        </a>
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-brand/60 md:hidden"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950 px-6 py-3 shadow-2xl shadow-black/50 md:hidden"
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-white/5 py-3.5 text-base text-white/85 last:border-b-0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/20"></span>
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]"></div>
      <SiteHeader>
        <HomeNav />
      </SiteHeader>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 pb-10 md:grid-cols-[1.2fr_0.8fr] md:pt-28">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
              Software / Automation / DevOps / Web Development
            </p>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Software Engineering Student
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                With a business background, I'm currently building enterprise automation on Microsoft Power Platform as an intern at Siemens Energy.
                This portfolio collects the work I'm proudest of, from internship tooling to apps
                I've built on my own.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-brand-soft"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            <div id="about" className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-brand">About Me</p>
              <h3 className="mt-4 text-2xl font-semibold">Passionate about real systems</h3>
              <p className="mt-4 leading-8 text-white/70">
                I enjoy working through technical problems step by step and learning by building.
                Before software I studied Marketing Management, so I care about the people who'll
                actually use what I make. Outside my studies I build my own apps, some of which
                my family now uses every day.
              </p>
            </div>
          </div>

          <ProfileCard />
        </section>

        {/* Presentation */}
        <section id="presentation" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand">Presentation</p>
              <h3 className="mt-3 text-3xl font-semibold">Play Interactive Presentation</h3>
            </div>
            <a
              href={PRESENTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the presentation in a new tab"
              title="Open in a new tab"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <PresentationPlayer />
        </section>

        {/* Current internship */}
        <section id="internship" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-teal-400/[0.07] via-white/5 to-blue-500/[0.07] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  Current Internship
                </p>
                <h3 className="mt-4 text-2xl font-semibold md:text-3xl">Software Engineering Intern · Siemens Energy</h3>
                <p className="mt-2 text-sm text-white/50">Power Platform · Aug 2026 – Jan 2027</p>
                <p className="mt-5 leading-8 text-white/70">
                  I develop Power Automate flows that automate business processes and build Power Apps
                  for my team, with a strong focus on governance, security and documentation.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {internshipTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/power-platform"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-brand/50 px-4 py-2 text-sm font-medium text-brand-soft transition hover:border-brand hover:bg-brand hover:text-slate-950"
                >
                  See what I'm working on <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <ul className="space-y-5 self-center">
                {internshipHighlights.map((line) => (
                  <li key={line} className="flex gap-3 leading-7 text-white/75">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"></span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand">Projects</p>
            <h3 className="mt-3 text-3xl font-semibold">Selected work</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.07]"
              >
                {project.badge && (
                  <span
                    className={`absolute right-5 top-5 z-10 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${project.badge.className}`}
                  >
                    {project.badge.label}
                  </span>
                )}
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover transition duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-sm text-white/50">{project.subtitle}</p>
                <h4 className="mt-3 text-xl font-semibold">{project.title}</h4>
                <p className="mt-4 leading-7 text-white/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    to={project.internalPath}
                    className="inline-block rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    {project.linkLabel || "View Project"}
                  </Link>
                </div>
              </article>
            ))}
            <TeaserCard />
          </div>

          <div className="mt-16">
            <p className="text-sm uppercase tracking-[0.2em] text-brand">Coursework</p>
            <h3 className="mt-3 text-2xl font-semibold">Exercises from my degree</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coursework.map((item) => (
                <a
                  key={item.title}
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt=""
                      className="h-32 w-full object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="mt-4 flex items-center justify-between gap-2 font-semibold">
                    <span>
                      {item.title}
                      <span className="sr-only"> (opens on GitHub)</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-white"
                      aria-hidden="true"
                    />
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                  <p className="mt-auto pt-4 text-xs text-white/45">{item.tech.join(" · ")}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-brand/15 blur-3xl"></div>
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-brand">Skills</p>
              <h3 className="mt-3 text-3xl font-semibold">
                Tools and{" "}
                <span className="relative inline-block">
                  technologies
                  <BrandUnderline />
                </span>
              </h3>
              <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/20"></span>
                      {group.label}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-brand-blue/70 hover:bg-brand-blue/10 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand/15 blur-3xl"></div>
            <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-70 md:block">
              <OrbitRings />
            </div>
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-brand">Contact</p>
              <h3 className="mt-3 text-3xl font-semibold">
                Let’s{" "}
                <span className="relative inline-block">
                  connect
                  <BrandUnderline />
                </span>
              </h3>
              <p className="mt-6 max-w-2xl leading-8 text-white/70">
                Want to talk about a project, an opportunity, or anything you've seen here? Reach
                out on LinkedIn, browse my code on GitHub, or download my CV.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-brand-soft"
                >
                  LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand/60 hover:bg-white/5"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-brand/60 hover:bg-white/5"
                >
                  Download CV <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
