"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`whitespace-nowrap text-sm transition-colors hover:text-white ${
        active ? "font-semibold text-white" : "text-white/70"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
