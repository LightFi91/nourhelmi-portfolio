"use client"

import { useSectionInView } from "@/hooks/useSectionView"
import { TagList, WobbleCard } from "@repo/ui"
import { motion } from "framer-motion"
import { skillsData } from "../../lib/data"

export function Skills() {
  const { ref } = useSectionInView("Skills", 0.5)

  return (
    <section
      className="flex items-center justify-center z-content max-w-5xl mx-auto"
      id="skills"
      ref={ref}
    >
      <motion.div
        className="w-full flex flex-wrap justify-center gap-6"
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
          rotateX: -10,
          y: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
          delay: 0.5,
        }}
      >
        <p className="text-2xl text-white text-center max-w-xl font-mono font-bold mb-12">
          Below are some skills i accumulated over the years, hover over each
          card to see the total years spent on each
        </p>
        {skillsData.map((category, index) => {
          const [mainCategory, subCategories] = Object.entries(category)[0] as [
            string,
            Record<string, string[]>,
          ]
          return (
            <div key={index}>
              <WobbleCard
                className="max-w-md p-12"
                containerClassName="bg-primary-light"
              >
                <div className="">
                  <h2 className="text-2xl font-bold font-display text-center capitalize mb-4">
                    {mainCategory}
                  </h2>
                  {Object.entries(subCategories).map(
                    ([subCategory, skills], subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h3 className="text-xl font-mono font-semibold capitalize mb-2">
                          {subCategory}
                        </h3>
                        <TagList tags={skills} />
                      </div>
                    )
                  )}
                </div>
              </WobbleCard>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
