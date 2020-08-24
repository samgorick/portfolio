import React from "react"
import projectStyles from "./projects.module.css"
import fridge from "../components/images/whats-in-your-fridge.png"
import budget from "../components/images/budget-better.png"
import play from "../components/images/play-with-words.png"
import record from "../components/images/record-it.png"
import Carousel from "react-bootstrap/Carousel"

const Project = props => (
  <a href={props.link} target="_blank" rel="noreferrer">
    <div className={projectStyles.contentContainer}>
      <img
        className={projectStyles.image}
        src={props.projectImg}
        alt={props.title}
      />
      <div className={projectStyles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  </a>
)

export default function Projects() {
  return (
    <>
      <div className={projectStyles.projectContainer}>
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
      </div>
    </>
  )
}
