import { Link } from "react-router-dom";
import {
  Film,
  Armchair,
  Ticket,
  Popcorn,
  Coins,
  Star,
  UserCog,
  FlaskConical,
  Monitor,
  Server,
  ShieldCheck,
  Database,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionLabel from "../components/SectionLabel";
import IconTile from "../components/IconTile";
import { CV_FILENAME, CV_URL, LINKEDIN_URL } from "../lib/links";

import moviesShot from "../assets/projects/cinevibe/movies.jpg";
import detailsShot from "../assets/projects/cinevibe/details.jpg";
import seatsShot from "../assets/projects/cinevibe/seats.jpg";
import snacksShot from "../assets/projects/cinevibe/snacks.jpg";
import bookingsShot from "../assets/projects/cinevibe/mybookings.jpg";

const heroTags = [
  "Blazor",
  "C#",
  "ASP.NET Core",
  "Entity Framework Core",
  "Java",
  "Spring Boot",
  "PostgreSQL",
];

const client = {
  label: "Client",
  title: "Blazor WebAssembly",
  icon: Monitor,
  body: "The whole interface, running in the browser: film pages, the seat map, snack checkout, accounts and the admin area.",
};

const services = [
  {
    label: "Core API · C#",
    title: "ASP.NET Core Web API",
    icon: Server,
    body: "Films, showtimes and seats, bookings, snacks, reviews and loyalty points, with Entity Framework Core.",
  },
  {
    label: "Accounts service · Java",
    title: "Spring Boot",
    icon: ShieldCheck,
    body: "Customer and admin accounts, secured with Spring Security and BCrypt-hashed passwords.",
  },
];

const database = {
  label: "Data",
  title: "PostgreSQL",
  icon: Database,
  body: "One shared database: EF Core migrations on the C# side, JPA on the Java side.",
};

const features = [
  {
    title: "Browse what's on",
    icon: Film,
    body: "A poster grid of every film on show. Each film has its own page with a full backdrop, genre, release date and an average rating from customer reviews.",
  },
  {
    title: "Live seat map",
    icon: Armchair,
    body: "Pick a date and showtime, then choose seats on a 7 × 30 seat map. Seats already booked for that exact showing are loaded from the database and blocked.",
  },
  {
    title: "Several seats in one booking",
    icon: Ticket,
    body: "Confirm multiple seats in one go. My Bookings splits active and expired bookings, and past showings are marked expired automatically.",
  },
  {
    title: "Snacks & drinks",
    icon: Popcorn,
    body: "Add snacks and drinks to a booking, pick quantities and watch the order total update as you go.",
  },
  {
    title: "Loyalty points",
    icon: Coins,
    body: "Every booking earns loyalty points, and points can be spent at snack checkout as a discount: 5 points take €1 off.",
  },
  {
    title: "Reviews & ratings",
    icon: Star,
    body: "Logged-in customers rate a film from 1 to 10 and write a review, which feeds the film's average rating.",
  },
  {
    title: "Admin area",
    icon: UserCog,
    body: "A separate admin login unlocks pages to manage users, moderate reviews and see every snack order.",
  },
  {
    title: "Tested accounts service",
    icon: FlaskConical,
    body: "The Spring Boot service is covered by 16 unit tests across its controllers, services, repositories and models, using JUnit and Mockito.",
  },
];

const gallery = [
  { src: moviesShot, caption: "Movies: every film on show, straight from the database" },
  { src: detailsShot, caption: "Film page: backdrop, details and the average review rating" },
  { src: seatsShot, caption: "Seat map: taken seats in red, your picks in green", wide: true },
  { src: snacksShot, caption: "Snacks & drinks: added to an existing booking" },
  { src: bookingsShot, caption: "My Bookings: active and expired bookings" },
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["Blazor WebAssembly", "Razor Components", "C#", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core Web API", "Entity Framework Core", "Spring Boot", "Spring Security"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "EF Core Migrations", "JPA / Hibernate"],
  },
  {
    category: "Quality & Teamwork",
    items: ["JUnit", "Mockito", "Swagger", "Sprint-based Teamwork"],
  },
];

function TierCard({ tier }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <IconTile icon={tier.icon} />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fuchsia-300/80">
          {tier.label}
        </p>
        <h4 className="mt-1 font-semibold text-white">{tier.title}</h4>
        <p className="mt-2 text-sm leading-6 text-white/65">{tier.body}</p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center text-white/30" aria-hidden="true">
      <ChevronRight className="hidden h-5 w-5 lg:block" />
      <ChevronDown className="h-5 w-5 lg:hidden" />
    </div>
  );
}

export default function CineVibe() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white">
      <div className="pointer-events-none absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[160px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[160px]"></div>

      <SiteHeader>
        <Link
          to="/"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </SiteHeader>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
            SEP3 Team Project · VIA University College (2024)
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            CineVibe
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Built end to end as a team
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            CineVibe is a cinema booking system built for SEP3, VIA University College's
            third-semester team project. Customers browse the films on show, choose a showtime and
            seats on a live seat map, add snacks, and spend loyalty points for a discount, while
            admins manage users, reviews and orders. Behind it sit two backend services in two
            languages, C# and Java, sharing one PostgreSQL database.
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
        </section>

        {/* Architecture */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>Architecture</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">How it fits together</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            A three-tier system across two languages: one client, two backend services with their
            own responsibilities, and a shared database underneath.
          </p>

          <div className="mt-8 grid items-center gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <TierCard tier={client} />
            <FlowArrow />
            <div className="grid gap-4">
              {services.map((tier) => (
                <TierCard key={tier.title} tier={tier} />
              ))}
            </div>
            <FlowArrow />
            <TierCard tier={database} />
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <SectionLabel>The product</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">What it does</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The full journey of a cinema visit, from picking a film to the snacks, plus the tools
            staff need behind the scenes.
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
          <SectionLabel>Inside the app</SectionLabel>
          <h3 className="mt-3 text-3xl font-semibold">Screenshots of the running app</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Captured from the app running locally against a test database, with example films,
            snacks, reviews and bookings added for the screenshots.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <figure
                key={item.caption}
                className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
                  item.wide ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className={item.wide ? "w-full bg-white" : "aspect-video w-full object-cover object-top"}
                />
                <figcaption className="p-4 text-sm text-white/60">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionLabel>Skills demonstrated</SectionLabel>
            <h3 className="mt-3 text-3xl font-semibold">Tools and technologies</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-white/50">{group.category}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center md:p-10">
            <h3 className="text-2xl font-semibold">Want the full picture?</h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-white/70">
              This page covers CineVibe, a SEP3 team project. Head back to the portfolio for the
              rest of my projects, or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                ← Back to portfolio
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href={CV_URL}
                download={CV_FILENAME}
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
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
