import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
      <Layout>
      <h1>About Me</h1>
      <p>I graduated from Thomas Jefferson High School for Science and Technology and decided to continue my education at Virginia Commonwealth University. I graduated in May 2021 with a Bachelor's of Science from VCU's School of Business with a concentration in Supply Chain Management and Analytics and a minor in Mathematics. I was also on the Dean's List in August 2020 and May 2021.</p>
      <p>I am a motivated self-starter who is passionate about reducing food waste and ensuring every person can eat the meals they need to survive. Currently, I am volunteering to help restore food security in the greater Boston, Massachusetts region with Project Restore Us. I am a third-generation Holocaust survivor and I have found my heritage more relevant as racial and economic disparities are magnified in our society each day. I have been photographing the DC region since my high-school days, but most recently fell in love with photography again in 2019 after documenting Kendall Street Company shows on the East Coast and co-founding Lattice Supply in Richmond.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`