import type { CatalogRow, Title } from "@/lib/types";

const photo = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;

export const hero: Title = {
  id: "chronos-zero-hour",
  title: "Chronos: Zero Hour",
  synopsis:
    "When an irreversible rift in orbital telemetry transmits an impossible quantum signal from Earth's near future, an elite deep-space recovery unit is dropped into a quarantined dimensional sector to halt total systemic unraveling.",
  year: 2025,
  maturity: "TV-MA",
  match: 98,
  genres: ["Sci-Fi", "Thriller"],
  seasons: 2,
  image: photo("photo-1462331940025-496dfbfc7564", 2000),
  formats: ["4K ULTRA HD", "DOLBY VISION", "5.1 ATMOS"],
  exclusive: true,
  rankLabel: "TOP 10 #1 IN SERIES TODAY",
};

const titles: Title[] = [
  {
    id: "aethelgard-fall-of-syn",
    title: "Aethelgard: Fall of Syn",
    synopsis:
      "A rogue archivist wakes inside a neon city that rewrites itself every midnight, and the only map out is a dead language carved into the skyline.",
    year: 2024,
    maturity: "TV-MA",
    match: 98,
    genres: ["Cyberpunk", "Sci-Fi", "Thriller"],
    image: photo("photo-1540959733332-eab4deabeeaf"),
    tag: "TOP 10",
  },
  {
    id: "abyssal-sector-9",
    title: "Abyssal Sector 9",
    synopsis:
      "A salvage crew follows a distress ping into a trench that does not appear on any chart, and the ping starts answering back.",
    year: 2025,
    maturity: "TV-MA",
    match: 96,
    genres: ["Sci-Fi", "Thriller"],
    image: photo("photo-1518770660439-4636190af475"),
    tag: "LIVE EPISODE",
  },
  {
    id: "dune-walker-exodus",
    title: "Dune Walker: Exodus",
    synopsis:
      "Nomad pilots race a collapsing dune sea to ferry the last water cache to a city that has already been declared lost.",
    year: 2023,
    maturity: "PG-13",
    match: 94,
    genres: ["Adventure", "Sci-Fi"],
    image: photo("photo-1509316785289-025f5b846b35"),
    tag: "TOP 10",
  },
  {
    id: "the-clockwork-conspiracy",
    title: "The Clockwork Conspiracy",
    synopsis:
      "In a city of brass and blackmail, a watchmaker's apprentice inherits a mechanism that can rewind a single hour — once.",
    year: 2024,
    maturity: "TV-14",
    match: 92,
    genres: ["Mystery", "Historical"],
    image: photo("photo-1526374965328-7f61d4dc18c5"),
    tag: "RECENTLY ADDED",
  },
  {
    id: "neon-covenant",
    title: "Neon Covenant",
    synopsis:
      "Two rival couriers share one illegal implant and twelve hours to decide which of them gets to keep the memory.",
    year: 2025,
    maturity: "TV-MA",
    match: 91,
    genres: ["Cyberpunk", "Drama"],
    image: photo("photo-1514565131-fce0801e5785"),
  },
  {
    id: "static-saints",
    title: "Static Saints",
    synopsis:
      "A pirate radio saint broadcasts warnings from a future that keeps arriving a day early.",
    year: 2022,
    maturity: "TV-14",
    match: 89,
    genres: ["Sci-Fi", "Mystery"],
    image: photo("photo-1550751827-4bd374c3f58b"),
  },
  {
    id: "vanguard-mach-10",
    title: "Vanguard: Mach 10",
    synopsis:
      "Test pilots punch through a storm belt that eats instrumentation, chasing a craft that never filed a flight plan.",
    year: 2025,
    maturity: "TV-14",
    match: 97,
    genres: ["Action", "Sci-Fi"],
    image: photo("photo-1454789548928-9efd52dc4031"),
    episodeLabel: "S1:E5",
    remaining: "32m left",
    progress: 68,
  },
  {
    id: "black-capital",
    title: "Black Capital",
    synopsis:
      "A floor of analysts notices the market is trading on news that has not happened yet.",
    year: 2024,
    maturity: "TV-MA",
    match: 93,
    genres: ["Thriller", "Drama"],
    image: photo("photo-1551836022-d5d88e9218df"),
    episodeLabel: "S2:E3",
    remaining: "14m left",
    progress: 82,
  },
  {
    id: "fjord-whispers",
    title: "Fjord Whispers",
    synopsis:
      "A cartographer mapping a newly thawed coast starts hearing the names of towns that were never built.",
    year: 2023,
    maturity: "TV-14",
    match: 90,
    genres: ["Mystery", "Drama"],
    image: photo("photo-1506905925346-21bda4d32df4"),
    episodeLabel: "S1:E2",
    remaining: "48m left",
    progress: 22,
  },
  {
    id: "orbital-zero",
    title: "Orbital Zero",
    synopsis:
      "The last inhabited ring station loses its sunrise window, and the night shift has to invent a morning.",
    year: 2025,
    maturity: "TV-14",
    match: 95,
    genres: ["Sci-Fi", "Drama"],
    image: photo("photo-1614730321146-b6fa6a46bcb4"),
    episodeLabel: "S3:E8",
    remaining: "7m left",
    progress: 91,
  },
  {
    id: "cyber-ronin",
    title: "Cyber-Ronin",
    synopsis:
      "A retired blade-runner for hire is pulled back when her own ghost starts taking contracts.",
    year: 2024,
    maturity: "TV-MA",
    match: 97,
    genres: ["Cyberpunk", "Action"],
    image: photo("photo-1550751827-4bd374c3f58b", 900),
    badges: ["4K HDR"],
  },
  {
    id: "cryo-saint",
    title: "Cryo Saint",
    synopsis:
      "A preserved icon wakes in a cathedral of ice and learns the faithful have been editing her miracles.",
    year: 2025,
    maturity: "PG-13",
    match: 94,
    genres: ["Sci-Fi", "Fantasy"],
    image: photo("photo-1634017839464-5c339ebe3cb4", 900),
    badges: ["ULTRA HD"],
  },
  {
    id: "gateway",
    title: "Gateway",
    synopsis:
      "The first stable wormhole is a toll road, and the toll is a memory you do not get to choose.",
    year: 2024,
    maturity: "TV-14",
    match: 96,
    genres: ["Sci-Fi", "Mystery"],
    image: photo("photo-1534796636912-3b95b3ab5986", 900),
    badges: ["4K HDR"],
  },
  {
    id: "ashen-crown",
    title: "Ashen Crown",
    synopsis:
      "A battlefield saint forges a crown from a fallen star and dares the empires to kneel.",
    year: 2023,
    maturity: "TV-MA",
    match: 92,
    genres: ["Fantasy", "Action"],
    image: photo("photo-1470071459604-3b5ec3a7fe05", 900),
    badges: ["5.1 SOUND"],
  },
  {
    id: "signal-tracker",
    title: "Signal Tracker",
    synopsis:
      "An amateur listener maps a signal that moves backward across the globe, one city per night.",
    year: 2025,
    maturity: "TV-14",
    match: 95,
    genres: ["Thriller", "Sci-Fi"],
    image: photo("photo-1451187580459-43490279c0fa", 900),
    badges: ["4K HDR"],
  },
  {
    id: "overdrive",
    title: "Overdrive",
    synopsis:
      "Street crews in a flooded capital race contraband through tunnels that the city denies exist.",
    year: 2024,
    maturity: "PG-13",
    match: 88,
    genres: ["Action", "Crime"],
    image: photo("photo-1480714378408-67cf0d13bc1b", 900),
    badges: ["ULTRA HD"],
  },
  {
    id: "helios-protocol",
    title: "Helios Protocol",
    synopsis:
      "Solar engineers discover the array is focusing light on coordinates that are not on Earth.",
    year: 2022,
    maturity: "PG-13",
    match: 86,
    genres: ["Sci-Fi", "Thriller"],
    image: photo("photo-1464802686167-b939a6910659", 900),
    badges: ["5.1 SOUND"],
  },
  {
    id: "velvet-static",
    title: "Velvet Static",
    synopsis:
      "A nightclub DJ inherits a frequency that makes the room remember things the city erased.",
    year: 2025,
    maturity: "TV-MA",
    match: 90,
    genres: ["Drama", "Mystery"],
    image: photo("photo-1550684848-fac1c5b4e853", 900),
    badges: ["ULTRA HD"],
  },
  {
    id: "nova-incursion",
    title: "Nova Incursion",
    synopsis:
      "A strike wing escorts a civilian ark through a debris field that keeps reassembling into ships.",
    year: 2025,
    maturity: "PG-13",
    match: 99,
    genres: ["Action", "Sci-Fi"],
    image: photo("photo-1517976487492-5750f3195933"),
    tag: "ONLY ON CINEMAX",
    subtitle: "Winner • Best Visual Effects",
  },
  {
    id: "paradox-engine",
    title: "Paradox Engine",
    synopsis:
      "A repair tech opens a machine that is building a second version of the day she is already in.",
    year: 2024,
    maturity: "TV-14",
    match: 99,
    genres: ["Sci-Fi", "Mystery"],
    image: photo("photo-1550745165-9bc0b252726f"),
    tag: "STAFF PICK",
    subtitle: "Sci-Fi • Mind-Bending Mystery",
  },
  {
    id: "the-core-threshold",
    title: "The Core Threshold",
    synopsis:
      "Miners breach a vault that hums in a human voice and refuses to let the shift clock out.",
    year: 2023,
    maturity: "TV-MA",
    match: 99,
    genres: ["Thriller", "Sci-Fi"],
    image: photo("photo-1502134249126-9f3755a50d78"),
    tag: "99% MATCH",
    subtitle: "Thriller • Sci-Fi",
  },
  {
    id: "grid-runner",
    title: "Grid Runner",
    synopsis:
      "A courier who only exists inside the municipal grid has to deliver a message to her own body.",
    year: 2024,
    maturity: "TV-MA",
    match: 93,
    genres: ["Cyberpunk", "Drama"],
    image: photo("photo-1477959858617-67f85cf4f1df"),
    subtitle: "Cyberpunk • Drama",
  },
  {
    id: "iron-psalm",
    title: "Iron Psalm",
    synopsis:
      "Choirs in a walled foundry sing the furnaces into obedience — until one hymn answers.",
    year: 2022,
    maturity: "PG-13",
    match: 87,
    genres: ["Fantasy", "Drama"],
    image: photo("photo-1464822759023-fed622ff2c3b"),
    tag: "STAFF PICK",
    subtitle: "Fantasy • Guild Drama",
  },
  {
    id: "low-orbit-saints",
    title: "Low Orbit Saints",
    synopsis:
      "Maintenance monks keep a pilgrimage satellite from falling, one unspoken prayer at a time.",
    year: 2025,
    maturity: "TV-14",
    match: 91,
    genres: ["Sci-Fi", "Drama"],
    image: photo("photo-1446776811953-b23d57bd21aa"),
    tag: "ONLY ON CINEMAX",
    subtitle: "Official Selection • Orbit Festival",
  },
];

