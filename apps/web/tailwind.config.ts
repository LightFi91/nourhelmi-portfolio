// tailwind config is required for editor support

// eslint-disable-next-line import/no-unresolved
import baseConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [baseConfig],
}

export default config
