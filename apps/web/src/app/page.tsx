/* eslint-disable react/jsx-fragments */
import { Divider } from "@/components/common/divider"
import { About } from "@/components/content/about"
import { Intro } from "@/components/content/intro"
import { Projects } from "@/components/content/projects"
import { Skills } from "@/components/content/skills"
import { Fragment } from "react"

export default function Page(): JSX.Element {
  return (
    <Fragment>
      <Intro />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />

      <section
        className="min-h-screen flex items-center justify-center z-content"
        id="contact"
      >
        <h2>Contact Section</h2>
      </section>
    </Fragment>
  )
}
