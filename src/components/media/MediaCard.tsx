"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { MediaCardHover } from "@/components/media/MediaCardHover";
import { ProgressBar } from "@/components/media/ProgressBar";
import type { CardVariant, Title } from "@/lib/types";
import { useUi } from "@/store/ui";

function tagClass(tag: string) {
  if (tag.includes("MATCH")) return "bg-match text-black";
  if (tag.includes("STAFF")) return "bg-amber-400 text-black";
  if (tag.includes("ONLY") || tag.includes("TOP") || tag.includes("LIVE")) {
    return "bg-accent text-white";
  }
  return "bg-white/20 text-white";
}

export function MediaCard({
  title,
  variant,
}: {
  title: Title;
  variant: CardVariant;
}) {
  const openTitle = useUi((state) => state.openTitle);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const close = useCallback(() => setHover(false), []);
  const expanded = variant === "trending" || variant === "acclaimed";
  const poster = variant === "poster";

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (min-width: 768px)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canHover) setHover(false);
  }, [canHover]);

  return (
    <div
      ref={anchorRef}
      className={`relative shrink-0 snap-start ${
        poster ? "w-[168px] sm:w-[188px]" : "w-[260px] sm:w-[300px]"
      }`}
      onMouseEnter={() => {
        if (canHover && expanded) setHover(true);
      }}
    >
      <div className={hover ? "opacity-0" : undefined}>
        {variant === "continue" ? (
          <Link href={`/watch/${title.id}`} className="group block">
            <div className="relative aspect-video overflow-hidden rounded-md bg-dim">
              <Image
                src={title.image}
                alt={title.title}
                fill
                sizes="300px"
                className="object-cover transition duration-300 group-hover:brightness-110"
              />
              <div className="absolute inset-x-0 bottom-0">
                <p className="px-2 pb-1 text-right text-[11px] text-white">
                  {title.remaining}
                </p>
                <ProgressBar value={title.progress ?? 0} />
              </div>
            </div>
            <div className="px-0.5 pt-2">
              <p className="text-sm font-medium">{title.title}</p>
              <p className="text-xs text-muted">{title.episodeLabel}</p>
            </div>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => openTitle(title.id)}
            className="block w-full text-left"
          >
            <div
              className={`relative overflow-hidden rounded-md bg-dim ${
                poster ? "aspect-[2/3]" : "aspect-video"
              }`}
            >
              <Image
                src={title.image}
                alt={title.title}
                fill
                sizes={poster ? "190px" : "300px"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
              {title.tag && (
                <span
                  className={`absolute left-2 top-2 rounded-sm px-1.5 py-0.5 text-[10px] font-semibold tracking-wide ${tagClass(title.tag)}`}
                >
                  {title.tag}
                </span>
              )}
              {poster && title.badges?.[0] && (
                <span className="absolute right-2 top-2 rounded-sm bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide">
                  {title.badges[0]}
                </span>
              )}
              {poster && (
                <p className="absolute inset-x-2 bottom-3 text-lg font-bold uppercase leading-none tracking-wide">
                  {title.title}
                </p>
              )}
              {variant === "trending" && (
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm font-semibold">{title.title}</p>
                  <p className="mt-1 text-xs">
                    <span className="font-semibold text-match">{title.match}% Match</span>
                    <span className="text-white/70"> · {title.genres[0]}</span>
                  </p>
                </div>
              )}
            </div>
            {variant === "acclaimed" && (
              <div className="px-0.5 pt-2">
                <p className="text-sm font-semibold">{title.title}</p>
                {title.subtitle && (
                  <p className="text-xs text-muted">{title.subtitle}</p>
                )}
              </div>
            )}
          </button>
        )}
      </div>
      {hover && (
        <MediaCardHover title={title} anchorRef={anchorRef} onClose={close} />
      )}
    </div>
  );
}
