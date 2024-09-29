"use client"

import { BackgroundGradientAnimation } from "@repo/ui/background-gradient-animation"
import { useTheme } from "../../context/theme-context"

export function Background() {
  const { theme } = useTheme()

  return (
    <BackgroundGradientAnimation
      containerClassName="fixed inset-0"
      className="z-background"
      theme={theme}
    />
  )
}
