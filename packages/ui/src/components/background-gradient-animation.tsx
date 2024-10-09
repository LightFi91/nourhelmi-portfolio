"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"

export function BackgroundGradientAnimation({
  theme = "light",
  gradientBackgroundStart = "148, 163, 184", // background.light (94a3b8)
  gradientBackgroundEnd = "241, 250, 238", // surface.light (f1faee)
  firstColor = "29, 78, 216", // primary.light (1D4ED8)
  secondColor = "22, 163, 74", // secondary.light (16A34A)
  thirdColor = "249, 115, 22", // accent.light (F97316)
  fourthColor = "29, 78, 216", // primary.light (1D4ED8) (repeated for variety)
  fifthColor = "22, 163, 74", // secondary.light (16A34A) (repeated for variety)
  pointerColor = "249, 115, 22", // accent.light (F97316)
  size = "80%",
  blendingValue = "soft-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  theme?: "light" | "dark"
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}) {
  const interactiveRef = useRef<HTMLDivElement>(null)

  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    const isDarkMode = theme === "dark"

    document.body.style.setProperty(
      "--gradient-background-start",
      isDarkMode ? "rgb(17, 24, 39)" : `rgb(${gradientBackgroundStart})`
    ) // background.dark : background.light
    document.body.style.setProperty(
      "--gradient-background-end",
      isDarkMode ? "rgb(30, 41, 59)" : `rgb(${gradientBackgroundEnd})`
    ) // surface.dark : surface.light
    document.body.style.setProperty(
      "--first-color",
      isDarkMode ? "59, 130, 246" : firstColor
    ) // primary.dark : primary.light
    document.body.style.setProperty(
      "--second-color",
      isDarkMode ? "16, 185, 129" : secondColor
    ) // secondary.dark : secondary.light
    document.body.style.setProperty(
      "--third-color",
      isDarkMode ? "245, 158, 11" : thirdColor
    ) // accent.dark : accent.light
    document.body.style.setProperty(
      "--fourth-color",
      isDarkMode ? "59, 130, 246" : fourthColor
    ) // primary.dark : primary.light
    document.body.style.setProperty(
      "--fifth-color",
      isDarkMode ? "16, 185, 129" : fifthColor
    ) // secondary.dark : secondary.light
    document.body.style.setProperty(
      "--pointer-color",
      isDarkMode ? "245, 158, 11" : pointerColor
    ) // accent.dark : accent.light
    document.body.style.setProperty("--size", size)
    document.body.style.setProperty("--blending-value", blendingValue)
  }, [theme])

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return
      }
      setCurX(curX + (tgX - curX) / 20)
      setCurY(curY + (tgY - curY) / 20)
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`
    }

    move()
  }, [tgX, tgY])

  useEffect(() => {
    function handleGlobalMouseMove(event: MouseEvent) {
      if (interactiveRef.current) {
        const rect = interactiveRef.current.getBoundingClientRect()
        setTgX(event.clientX - rect.left)
        setTgY(event.clientY - rect.top)
      }
    }

    if (interactive) {
      window.addEventListener("mousemove", handleGlobalMouseMove)
    }

    return () => {
      if (interactive) {
        window.removeEventListener("mousemove", handleGlobalMouseMove)
      }
    }
  }, [interactive])

  useEffect(() => {
    // eslint-disable-next-line prefer-named-capture-group
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        />
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        />
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        />
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        />
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        />

        {interactive ? (
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
            ref={interactiveRef}
          />
        ) : null}
      </div>
    </div>
  )
}
