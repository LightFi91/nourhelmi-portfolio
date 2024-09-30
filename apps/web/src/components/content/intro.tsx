"use client"

import { BackgroundGradient } from "@repo/ui/background-gradient"
import { motion } from "framer-motion"
import { useSectionInView } from "hooks/useSectionView"
import Image from "next/image"

export function Intro() {
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section
      className="tw-h-full flex items-start justify-center z-content mt-36"
      id="home"
      ref={ref}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          rotateX: 40,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          rotateX: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
          delay: 0.5,
        }}
        className="[perspective:800px] [transform-style:preserve-3d] flex flex-col justify-center items-center gap-4"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <BackgroundGradient containerClassName="w-36 h-36 rounded-full corner-glow overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/me.jpeg"
                alt="Nour helmi photo"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>
          </BackgroundGradient>
          <div className="">
            <h2 className="text-5xl font-serif text-text-light dark:text-text-dark">
              Nour Helmi
            </h2>
          </div>
        </div>
        <div className="flex-col justify-center items-center max-w-2xl">
          <h3 className="text-3xl text-text-light dark:text-text-dark text-center">
            Product centric, experience focused, technology agnostic software
            engineer. I build products people love, and scale startups and
            teams.
          </h3>
        </div>
      </motion.div>
    </section>
  )
}
