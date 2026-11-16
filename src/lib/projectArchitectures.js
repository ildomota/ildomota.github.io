import {
  BrainCircuit,
  CalendarClock,
  Cloud,
  Cpu,
  Database,
  Monitor,
  Network,
  Server,
  Smartphone,
  Sparkles,
  Swords,
} from "lucide-react";

// Architecture diagrams for the project pages, in the same layout as CineVibe:
// three columns read left to right, each holding one or more stacked cards.
// `accent` is the page's own colour for the small labels.

export const gameCenterArchitecture = {
  accent: "text-violet-300/80",
  layout: "sequence",
  intro:
    "The library grows by itself. Read left to right, this is the path a game takes from RAWG to the page you browse.",
  columns: [
    [
      {
        icon: Cloud,
        label: "Source",
        title: "RAWG",
        body: "The outside catalog every game comes from: titles, ratings and screenshots.",
      },
    ],
    [
      {
        icon: CalendarClock,
        label: "GitHub Actions",
        title: "Nightly ingestion",
        body: "A scheduled job pulls 100 new games every night at 03:00 UTC.",
      },
    ],
    [
      {
        icon: Database,
        label: "Data",
        title: "PostgreSQL",
        body: "The job writes straight into the library, through Prisma.",
      },
    ],
    [
      {
        icon: Server,
        label: "API · Node.js",
        title: "Express API",
        body: "Reads the library and adds live Steam prices and player counts.",
      },
    ],
    [
      {
        icon: Monitor,
        label: "Client",
        title: "React frontend",
        body: "The trending home feed, browse and filters, and the game detail pages.",
      },
    ],
  ],
};

export const budgetPlannerArchitecture = {
  accent: "text-rose-300/80",
  intro:
    "A phone-first app with no server of its own: serverless functions in the middle, a database and an LLM behind them.",
  columns: [
    [
      {
        icon: Smartphone,
        label: "Client",
        title: "React PWA",
        body: "Installs to the home screen like a native app: chat, voice input, overview and history.",
      },
    ],
    [
      {
        icon: Server,
        label: "API · Vercel Serverless",
        title: "Serverless functions",
        body: "Sessions, expenses and categories, plus a scheduled job that creates each month's fixed costs.",
      },
      {
        icon: Sparkles,
        label: "Assistant · Vercel Edge",
        title: "Chat function",
        body: "Sends each message to the LLM, runs the tool it picks, and streams the reply back.",
      },
    ],
    [
      {
        icon: Database,
        label: "Data",
        title: "Supabase (PostgreSQL)",
        body: "Expenses, categories and the rules the assistant has learned, kept separate per account.",
      },
      {
        icon: BrainCircuit,
        label: "LLM",
        title: "Claude API",
        body: "Haiku 4.5 with tool use: it turns a plain sentence into the right tool call.",
      },
    ],
  ],
};

export const chessTrackArchitecture = {
  accent: "text-amber-300/80",
  intro:
    "One frontend, one gateway in front of everything, and three services behind it. I built the frontend; teammates built the gateway and the services.",
  columns: [
    [
      {
        icon: Monitor,
        label: "Client",
        title: "React frontend",
        body: "Landing page, Lichess login, player lookup, the readiness check-in and the live dashboard.",
      },
    ],
    [
      {
        icon: Network,
        label: "Gateway · Node.js",
        title: "API gateway",
        body: "The single entry point: every request from the frontend is routed through it.",
      },
    ],
    [
      {
        icon: Swords,
        label: "Chess data · gRPC",
        title: "Lichess service",
        body: "Fetches a player's games, ratings and activity.",
      },
      {
        icon: Cpu,
        label: "Sensors · C",
        title: "IoT service",
        body: "Collects temperature and light readings from the sensor clients.",
      },
      {
        icon: BrainCircuit,
        label: "ML · Python / FastAPI",
        title: "Tilt predictor",
        body: "Predicts when a player is likely to tilt.",
      },
    ],
  ],
};
