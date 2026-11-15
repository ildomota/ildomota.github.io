import { useState } from "react";
import { Play } from "lucide-react";
import { PRESENTATION_URL } from "../lib/links";
import poster from "../assets/presentation-teaser.jpg";

// Plays the presentation deck inside the page. The deck only loads after the
// first click, so the home page stays light until someone asks for it.
export default function PresentationPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050a16] shadow-2xl shadow-black/40">
      {/* Reserves a 16:9 stage plus room for the bar below it (the deck's own controls once playing). */}
      <div className="aspect-video"></div>
      <div className={playing ? "h-36 lg:h-16" : "h-16"}></div>

      {playing ? (
        <iframe
          src={PRESENTATION_URL}
          title="Ildo Mota: interactive presentation"
          allow="fullscreen"
          allowFullScreen
          onLoad={(event) => event.currentTarget.focus()}
          className="absolute inset-0 h-full w-full"
        ></iframe>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex cursor-pointer flex-col text-left"
        >
          <span className="relative block overflow-hidden">
            <img
              src={poster}
              alt="First scene of the presentation: Hi, I'm Ildo."
              className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-slate-950/25 transition duration-300 group-hover:bg-slate-950/5"></span>
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-slate-950 shadow-xl shadow-black/50 ring-8 ring-brand/25 transition duration-300 group-hover:scale-110 md:h-24 md:w-24">
              <Play className="ml-1 h-8 w-8 md:h-10 md:w-10" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
          <span className="flex h-16 items-center justify-between gap-4 px-5 text-sm text-white/60 md:px-7">
            <span className="font-medium text-white/85">Click to play</span>
            <span>
              14 scenes
              <span className="hidden sm:inline"> · click or use the arrow keys · full screen available</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
