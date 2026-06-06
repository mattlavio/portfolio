export const firstName = "Matt";
export const lastName = "Lavoie";
export const fullName = `${firstName} ${lastName}`;
export const roleName = "Senior Frontend Developer";
export const address = "57, Rue de la Pinède, Rimouski, Qc";
export const phoneNumber = "(418) 509-4850";
export const email = "mathieulavoie94@gmail.com";
export const website = "m4thieulavoie.dev";
export const currentCompany = "Float";
export const careerOverview =
  "I am a passionate Frontend developer with more than 11 years of experience crafting HTML, CSS and JavaScript. Design Systems have been a core focus of my career for the past 6 years — from building and scaling one at LogMeIn, to contributing to Polaris at Shopify, to owning the design system as part of Float's Frontend Platform team. I am particularly comfortable in TypeScript, React, Web Components and (S)CSS, and I care deeply about frontend architecture, developer experience and accessibility. I am also increasingly passionate about leveraging AI and automation to boost developer productivity — whether through AI-assisted tooling, automated workflows, or integrating LLMs into the development process.";
export type Skill =
  | "HTML"
  | "CSS/SASS"
  | "JavaScript"
  | "TypeScript"
  | "Git"
  | "React"
  | "Angular"
  | "Java"
  | "JSP"
  | "jQuery"
  | "ASP.NET"
  | "Web Accessibility"
  | "Web Components";

export interface SkillProp {
  readonly skill: Skill;
  readonly awesome: number;
}

export const skillz: readonly SkillProp[] = [
  {
    skill: "HTML",
    awesome: 95,
  },
  { skill: "CSS/SASS", awesome: 98 },
  { skill: "Git", awesome: 75 },
  { skill: "JavaScript", awesome: 90 },
  { skill: "TypeScript", awesome: 95 },
  { skill: "Web Accessibility", awesome: 85 },
  { skill: "Web Components", awesome: 90 },
  { skill: "React", awesome: 92 },
];

export interface JobHistory {
  readonly title: string;
  readonly company: string;
  readonly skills: readonly Skill[];
  readonly dates: string;
  readonly tasks: readonly string[];
}

export const jobHistory: readonly JobHistory[] = [
  {
    company: "Float",
    skills: ["CSS/SASS", "Git", "HTML", "JavaScript", "React", "TypeScript"],
    title: "Senior Frontend Developer",
    dates: "May 2026 - Today",
    tasks: [
      "Work on the Frontend Platform team, owning the design system, frontend tooling, best practices and core frontend architecture",
      "Build and scale a design system used across the product",
      "Define and champion frontend best practices across engineering teams",
      "Improve developer experience through tooling, automation and strong frontend foundations",
    ],
  },
  {
    company: "Shopify",
    skills: ["CSS/SASS", "Git", "HTML", "JavaScript", "React", "TypeScript"],
    title: "Staff Frontend Developer",
    dates: "August 2021 - May 2026",
    tasks: [
      "Work on complex frontend features",
      "Help reshape our internal frontend architecture",
      "Build, scale and maintain a new internal frontend committee",
      "Contribute to higher level frontend repositories like Polaris",
      "Ship new features written in TypeScript and React",
      "Mentor other developers in their frontend journey",
    ],
  },
  {
    company: "LogMeIn",
    skills: [
      "CSS/SASS",
      "Git",
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
      "Web Components",
    ],
    title: "Tech Lead, Design Systems",
    dates: "April 2020 - August 2021",
    tasks: [
      "Navigated through technical constraints to select the best suitable tech stack",
      "Scale a design system into many complex and different teams",
      "Work in HTML, CSS, TypeScript, React and Web Components in order to ship high quality and accessible components",
      "Work closely with UX to make sure of the feasibility of designs",
      "Built multiple components according to UX specs",
      "Managed to drive adoption across the business, often times ahead of schedule",
      "Work with teams to include their needs in quarterly plannings",
      "Evangelize good accessibility practices",
    ],
  },
  {
    company: "LogMeIn",
    skills: [
      "Angular",
      "CSS/SASS",
      "Git",
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
    ],
    title: "Senior Software Developer",
    dates: "November 2018 - April 2020",
    tasks: [
      "Angular4+ development alongside React, HTML, CSS and SASS",
      "Build new features and bug fixes in a fast-growing codebase",
      "Work with UX to reskin the whole application",
      "Increase developer experience with new internal tools",
    ],
  },
  {
    company: "LGS - An IBM company",
    skills: ["CSS/SASS", "HTML", "JavaScript", "Java", "JSP"],
    title: "Programmer-Analyst",
    dates: "May 2018 - November 2018",
    tasks: [
      "Front-end enhancements in HTML/CSS and JavaScript/jQuery",
      "Work with client on building new features in their portal",
    ],
  },
  {
    company: "PG Solutions",
    skills: ["CSS/SASS", "HTML", "jQuery", "ASP.NET"],
    title: "Programmer-Analyst",
    dates: "May 2015 - May 2018",
    tasks: [
      "Implement new features in a large and complex codebase",
      "Work with other teams for cross-team dependencies",
    ],
  },
];
