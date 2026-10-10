"use client";

import { create } from "zustand";

type UiState = {
  activeTitleId: string | null;
  openTitle: (id: string) => void;
  closeTitle: () => void;
  liked: string[];
  toggleLike: (id: string) => void;
};

export const useUi = create<UiState>((set) => ({
  activeTitleId: null,
  openTitle: (id) => set({ activeTitleId: id }),
  closeTitle: () => set({ activeTitleId: null }),
  liked: [],
  toggleLike: (id) =>
    set((state) => ({
      liked: state.liked.includes(id)
        ? state.liked.filter((item) => item !== id)
        : [...state.liked, id],
    })),
}));
