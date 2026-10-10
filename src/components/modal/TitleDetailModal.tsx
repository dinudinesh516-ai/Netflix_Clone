"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Play, Plus, X } from "lucide-react";
import { useEffect } from "react";
import { getTitle } from "@/data/catalog";
import { useUi } from "@/store/ui";
import { useWatchlist } from "@/store/watchlist";

export function TitleDetailModal() {
  const activeTitleId = useUi((state) => state.activeTitleId);
  const closeTitle = useUi((state) => state.closeTitle);
  const title = activeTitleId ? getTitle(activeTitleId) : undefined;
  const inList = useWatchlist((state) =>
    title ? state.ids.includes(title.id) : false,
  );
  const toggle = useWatchlist((state) => state.toggle);

  useEffect(() => {
    if (!title) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeTitle();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [title, closeTitle]);

  return (
    <AnimatePresence>
      {title && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeTitle}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="title-detail-heading"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-md bg-[#131313] shadow-2xl"
          >
            <div className="relative h-64">
              <Image
                src={title.image}
                alt=""
                fill
                sizes="768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-black/30" />
              <button
                type="button"
                aria-label="Close"
                onClick={closeTitle}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 px-6 pb-6">
              <h2 id="title-detail-heading" className="text-3xl font-semibold">
                {title.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                <span className="font-semibold text-match">{title.match}% Match</span>
                <span>{title.year}</span>
                <span className="border border-white/40 px-1 text-[11px]">
                  {title.maturity}
                </span>
                {title.seasons && <span>{title.seasons} Seasons</span>}
                {title.episodeLabel && <span>{title.episodeLabel}</span>}
                {title.formats?.map((format) => (
                  <span
                    key={format}
                    className="rounded-sm border border-white/25 px-1.5 py-0.5 text-[10px]"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-sm leading-6 text-muted">{title.synopsis}</p>
              <p className="text-xs text-faint">{title.genres.join(" · ")}</p>
              <div className="flex items-center gap-3">
                <Link
                  href={`/watch/${title.id}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2 text-sm font-semibold"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Play
                </Link>
                <button
                  type="button"
                  aria-pressed={inList}
                  onClick={() => toggle(title.id)}
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-sm"
                >
                  {inList ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  {inList ? "In My List" : "Add to List"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
