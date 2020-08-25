import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Header from "../components/header"
import Container from "react-bootstrap/Container"

export default function Home() {
  return (
    <Container fluid>
      <Layout>
        <Header />
        <Projects />
      </Layout>
    </Container>
  )
}
