"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WatchlistState = {
  ids: string[];
  toggle: (id: string) => void;
};

export const useWatchlist = create<WatchlistState>()(
  persist(
    (set) => ({
      ids: [],
      toggle: (id) =>
        set((state) => ({
          ids: state.ids.includes(id)
            ? state.ids.filter((item) => item !== id)
            : [...state.ids, id],
        })),
    }),
    { name: "cinemax-watchlist", skipHydration: true },
  ),
);
