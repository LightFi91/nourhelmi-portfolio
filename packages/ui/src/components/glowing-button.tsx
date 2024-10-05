"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "../lib/utils"

const glowingButtonVariants = cva(
  "relative bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark font-medium shadow-md",
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        icon: "rounded-full p-3",
        primary: "rounded-full w-40 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "primary",
    },
  }
)

interface GlowingButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof glowingButtonVariants> {
  children: ReactNode
  className?: string
}

export function GlowingButton({
  children,
  className,
  variant,
  size,
  ...props
}: GlowingButtonProps) {
  return (
    <motion.button
      className={cn(glowingButtonVariants({ variant, size }), className)}
      initial="initial"
      transition={{ duration: 0.2 }}
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.2 },
      }}
      whileHover="hover"
      {...props}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-surface-dark dark:via-accent-light to-transparent"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
        transition={{ duration: 0.3 }}
        variants={{
          initial: { opacity: 0.5, width: "0%" },
          hover: { opacity: 1, width: size === "icon" ? "40%" : "85%" },
        }}
      />
    </motion.button>
  )
}
