import "@repo/ui/styles.css"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nour Helmi",
  description: "L6 ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
