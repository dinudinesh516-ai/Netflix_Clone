import { ContentRow } from "@/components/media/ContentRow";
import { HeroBanner } from "@/components/hero/HeroBanner";
import { hero, rows } from "@/data/catalog";

export default function HomePage() {
  return (
    <main>
      <HeroBanner title={hero} />
      <div className="relative z-10 -mt-24 space-y-10 pb-16">
        {rows.map((row) => (
          <ContentRow key={row.id} row={row} />
        ))}
      </div>
    </main>
  );
}
