import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const CategoryPage = ({ data }) => {
  const categoryData = data.allContentfulBlogPost.group

  return (
    <div>
      <SEO title="All Categories" />
      <div>
        <h1>Categories</h1>
        <ul>
          {categoryData.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
              {/* <img src={category.nodes.featuredImage.file.url} alt="..." /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default CategoryPage

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: updatedAt, order: ASC }) {
      group(field: categories___name, limit: 1) {
        totalCount
        fieldValue
        nodes {
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
