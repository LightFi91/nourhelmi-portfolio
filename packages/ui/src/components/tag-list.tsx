"use client"

import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "../lib/utils"
import { Label } from "./label"

type TagListProps = {
  tags: readonly string[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.li
          variants={fadeInAnimationVariants()}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
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
