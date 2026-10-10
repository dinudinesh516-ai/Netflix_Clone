"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroActions } from "@/components/hero/HeroActions";
import type { Title } from "@/lib/types";

function lockup(title: string) {
  const split = title.split(": ");
  if (split.length < 2) return title;
  return (
    <>
      {split[0]}:
      <br />
      {split.slice(1).join(": ")}
    </>
  );
}

export function HeroBanner({ title }: { title: Title }) {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative h-[88vh] min-h-[680px] w-full">
      <Image
        src={title.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_68%_36%,rgba(125,211,252,0.45),rgba(99,102,241,0.18)_26%,transparent_58%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/45" />
      <div className="absolute inset-x-0 bottom-28 px-6 md:px-12">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.12em]">
            {title.exclusive && (
              <span className="text-accent">A CINEMAX ORIGINAL SERIES</span>
            )}
            {title.rankLabel && (
              <span className="rounded-sm bg-accent px-2 py-1 text-white">
                {title.rankLabel}
              </span>
            )}
          </div>
          <h1 className="text-5xl font-bold uppercase leading-[0.92] tracking-tight md:text-7xl">
            {lockup(title.title)}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/85">
            <span className="font-semibold text-match">{title.match}% Match</span>
            <span>{title.year}</span>
            <span className="border border-white/40 px-1 text-[11px]">{title.maturity}</span>
            {title.seasons && <span>{title.seasons} Seasons</span>}
            {title.formats?.map((format) => (
              <span
                key={format}
                className="rounded-sm border border-white/25 px-1.5 py-0.5 text-[10px] tracking-wide text-white/75"
              >
                {format}
              </span>
            ))}
          </div>
          <p className="mt-4 line-clamp-3 max-w-xl text-sm leading-6 text-white/85">
            {title.synopsis}
          </p>
        </div>
        <div className="mt-6 flex items-end justify-between gap-6">
          <HeroActions
            title={title}
            muted={muted}
            onToggleMute={() => setMuted((value) => !value)}
          />
        </div>
      </div>
    </section>
  );
}
