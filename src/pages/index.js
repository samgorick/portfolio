import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Projects />
    </Layout>
  )
}