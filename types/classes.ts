export type Recording = {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
  duration?: string;
  description?: string | null;
  visibility?: "public" | "private";
};

export type LiveSession = {
  id: string;
  title: string;
  start: string; // ISO
  end: string; // ISO
  provider?: string | null; // e.g., zoom
  joinUrl?: string | null;
  description?: string | null;
  visibility?: "public" | "private";
};
