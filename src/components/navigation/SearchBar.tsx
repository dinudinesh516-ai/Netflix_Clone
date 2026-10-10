"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { searchTitles } from "@/data/catalog";
import { useDismiss } from "@/lib/useDismiss";
import { useUi } from "@/store/ui";

export function SearchBar({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const openTitle = useUi((state) => state.openTitle);
  const ref = useDismiss(open, onClose);
  const results = query ? searchTitles(query) : [];

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(value.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    if (!open) {
      setValue("");
      setQuery("");
    }
  }, [open]);

  const choose = (id: string) => {
    openTitle(id);
    onClose();
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (results[0]) choose(results[0].id);
  };

  return (
    <div ref={ref} className="relative">
      <form
        onSubmit={onSubmit}
        className={`flex items-center overflow-hidden rounded-md bg-black/50 transition-all ${
          open ? "w-64 border border-white/40" : "w-9"
        }`}
      >
        <button
          type="button"
          aria-label="Search"
          aria-expanded={open}
          onClick={onOpen}
          className="grid h-9 w-9 shrink-0 place-items-center text-white"
        >
          <Search className="h-5 w-5" />
        </button>
        {open && (
          <input
            autoFocus
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Titles, series, films"
            aria-label="Search titles"
            className="h-9 w-full bg-transparent pr-3 text-sm text-white outline-none placeholder:text-white/40"
          />
        )}
      </form>
      {open && query && (
        <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-md border border-white/10 bg-[#1c1b1b] shadow-2xl">
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-muted">No titles found</p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => choose(item.id)}
                    className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-white/5"
                  >
                    <span className="relative h-12 w-20 shrink-0 overflow-hidden rounded-sm bg-black">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{item.title}</span>
                      <span className="block text-xs text-muted">
                        {item.match}% Match · {item.year}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
