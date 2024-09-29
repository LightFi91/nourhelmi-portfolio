"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useActiveSectionContext } from "../../context/active-section-context"
import { links } from "../../lib/data"

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="z-header">
      <motion.div
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-10 left-1/2 h-[4.5rem] rounded-none border border-surface-light border-opacity-40 bg-surface-light bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-surface-dark dark:border-surface-dark/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-text-light sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-text-dark">
          {links.map((link) => (
            <motion.li
              animate={{ y: 0, opacity: 1 }}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              key={link.hash}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-primary-light transition dark:hover:text-primary-dark${
                  activeSection === link.name
                    ? " text-primary-light dark:text-primary-dark"
                    : ""
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-background-light rounded-full absolute inset-0 -z-10 dark:bg-background-dark"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
