import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"

export default function Home() {
  return (
    <Layout style={{ color: `purple` }}>
      <h1>Welcome!</h1>
      <p>Portfolio for Sam Gorick</p>
      <p>Full Stack Developer // Product Manager</p>
      <p>Chicago // London</p>
      <Projects />
    </Layout>
  )
}