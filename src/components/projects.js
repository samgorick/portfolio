import React from "react"
import projectStyles from "./projects.module.css"
import fridge from "../components/images/whats-in-your-fridge.png"
import budget from "../components/images/budget-better.png"
import play from "../components/images/play-with-words.png"
import record from "../components/images/record-it.png"
import CardDeck from "react-bootstrap/CardDeck"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = props => (
  <Card>
    <Card.Img
      variant="top"
      className={projectStyles.image}
      src={props.projectImg}
      alt={props.title}
    />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button block href={props.link}>Demo
      </Button>
    </Card.Footer>
  </Card>
)

export default function Projects() {
  return (
    <CardDeck>
      <Project
        projectImg={budget}
        title="Budget Better"
        description="Budgeting is very important, but also quite painful. Budget Better helps you do just that - budget better!"
        link="https://www.youtube.com/watch?v=rXsxRk8N7XY"
      />
      <Project
        projectImg={fridge}
        title="What's In Your Fridge?"
        description="Recipe recommendations based on what's in your fridge. Reduce your food waste!"
        link="https://whats-in-your-fridge.netlify.app/"
      />
      <Project
        projectImg={record}
        title="Record It!"
        description="Write, tag and save notes you need to remember. Search for friends, ask to follow them, and keep up to date with their notes too!"
        link="https://record-it.netlify.app/"
      />
      <Project
        projectImg={play}
        title="Play With Words"
        description="Fun and addictive word game - create as many valid words as you can in 2 minutes!"
        link="https://play-with-words-samgorick.netlify.app/"
      />
    </CardDeck>
  )
}
