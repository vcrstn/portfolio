export type ProjectItem = {
  number: string;
  title: string;
  category: string;
  previewTitle: string;
  previewSubtitle: string;
  imageUrl?: string;
  problem: string;
  contribution: string;
  tech: string[];
  tone: "plum" | "sage" | "yellow";
  githubUrl?: string;
  githubLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
};

export type StatusItem = {
  label: string;
  title: string;
  subtitle: string;
};

export const profile = {
  initials: "VC",
  name: "Vict Christine",
  fullName: "Vict Christine De Asis",
  role: "Entry-Level Frontend Developer",
  status: "Fourth-year BSIT student",
  location: "Digos City, Philippines",
  eyebrow: "Portfolio v1 · Digos City, Philippines",
  heroIntro:
    "I build responsive, user-friendly web interfaces that bring practical ideas to life through thoughtful design and clean code.",
  email: "victchristinedeasis@gmail.com",
  // Update these with your exact profile URLs when ready:
  githubUrl: "https://github.com/vcrstn",
  githubDisplay: "github.com/vcrstn",
  linkedinUrl: "https://www.linkedin.com",
  linkedinDisplay: "LinkedIn profile (update URL in portfolioData.ts)",
};

export const statusItems: StatusItem[] = [
  {
    label: "CURRENTLY",
    title: "Final-year BSIT student",
    subtitle: "Digos City, Philippines",
  },
  {
    label: "FOCUS",
    title: "Frontend development",
    subtitle: "React · Responsive UI · Web technologies",
  },
  {
    label: "NEXT",
    title: "Open to entry-level opportunities",
    subtitle: "Frontend development roles",
  },
];

export const tickerItems: string[] = [
  "FRONTEND DEVELOPMENT",
  "RESPONSIVE DESIGN",
  "THOUGHTFUL UI",
  "CONTINUOUS LEARNING",
];

export const projects: ProjectItem[] = [
  {
    number: "01",
    title: "BaonWise",
    category: "Student Allowance & Expense Tracker",
    previewTitle: "BaonWise Web App",
    previewSubtitle: "Budget planner & affordability insights",
    problem:
      "Students frequently struggle to manage daily allowances and make informed spending decisions, often running out of budget before the week ends.",
    contribution:
      "Designed and developed a responsive web application featuring allowance budgeting, expense tracking, and an instant 'Can I Afford This?' reality checker.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tone: "plum",
    githubUrl: "https://github.com/vcrstn/BaonWise",
    githubLabel: "GitHub Repository",
    liveUrl: "https://baonwise.vercel.app/",
    liveLabel: "Live Demo",
  },
  {
    number: "02",
    title: "DevLit",
    category: "Developer Workspace & Productivity",
    previewTitle: "DevLit Workspace",
    previewSubtitle: "Track projects, snippets & learning goals",
    problem:
      "Self-directed developers need a focused, centralized space to organize active side projects, catalog reusable code snippets, and track ongoing learning goals.",
    contribution:
      "Engineered an interactive developer dashboard with project tracking, code snippet management, and curated learning resource categorization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tone: "sage",
    githubUrl: "https://github.com/vcrstn/devlit",
    githubLabel: "GitHub Repository",
    liveUrl: "https://devlit-sigma.vercel.app/",
    liveLabel: "Live Demo",
  },
  {
    number: "03",
    title: "FollowThru",
    category: "Habit & Task Accountability App",
    previewTitle: "FollowThru Web App",
    previewSubtitle: "Gentle accountability for real life",
    problem:
      "Overwhelming to-do lists and procrastination often hinder initial action, making it difficult for individuals to follow through on daily priorities.",
    contribution:
      "Built a mindful task accountability tool focused on overcoming friction by choosing one task at a time and encouraging steady, actionable progress.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tone: "yellow",
    githubUrl: "https://github.com/vcrstn/followthru",
    githubLabel: "GitHub Repository",
    liveUrl: "https://followthru-one.vercel.app/",
    liveLabel: "Live Demo",
  },
];
