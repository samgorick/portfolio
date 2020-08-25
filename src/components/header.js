import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome!</h1>
        <h3>Sam Gorick personal site, Software Engineer // Product Manager</h3>
      </Container>
    </Jumbotron>
  )
}

export default Header
