/* eslint-disable react/jsx-fragments */
import { About } from "components/content/about"
import { Intro } from "components/content/intro"
import { Divider } from "components/general/divider"
import { Fragment } from "react"

export default function Page(): JSX.Element {
  return (
    <Fragment>
      <Intro />
      <About />
      <Divider className="my-8" />
      <section
        className="min-h-screen flex items-center justify-center z-content"
        id="about"
      >
        <h2>About Section</h2>
      </section>
      <section
        className="min-h-screen flex items-center justify-center z-content"
        id="projects"
      >
        <h2>Projects Section</h2>
      </section>
      <section
        className="min-h-screen flex items-center justify-center z-content"
        id="skills"
      >
        <h2>Skills Section</h2>
      </section>
      <section
        className="min-h-screen flex items-center justify-center z-content"
        id="contact"
      >
        <h2>Contact Section</h2>
      </section>
    </Fragment>
  )
}
