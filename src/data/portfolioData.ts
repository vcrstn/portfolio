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
  githubUrl: "https://github.com",
  githubDisplay: "GitHub profile (update URL in portfolioData.ts)",
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
    title: "BITEMAP (Capstone Project — Update Details)",
    category: "Academic Capstone · Web Application",
    previewTitle: "BITEMAP Interface Preview",
    previewSubtitle: "Replace with your capstone screenshot in /public",
    problem:
      "Add the core user or community problem that BITEMAP solves and why a clear web interface was essential.",
    contribution:
      "Frontend development: built responsive UI views, interactive components, and layout structure while collaborating with the capstone team.",
    tech: ["React", "Responsive UI", "JavaScript", "CSS"],
    tone: "plum",
    githubUrl: "#work",
    githubLabel: "Repository link (add URL)",
    liveUrl: "#work",
    liveLabel: "Live preview (add URL)",
  },
  {
    number: "02",
    title: "Q1 React & GSAP Interactive Project",
    category: "Frontend Mini-Project",
    previewTitle: "Interactive UI & Motion Study",
    previewSubtitle: "Replace with project screenshot or GIF",
    problem:
      "Explored how subtle motion and clear visual hierarchy can guide user attention without overwhelming the interface.",
    contribution:
      "Designed and built the component architecture, responsive mobile-first layout, and scroll/entrance animations using React and GSAP.",
    tech: ["React", "TypeScript", "GSAP", "Responsive CSS"],
    tone: "sage",
    githubUrl: "#work",
    githubLabel: "Repository link (add URL)",
    liveUrl: "#work",
    liveLabel: "Live demo (add URL)",
  },
  {
    number: "03",
    title: "Personal Editorial Portfolio",
    category: "Frontend Design & Engineering",
    previewTitle: "Editorial Grid & Responsive System",
    previewSubtitle: "React · Vite · GSAP · Mobile-First CSS",
    problem:
      "Needed a personal web space that communicates frontend fundamentals, editorial typography, and usability without relying on generic templates.",
    contribution:
      "Structured the single-page application into reusable React components, implemented a mobile-first responsive grid, and added reduced-motion-safe GSAP transitions.",
    tech: ["React", "TypeScript", "Vite", "GSAP", "CSS Grid"],
    tone: "yellow",
    githubUrl: "#top",
    githubLabel: "Source in this workspace",
    liveUrl: "#top",
    liveLabel: "Currently viewing",
  },
];
