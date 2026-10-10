import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";
import { getTitle } from "@/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const title = getTitle(id);
  return { title: title ? `${title.title} — Cinemax` : "Cinemax" };
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const title = getTitle(id);
  if (!title) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <Play className="mb-6 h-16 w-16 text-white/80" aria-hidden />
      <p className="text-xs uppercase tracking-[0.28em] text-white/50">Now playing</p>
      <h1 className="mt-3 text-4xl font-semibold">{title.title}</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{title.synopsis}</p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-white px-5 py-2 text-sm font-semibold text-black"
      >
        Back
      </Link>
    </main>
  );
}