const byId = Object.fromEntries(titles.map((item) => [item.id, item]));

function pick(ids: string[]) {
  return ids.map((id) => byId[id]);
}

export const rows: CatalogRow[] = [
  {
    id: "trending",
    title: "Trending Now",
    variant: "trending",
    items: pick([
      "aethelgard-fall-of-syn",
      "abyssal-sector-9",
      "dune-walker-exodus",
      "the-clockwork-conspiracy",
      "neon-covenant",
      "static-saints",
    ]),
  },
  {
    id: "continue",
    title: "Continue Watching for Alex",
    variant: "continue",
    aside: "4 TITLES IN PROGRESS",
    items: pick([
      "vanguard-mach-10",
      "black-capital",
      "fjord-whispers",
      "orbital-zero",
    ]),
  },
  {
    id: "picks",
    title: "Top Picks for You",
    variant: "poster",
    items: pick([
      "cyber-ronin",
      "cryo-saint",
      "gateway",
      "ashen-crown",
      "signal-tracker",
      "overdrive",
      "helios-protocol",
      "velvet-static",
    ]),
  },
  {
    id: "acclaimed",
    title: "Critically Acclaimed Blockbusters & Sci-Fi",
    variant: "acclaimed",
    items: pick([
      "nova-incursion",
      "paradox-engine",
      "the-core-threshold",
      "grid-runner",
      "iron-psalm",
      "low-orbit-saints",
    ]),
  },
];

export const allTitles: Title[] = [hero, ...titles];

export function getTitle(id: string) {
  return allTitles.find((item) => item.id === id);
}

export function searchTitles(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return allTitles
    .filter((item) => item.title.toLowerCase().includes(needle))
    .slice(0, 8);
}
