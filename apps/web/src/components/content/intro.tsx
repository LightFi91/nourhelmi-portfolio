"use client"

import { BackgroundGradient, GlowingButton } from "@repo/ui"
import { motion } from "framer-motion"
import { useSectionInView } from "hooks/useSectionView"
import Image from "next/image"
import Link from "next/link"

export function Intro() {
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section
      className="tw-h-full flex items-start justify-center z-content mt-36"
      id="home"
      ref={ref}
    >
      <motion.div
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
        }}
        className="[perspective:800px] [transform-style:preserve-3d] flex flex-col justify-center items-center gap-4"
        exit={{
          opacity: 0,
          scale: 0.8,
          rotateX: 10,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
          rotateX: 40,
          y: 40,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
          delay: 0.5,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <BackgroundGradient containerClassName="w-36 h-36 rounded-full corner-glow overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                alt="Nour helmi photo"
                className="object-cover"
                height={140}
                src="/me.jpeg"
                width={140}
              />
            </div>
          </BackgroundGradient>
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-text-light dark:text-text-dark">
              Nour Helmi
            </h2>
          </div>
        </div>
        <div className="flex-col justify-center items-center max-w-2xl mx-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-text-light dark:text-text-dark text-center">
            Product centric, experience focused, technology agnostic software
            engineer. I build products people love, and scale startups and
            teams.
          </h3>
        </div>
        <GlowingButton>
          <Link href="#skills">View Skills</Link>
        </GlowingButton>
      </motion.div>
    </section>
  )
}
