"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "../lib/utils"

export function GlowingButton({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.button
      className={cn(
        "relative px-12 py-3 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark font-medium rounded-full text-sm shadow-md",
        className
      )}
      initial="initial"
      whileHover="hover"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-dark dark:via-accent-light to-transparent"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
        transition={{ duration: 0.3 }}
        variants={{
          initial: { opacity: 0.5, width: "0%" },
          hover: { opacity: 1, width: "80%" },
        }}
      />
    </motion.button>
  )
}
