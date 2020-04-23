import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allContentfulBlogPost

  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`
  return (
    <div>
      <h1>{categoryHeader}</h1>
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

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Categories
export const pageQuery = graphql`
  query($category: String) {
    allContentfulBlogPost(
      sort: { fields: updatedAt, order: ASC }
      filter: { categories: { name: { eq: $category } } }
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
