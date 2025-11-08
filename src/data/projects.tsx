import { ReactNode } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: "" },
  next: { title: "Next.js", bg: "black", fg: "white", icon: "" },
  react: { title: "React.js", bg: "black", fg: "white", icon: "" },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: "" },
  shadcn: { title: "ShanCN UI", bg: "black", fg: "white", icon: "" },
  node: { title: "Node.js", bg: "black", fg: "white", icon: "" },
  python: { title: "Python", bg: "black", fg: "white", icon: "" },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: "" },
  express: { title: "Express", bg: "black", fg: "white", icon: "" },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: "" },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ai-codegen",
    category: "AI & ML",
    title: "CodeGen AI",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
  {
    id: "blockchain-nft",
    category: "Web3 & Blockchain",
    title: "NeuralNFT Marketplace",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
  {
    id: "collab-whiteboard",
    category: "Collaboration",
    title: "SyncBoard",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
  {
    id: "vr-visualizer",
    category: "XR & Visualization",
    title: "DimensionVR",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
  {
    id: "neural-playground",
    category: "AI & ML",
    title: "Neural Playground",
    src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
  {
    id: "retro-emulator",
    category: "Gaming",
    title: "RetroArcade",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    skills: { frontend: [], backend: [] },
    live: "#",
    content: (
      <div>
        <TypographyH3>Building in Progress</TypographyH3>
        <TypographyP className="font-mono">This project is under development.</TypographyP>
      </div>
    ),
  },
];

export default projects;
