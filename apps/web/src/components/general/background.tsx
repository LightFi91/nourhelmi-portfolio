"use client"

import { BackgroundGradientAnimation } from "@repo/ui/background-gradient-animation"
import { useTheme } from "../../context/theme-context"

export function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 z-[-1]">
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0"
        theme={theme}
      />
    </div>
  )
}
