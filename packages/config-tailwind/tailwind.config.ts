import type { Config } from "tailwindcss"

// We want each package to be responsible for its own content.
const config: Omit<Config, "content" | "plugins"> = {
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
      },
    },
  },
}
export default config
