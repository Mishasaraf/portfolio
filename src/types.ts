// Shapes of the data in src/data/profile.ts.
// Document fields (certificate, lor, pdf) are paths to files in public/.

export interface NavLink {
  href: string;
  label: string;
}

export type MunRole = "Delegate" | "Chair" | "Vice Chair" | "Co-Chair" | "Rapporteur" | "Co-Head, Marketing";

export interface MunEntry {
  conference: string;
  role: MunRole;
  award?: string;
  year?: number;
  grade?: number;
  certificate?: string;
}

export interface AchievementEntry {
  event: string;
  result: string;
  level?: string;
  grade?: number;
  certificate?: string;
}

export interface AchievementGroup {
  id: string;
  title: string;
  items: AchievementEntry[];
}

export interface LinguisticsEntry {
  code: string;
  name: string;
  scope: "National" | "International";
  badge: string;
  description: string;
  certificate?: string;
}

export interface CodingLanguage {
  name: string;
  level: "Beginner" | "Mid" | "Expert";
}

export interface LanguageSpoken {
  name: string;
  level: "Fluent" | "Working" | "Beginner";
}

export interface InternshipEntry {
  id: string;
  org: string;
  role: string;
  period: string;
  description?: string;
  lor?: string;
}

export interface VolunteerEntry {
  activity: string;
  hoursPerWeek: number;
  weeks: number;
}

export interface WorkshopEntry {
  event: string;
  type: "Conducted" | "Attended";
  grade?: number;
  note?: string;
  certificate?: string;
}

export interface RecommendationLetter {
  id: string;
  role: string;
  school: string;
  excerpt: string;
  paragraphs: string[];
  pdf?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  field: string;
  summary: string;
  abstract?: string;
  status?: string;
  venue?: string;
  year?: number | string;
  keywords?: string[];
  stack?: string[];
  pdf?: string;
  url?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  context?: string;
}

export interface SchoolEntry {
  name: string;
  location: string;
  board: string;
  period: string;
  detail: string;
  grades: { grade: string; percentage: string; note?: string }[];
}
