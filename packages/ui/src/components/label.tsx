"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/utils"

const labelVariants = cva("text-text-light dark:text-text-dark", {
  variants: {
    variant: {
      headline: "text-4xl md:text-5xl lg:text-6xl font-bold font-serif",
      subheadline: "text-2xl md:text-3xl lg:text-4xl font-semibold font-serif",
      title: "text-2xl font-semibold ",
      subtitle: "text-lg font-medium",
      body: "text-base",
      smol: "text-sm",
    },
    shadow: {
      thick: "text-shadow-lg",
      medium: "text-shadow-md",
      none: "",
    },
  },
  defaultVariants: {
    variant: "body",
    shadow: "thick",
  },
})

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, variant, shadow, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, shadow }), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
