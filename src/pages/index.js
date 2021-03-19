import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
       <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
         <span role="img" aria-label="wave">👋</span> Hi, I'm Josh
        </h1>
        <h2>I'm a full-stack engineer who specializes in lightweight, functional web design.</h2>
        <h2>Think of... an all-in-one technology consultant for non-profits, restaurants and start-ups to establish their brands in the digital and physical spaces.</h2>
        <h2>I'm passionate about reducing food waste, preserving our home planet and ensuring every person can eat the meals they need to survive on it.</h2>
        <h4>Let's solve some problems <Link to="/contact/">together</Link>.</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`