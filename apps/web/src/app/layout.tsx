/* eslint-disable react/jsx-fragments */
import { Background } from "@/components/common/background"
import ThemeSwitch from "@/components/common/theme-switch"
import "@repo/ui/styles.css"
import type { Metadata } from "next"
import { Fragment } from "react"
import Footer from "../components/common/footer"
import Header from "../components/common/header"
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
      <head>
        <style>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          html {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </head>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <body className="relative flex flex-col items-center min-h-screen scroll-smooth">
            <RootContent>{children}</RootContent>
          </body>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </html>
  )
}

function RootContent({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Background />
      <Header />
      {children}
      <ThemeSwitch />
      <Footer />
    </Fragment>
  )
}
