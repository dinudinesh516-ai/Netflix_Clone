import { notFound } from "next/navigation";

const labels: Record<string, string> = {
  tv: "TV Shows",
  movies: "Movies",
  latest: "New & Popular",
  "original-audio": "Browse by Languages",
};

export function generateStaticParams() {
  return Object.keys(labels).map((slug) => ({ slug }));
}

export default async function BrowsePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = labels[slug];
  if (!label) notFound();

  return (
    <main className="min-h-[70vh] px-6 pt-28 md:px-12">
      <h1 className="text-4xl font-semibold tracking-tight">{label}</h1>
      <p className="mt-3 text-muted">Coming soon</p>
    </main>
  );
}
