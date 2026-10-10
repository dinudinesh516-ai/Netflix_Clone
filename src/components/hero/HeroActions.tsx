"use client";

import Link from "next/link";
import { Check, Info, Play, Plus, Volume2, VolumeX } from "lucide-react";
import type { Title } from "@/lib/types";
import { useUi } from "@/store/ui";
import { useWatchlist } from "@/store/watchlist";

export function HeroActions({
  title,
  muted,
  onToggleMute,
}: {
  title: Title;
  muted: boolean;
  onToggleMute: () => void;
}) {
  const openTitle = useUi((state) => state.openTitle);
  const inList = useWatchlist((state) => state.ids.includes(title.id));
  const toggle = useWatchlist((state) => state.toggle);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/watch/${title.id}`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#f40612]"
        >
          <Play className="h-5 w-5 fill-current" />
          Play
        </Link>
        <button
          type="button"
          onClick={() => openTitle(title.id)}
          className="inline-flex items-center gap-2 rounded-md bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/30"
        >
          <Info className="h-5 w-5" />
          More Info
        </button>
        <button
          type="button"
          aria-label={inList ? "Remove from list" : "Add to list"}
          aria-pressed={inList}
          onClick={() => toggle(title.id)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/30 text-white hover:border-white"
        >
          {inList ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={muted ? "Unmute" : "Mute"}
          aria-pressed={muted}
          onClick={onToggleMute}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:border-white"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        <span className="border border-white/50 px-2 py-1 text-xs tracking-wide text-white/90">
          {title.maturity}
        </span>
      </div>
    </>
  );
}
