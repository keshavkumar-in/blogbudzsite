import React from "react"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Categories = ({ pageContext, data }) => {
  const { category, intro } = pageContext
  const { edges, totalCount } = data.allContentfulBlogPost

  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <Layout>
      <SEO title={category} keywords={[`gatsby`, `application`, `react`]} />
      {/* <h1>{categoryHeader}</h1> */}
      <div className="membership-plans membership-header section-profile is-cover">
        <div
          className="profile-wrap is-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib&#x3D;rb-1.2.1&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;2000&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ)`,
          }}
        >
          <h1>{category}</h1>
          <h2>{totalCount} Posts</h2>
        </div>
      </div>
      <div id="loop" className="section-loop wrap">
        <div className="items-wrap membership-cards flex">
          {edges.map(({ node }) => {
            return (
              <Link
                to={`/${kebabCase(node.categories.name)}/${node.slug}/`}
                className="membership-card"
                key={node.id}
              >
                <div className="membership-card-content">
                  <div
                    className="item-image"
                    style={{
                      backgroundImage: `url(${node.featuredImage.file.url})`,
                    }}
                  ></div>
                  <div
                    className="author-name"
                    style={{
                      width: "4em",
                      background: "white",
                      padding: "3px 12px",
                      borderRadius: "29px",
                    }}
                  >
                    {node.author.name}
                  </div>
                  <h2 className="membership-card-title">{node.title}</h2>
                  <div
                    className="membership-card-options"
                    style={{ color: "white" }}
                  >
                    {node.excerpt.excerpt}
                  </div>
                  <p style={{ color: "white" }}>{node.updatedAt}</p>
                  <div className="membership-card-button-wrap">
                    <div className="membership-card-button global-button read-more-button">
                      Read now
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="membership-footer">
          <Link to="/categories">All Categories</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Categories
export const pageQuery = graphql`
  query($category: String) {
    allContentfulBlogPost(
      sort: { fields: updatedAt, order: DESC }
      filter: { categories: { name: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          id
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
          excerpt {
            excerpt
          }
          updatedAt(fromNow: true)
        }
      }
    }
  }
`
