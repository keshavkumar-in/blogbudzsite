import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const AuthorPage = ({ data }) => {
  const authorsData = data.allContentfulBlogPost.group

  return (
    <div>
      <SEO title="All Authors" />
      <div>
        <h1>Authors</h1>
        <ul>
          {authorsData.map(author => (
            <li key={author.fieldValue}>
              <Link to={`/authors/${kebabCase(author.fieldValue)}/`}>
                {author.fieldValue} ({author.totalCount})
              </Link>
              {/* <img src={category.nodes.featuredImage.file.url} alt="..." /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AuthorPage

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: updatedAt, order: ASC }) {
      group(field: author___name, limit: 1) {
        totalCount
        fieldValue
      }
    }
  }
`
