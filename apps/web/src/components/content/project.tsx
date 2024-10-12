import { projectsData } from "@/lib/data"
import { Label, TagList } from "@repo/ui"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

import { useRef } from "react"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div
        className="bg-background-light max-w-5xl border border-text-light/[0.1] rounded-lg overflow-hidden 
                    flex flex-row sm:flex-col gap-6
                    relative sm:pr-8  hover:bg-slate-200 
                    transition sm:group-even:pl-8 dark:text-text-dark dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[80%] lg:max-w-[70%] md:max-w-[60%] sm:max-w-[50%]
                    flex flex-col gap-2
                    justify-between align-middle
                    sm:group-even:ml-[18rem] "
        >
          <Label variant="title">{title}</Label>
          <Label variant="body">{description}</Label>
          <TagList tags={tags} />
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40"
        />
      </div>
    </motion.div>
  )
}
