"use client"

import { motion } from "framer-motion"

interface DividerProps {
  className?: string
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <motion.div
      className={`min-h-20 max-h-80 w-1 my-20 scroll-my-20 bg-surface-dark dark:bg-accent-light z-content rounded-full ${className}`}
      initial={{ opacity: 0, filter: "blur(100px)", scale: 1.5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  )
}
