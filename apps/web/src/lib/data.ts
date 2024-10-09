// import corpcommentImg from "@/public/corpcomment.png"
// import rmtdevImg from "@/public/rmtdev.png"
// import wordanalyticsImg from "@/public/wordanalytics.png"
// import React from "react"
// import { CgWorkAlt } from "react-icons/cg"
// import { FaReact } from "react-icons/fa"
// import { LuGraduationCap } from "react-icons/lu"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "Define engineering culture, architect and build scalable and secure web applications. Increase developer velocity by 50%. Reduce technical debt by 80%. Reduce ticket churn rate by 70%. Improve test coverage by 50%.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const

type SkillCategory = {
  [key: string]: {
    [subCategory: string]: string[]
  }
}

export const skillsData: SkillCategory[] = [
  {
    web: {
      frameworks: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      design: [
        "Tailwind",
        "Chakra UI",
        "Material UI",
        "Shadcn",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  },
  {
    mobile: {
      native: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      hybrid: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  },
  {
    infra: {
      backend: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      cloud: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  },
  {
    web3: {
      frameworks: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  },
] as const
