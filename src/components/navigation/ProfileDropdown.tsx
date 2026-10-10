"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { useDismiss } from "@/lib/useDismiss";

const profiles = ["Alex", "Maya", "Sam"];

export function ProfileDropdown({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [active, setActive] = useState("Alex");
  const ref = useDismiss(open, onClose);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Profile"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
        className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-zinc-400 to-zinc-700 text-xs font-semibold ring-2 ring-accent"
      >
        {active.slice(0, 1)}
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-3 w-56 rounded-md border border-white/10 bg-[#1c1b1b] p-2 shadow-2xl">
          <ul>
            {profiles.map((name) => (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(name);
                    onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-700 text-xs">
                      {name.slice(0, 1)}
                    </span>
                    {name}
                  </span>
                  {active === name && <Check className="h-4 w-4 text-accent" />}
                </button>
              </li>
            ))}
          </ul>
          <div className="my-1 h-px bg-white/10" />
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md px-2 py-2 text-left text-sm text-white/80 hover:bg-white/5"
          >
            Account Settings
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md px-2 py-2 text-left text-sm text-white/80 hover:bg-white/5"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
