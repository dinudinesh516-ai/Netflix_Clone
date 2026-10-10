"use client";

import { Bell } from "lucide-react";
import { useDismiss } from "@/lib/useDismiss";

const notes = [
  {
    id: "vanguard",
    title: "New episode",
    body: "Vanguard: Mach 10 · S1:E6 is ready",
    time: "2h ago",
  },
  {
    id: "chronos",
    title: "Now streaming",
    body: "Chronos: Zero Hour just landed",
    time: "1d ago",
  },
  {
    id: "abyssal",
    title: "Top 10",
    body: "Abyssal Sector 9 entered the Top 10",
    time: "3d ago",
  },
];

export function NotificationsDropdown({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = useDismiss(open, onClose);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Notifications"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
        className="relative grid h-9 w-9 place-items-center text-white"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent ring-2 ring-black" />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-md border border-white/10 bg-[#1c1b1b] p-2 shadow-2xl">
          <p className="px-2 py-2 text-xs font-semibold tracking-[0.14em] text-muted">
            NOTIFICATIONS
          </p>
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-md px-2 py-2 text-left hover:bg-white/5"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{note.title}</span>
                    <span className="text-[11px] text-faint">{note.time}</span>
                  </span>
                  <span className="mt-1 block text-xs text-muted">{note.body}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
