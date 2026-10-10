"use client";

import { useState } from "react";
import { useDismiss } from "@/lib/useDismiss";

const languages = ["English (US)", "Español", "Français"];

const links = [
  "Audio Description",
  "Help Center",
  "Gift Cards",
  "Media Center",
  "Investor Relations",
  "Terms of Use",
  "Privacy",
  "Legal Notices",
];

export function Footer() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const ref = useDismiss(open, () => setOpen(false));

  return (
    <footer className="border-t border-white/5 px-6 py-10 text-sm text-faint md:px-12">
      <ul className="flex max-w-4xl flex-wrap gap-x-6 gap-y-3">
        {links.map((link) => (
          <li key={link}>
            <button type="button" className="hover:text-white/80">
              {link}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p>© 2025 Cinemax Entertainment, Inc. All rights reserved.</p>
        <div ref={ref} className="relative">
          <button
            type="button"
            aria-expanded={open}
            aria-label="Language"
            onClick={() => setOpen((value) => !value)}
            className="rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:border-white/40"
          >
            {language}
          </button>
          {open && (
            <ul className="absolute bottom-full right-0 z-20 mb-2 w-40 overflow-hidden rounded-md border border-white/10 bg-[#1c1b1b] py-1 shadow-xl">
              {languages.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage(option);
                      setOpen(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-xs hover:bg-white/5 ${
                      option === language ? "text-white" : "text-white/70"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
