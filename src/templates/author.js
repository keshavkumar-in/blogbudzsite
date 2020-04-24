import React from "react"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Author = ({ pageContext, data }) => {
  const { author } = pageContext
  const { edges, totalCount } = data.allContentfulBlogPost

  const authorHeader = `"${author}" has written ${totalCount} post${
    totalCount === 1 ? "" : "s"
  }.`
  return (
    <div>
      <h1>{authorHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <li key={node.title}>
              <ing src={node.featuredImage.file.url} alt="..." />
              <Link to={`/${kebabCase(node.categories.name)}/${node.slug}/`}>
                {node.title}
              </Link>
              <p>{node.author.name}</p>
              <p>{node.categories.name}</p>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/">All tags</Link>
    </div>
  )
}

export default Author

export const pageQuery = graphql`
  query($author: String) {
    allContentfulBlogPost(
      sort: { fields: updatedAt, order: ASC }
      filter: { author: { name: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          featuredImage {
            file {
              url
            }
          }
          author {
            name
          }
          categories {
            name
          }
        }
      }
    }
  }
`
