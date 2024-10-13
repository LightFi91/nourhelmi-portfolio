"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInAnimationVariants } from "../lib/utils"
import { Label } from "./label"

type TagListProps = {
  tags: readonly string[]
}

export function TagList({ tags }: TagListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <ul ref={ref} className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.li
          variants={fadeInAnimationVariants()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={index}
          className="bg-background-light/[0.7] dark:bg-background-dark/[0.7] px-3 py-1 uppercase tracking-wider rounded-full inline-block"
          key={index}
        >
          <Label variant="smol" shadow="none">
            {tag}
          </Label>
        </motion.li>
      ))}
    </ul>
  )
}
