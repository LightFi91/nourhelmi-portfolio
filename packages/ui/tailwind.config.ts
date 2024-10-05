import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Pick<Config, "presets" | "content" | "plugins"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
  plugins: [animate],
}

export default config
