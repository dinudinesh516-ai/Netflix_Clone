"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MediaCard } from "@/components/media/MediaCard";
import type { CatalogRow } from "@/lib/types";

export function ContentRow({ row }: { row: CatalogRow }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const update = () => {
      setEdges({
        left: el.scrollLeft > 8,
        right: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
      });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [row.items.length]);

  const scrollBy = (direction: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="group/row relative" aria-label={row.title}>
      <div className="mb-3 flex items-end justify-between px-6 md:px-12">
        <h2 className="text-lg font-semibold md:text-xl">{row.title}</h2>
        {row.aside && (
          <p className="text-[11px] font-medium tracking-[0.16em] text-faint">
            {row.aside}
          </p>
        )}
      </div>
      <div className="relative">
        {edges.left && (
          <button
            type="button"
            aria-label={`Previous ${row.title}`}
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 z-20 grid h-full max-h-48 w-12 -translate-y-1/2 place-items-center bg-black/40 text-white opacity-0 transition group-hover/row:opacity-100"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth scroll-pl-6 scroll-pr-6 px-6 pb-2 md:scroll-pl-12 md:scroll-pr-12 md:px-12"
        >
          {row.items.map((item) => (
            <MediaCard key={item.id} title={item} variant={row.variant} />
          ))}
        </div>
        {edges.right && (
          <button
            type="button"
            aria-label={`Next ${row.title}`}
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 z-20 grid h-full max-h-48 w-12 -translate-y-1/2 place-items-center bg-black/40 text-white opacity-0 transition group-hover/row:opacity-100"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}
      </div>
    </section>
  );
}
