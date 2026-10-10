export type CardVariant = "trending" | "continue" | "poster" | "acclaimed";

export type Title = {
  id: string;
  title: string;
  synopsis: string;
  year: number;
  maturity: string;
  match: number;
  genres: string[];
  seasons?: number;
  episodeLabel?: string;
  remaining?: string;
  progress?: number;
  image: string;
  badges?: string[];
  formats?: string[];
  exclusive?: boolean;
  rankLabel?: string;
  tag?: string;
  subtitle?: string;
};

export type CatalogRow = {
  id: string;
  title: string;
  variant: CardVariant;
  items: Title[];
  aside?: string;
};
