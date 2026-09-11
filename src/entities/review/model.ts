export type Review = {
  authorName: string;
  text: string;
  rating: number;
};

// Нақты пікірлер клиенттен алынғанша бос — ойдан құрастырылмайды.
export const reviews: Review[] = [];
