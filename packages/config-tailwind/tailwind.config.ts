import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}

const cornerGlow = ({
  addUtilities,
}: {
  addUtilities: (utilities: Record<string, any>, variants: string[]) => void
}) => {
  const newUtilities = {
    ".corner-glow": {
      position: "relative",
      overflow: "hidden",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundImage: "var(--tw-gradient-stops)",
      },
      "&::before": {
        top: "-150px",
        left: "-150px",
      },
      "&::after": {
        top: "-150px",
        right: "-150px",
      },
    },
  }
  addUtilities(newUtilities, ["responsive", "hover"])
}

// We want each package to be responsible for its own content.
const config: Omit<Config, "content" | "plugins"> = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        display: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
        "corner-glow":
          "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
      },
      colors: {
        primary: {
          light: "#1D4ED8", // Richer Blue for light theme
          dark: "#3B82F6", // Same Blue for dark theme
        },
        secondary: {
          light: "#cbd5e1", // Balanced Green for light theme
          dark: "#10B981", // Same Green for dark theme
        },
        background: {
          light: "#e5e7eb", // Pure White for light theme background
          dark: "#111827", // Dark Gray for dark theme background
        },
        surface: {
          light: "#f1faee", // Soft Gray for light theme surfaces
          dark: "#1E293B", // Mid-tone Gray for dark theme surfaces
        },
        text: {
          light: "#111827", // Nearly Black for light theme text
          dark: "#F9FAFB", // Near White for dark theme text
        },
        accent: {
          light: "#F97316", // Bright Orange for light theme accent
          dark: "#F59E0B", // Amber for dark theme accent
        },
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      zIndex: {
        background: "-1",
        content: "20",
        header: "99",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [
    cornerGlow,
    addVariablesForColors,
    animate,
    require("tailwindcss-textshadow"),
  ],
}

export default config
