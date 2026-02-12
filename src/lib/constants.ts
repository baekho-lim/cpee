export const SITE_CONFIG = Object.freeze({
  name: "CPEE",
  fullName: "Center for Practical Entrepreneurship Education",
  url: "https://cpee.vercel.app",
  foundingDate: "2025",
  email: "contact@cpee.org",
  areaServed: ["KR", "VN"] as readonly string[],
  languages: ["ko", "en", "vi"] as readonly string[],
});

export const SOCIAL_LINKS = Object.freeze({
  facebook: "https://www.facebook.com/groups/252991477087456",
});

export const STAT_KEYS = [
  "mentees",
  "programs",
  "partners",
  "years",
] as const;
export type StatKey = (typeof STAT_KEYS)[number];

export const STATS: Readonly<
  Record<StatKey, { readonly value: number; readonly suffix?: string }>
> = Object.freeze({
  mentees: { value: 150, suffix: "+" },
  programs: { value: 10, suffix: "+" },
  partners: { value: 5, suffix: "+" },
  years: { value: 1 },
});
