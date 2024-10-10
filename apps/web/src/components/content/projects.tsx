"use client"

import { useSectionInView } from "@/hooks/useSectionView"
import { projectsData } from "@/lib/data"
import React from "react"
import Project from "./project"

export function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col items-center justify-center z-content mx-auto"
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-text-light dark:text-text-dark text-center font-bold font-mono mb-12">
        My Projects
      </h3>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
