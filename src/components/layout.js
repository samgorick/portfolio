import React from "react"
import { Link } from "gatsby"
import resume from '../components/images/resume.pdf'
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <header>
        <Link to="/" className="home-link">
          <h3 className="home-link-header">Home</h3>
        </Link>
        <ul>
          <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}