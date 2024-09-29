"use client"

import { useSectionInView } from "hooks/useSectionView"

export function Intro() {
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section
      className="flex items-center justify-center min-h-screen"
      id="home"
      ref={ref}
    >
      <div className="flex">
        <p className="bg-clip-text text-5xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p>
      </div>
    </section>
  )
}
