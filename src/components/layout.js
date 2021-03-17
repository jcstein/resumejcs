import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/global.css"
import Container from "../components/container"
import { Helmet } from "react-helmet"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem'}}>
      <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container>
      <div className="flexThisBox">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Josh Stein | Resume</title>
          <link rel="canonical" href="http://jcstein.dev" />
        </Helmet>
      <header>
        <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}> 
      <ListLink to="/about/">About</ListLink> 
      <ListLink to="/contact/">Contact</ListLink> 
      </ul>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p></p>
      © {new Date().getFullYear()} Copyright Joshua Stein. Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
      </div>
      </Container>
  )
}