"use client";

import { useEffect } from "react";
import { TitleDetailModal } from "@/components/modal/TitleDetailModal";
import { useWatchlist } from "@/store/watchlist";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useWatchlist.persist.rehydrate();
  }, []);

  return (
    <>
      {children}
      <TitleDetailModal />
    </>
  );
}
