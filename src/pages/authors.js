import React from "react"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AuthorPage = ({ data }) => {
  const authorsData = data.allContentfulBlogPost.group

  return (
    <Layout>
      <SEO title="All Authors" />
      <div className="membership-plans membership-header section-profile is-cover">
        <div
          className="profile-wrap is-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib&#x3D;rb-1.2.1&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;2000&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ)`,
          }}
        >
          <h1>Authors</h1>
        </div>
      </div>
      <div id="loop" className="section-loop wrap">
        <div className="items-wrap membership-cards flex">
          {authorsData.map(author => (
            <Link
              to={`/authors/${kebabCase(author.fieldValue)}/`}
              className="membership-card monthly"
              key={author.fieldValue}
            >
              <div className="membership-card-content">
                {/* <div
                    className="item-image"
                    style={{
                      backgroundImage: `url(${node.featuredImage.file.url})`,
                    }}
                  ></div> */}

                <h2 className="membership-card-title">{author.fieldValue}</h2>
                <h3>Posts Written: {author.totalCount}</h3>
                <div className="membership-card-button-wrap">
                  <div className="membership-card-button global-button read-more-button">
                    Visit Author Posts
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
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
