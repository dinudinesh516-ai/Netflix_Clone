"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Play, Plus, ThumbsUp } from "lucide-react";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Title } from "@/lib/types";
import { useUi } from "@/store/ui";
import { useWatchlist } from "@/store/watchlist";

function roundButton(className = "") {
  return `grid h-9 w-9 place-items-center rounded-full border border-white/50 bg-transparent text-white hover:border-white ${className}`;
}

export function MediaCardHover({
  title,
  anchorRef,
  onClose,
}: {
  title: Title;
  anchorRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );
  const openTitle = useUi((state) => state.openTitle);
  const liked = useUi((state) => state.liked.includes(title.id));
  const toggleLike = useUi((state) => state.toggleLike);
  const inList = useWatchlist((state) => state.ids.includes(title.id));
  const toggleList = useWatchlist((state) => state.toggle);

  useLayoutEffect(() => {
    const measure = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        onClose();
        return;
      }
      const width = rect.width * 1.15;
      const left = Math.min(
        Math.max(12, rect.left + rect.width / 2 - width / 2),
        window.innerWidth - width - 12,
      );
      setBox({ top: Math.max(72, rect.top), left, width });
    };

    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [anchorRef, onClose]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const hit = (rect?: DOMRect) =>
        !!rect &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      const overCard = hit(anchorRef.current?.getBoundingClientRect());
      const overPanel = hit(panelRef.current?.getBoundingClientRect());
      if (!overCard && !overPanel) onClose();
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [anchorRef, onClose]);

  if (!box) return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed z-40 overflow-hidden rounded-md bg-[#181818] shadow-[0_16px_40px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
      style={{ top: box.top, left: box.left, width: box.width }}
    >
      <div className="relative aspect-video">
        <Image
          src={title.image}
          alt=""
          fill
          sizes="360px"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-center gap-2">
          <Link
            href={`/watch/${title.id}`}
            aria-label={`Play ${title.title}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-black"
          >
            <Play className="h-4 w-4 fill-current" />
          </Link>
          <button
            type="button"
            aria-label={inList ? "Remove from list" : "Add to list"}
            aria-pressed={inList}
            onClick={() => toggleList(title.id)}
            className={roundButton(inList ? "border-white bg-white/10" : "")}
          >
            {inList ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label={liked ? "Unlike" : "Like"}
            aria-pressed={liked}
            onClick={() => toggleLike(title.id)}
            className={roundButton(liked ? "border-white bg-white/10" : "")}
          >
            <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          </button>
          <button
            type="button"
            aria-label={`More info about ${title.title}`}
            onClick={() => {
              openTitle(title.id);
              onClose();
            }}
            className={`${roundButton()} ml-auto`}
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm font-semibold">{title.title}</p>
        <p className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-match">{title.match}% Match</span>
          <span className="border border-white/40 px-1 text-[10px]">{title.maturity}</span>
          <span className="text-white/70">{title.genres.join(" · ")}</span>
        </p>
      </div>
    </div>,
    document.body,
  );
}
