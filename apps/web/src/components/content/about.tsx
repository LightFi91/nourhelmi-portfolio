"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "hooks/useSectionView"

export function About() {
  const { ref } = useSectionInView("About", 0.5)

  return (
    <section
      className="flex items-center justify-center z-content max-w-5xl mx-auto mt-12"
      id="about"
      ref={ref}
    >
      <motion.p
        className="text-text-light dark:text-text-dark font-medium text-center text-xl"
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
        {`As a technology agnostic, product centric software engineer with a decade
      of experience under my belt, I am uniquely positioned at the intersection
      of technological innovation and user experience. Over the course of my
      career, I have primarily worked with startups, which has given me
      on a vision, measuring success and performance, and iterating with agile
      methodologies. I am skilled in user experience, and I constantly seek out
      new and emerging technologies to solve customer and business pain points
      and unlock new value. My experience has spanned across a variety of
      technologies and platforms, including web development (both backend and
      frontend), mobile development (both native and hybrid technologies), and
      cloud infrastructure. I design software architecture to best support
      scalability, offer best maintainability and performance. As a lifelong
      (and very fast) learner, I am constantly striving to improve my skills and
      deepen my knowledge of cutting-edge technologies. I am an avid
      communicator, clear and concise. I thrive under pressure, and I'm always
        eager to take on new challenges and opportunities to expand my expertise.`}
      </motion.p>
    </section>
  )
}
