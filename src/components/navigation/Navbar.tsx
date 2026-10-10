"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NavItem } from "@/components/navigation/NavItem";
import { NotificationsDropdown } from "@/components/navigation/NotificationsDropdown";
import { ProfileDropdown } from "@/components/navigation/ProfileDropdown";
import { SearchBar } from "@/components/navigation/SearchBar";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse/tv", label: "TV Shows" },
  { href: "/browse/movies", label: "Movies" },
  { href: "/browse/latest", label: "New & Popular" },
  { href: "/my-list", label: "My List" },
  { href: "/browse/original-audio", label: "Browse by Languages" },
];

type Menu = "search" | "notes" | "profile" | null;

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const close = useCallback(() => setMenu(null), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[#131313]/85 backdrop-blur-md"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex h-16 items-center gap-6 px-6 md:px-12">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-[0.18em] text-accent"
        >
          CINEMAX
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <SearchBar
            open={menu === "search"}
            onOpen={() => setMenu("search")}
            onClose={close}
          />
          <NotificationsDropdown
            open={menu === "notes"}
            onOpen={() => setMenu("notes")}
            onClose={close}
          />
          <ProfileDropdown
            open={menu === "profile"}
            onOpen={() => setMenu("profile")}
            onClose={close}
          />
        </div>
      </div>
    </header>
  );
}
