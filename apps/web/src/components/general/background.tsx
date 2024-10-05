"use client"

import { BackgroundGradientAnimation } from "@repo/ui"
import { useTheme } from "../../context/theme-context"

export function Background() {
  const { theme } = useTheme()

  return (
    <BackgroundGradientAnimation
      className="z-background"
      containerClassName="fixed inset-0"
      theme={theme}
    />
  )
}
