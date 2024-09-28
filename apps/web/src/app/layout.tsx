import "@repo/ui/styles.css"
import { Background } from "components/general/background"
import ThemeSwitch from "components/general/theme-switch"
import type { Metadata } from "next"
import Footer from "../components/general/footer"
import Header from "../components/general/header"
import ActiveSectionContextProvider from "../context/active-section-context"
import ThemeContextProvider from "../context/theme-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nour Helmi",
  description: "CTO, Startups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html className="!scroll-smooth" lang="en">
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <body className="relative flex flex-col min-h-screen">
            <RootContent>{children}</RootContent>
          </body>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </html>
  )
}

function RootContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      {children}
      <ThemeSwitch />
      <Footer />
    </>
  )
}
