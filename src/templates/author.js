import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Author = ({ pageContext, data }) => {
  const { author } = pageContext
  const { edges, totalCount } = data.allContentfulBlogPost
  const { id, name, intro, image } = data.contentfulAuthor
  return (
    <Layout>
      <SEO
        title={author}
        description={intro.intro}
        image={image.fluid.src}
        keywords={[
          `blogbudz`,
          `blogging sites`,
          `latest technology news`,
          `${name}`,
          `tech author`,
          `blogbudz author`,
        ]}
      />
      <div className="membership-plans membership-header section-profile is-cover">
        <div
          className="profile-wrap is-cover"
          style={{
            backgroundImage: `url(${image.fluid.src})`,
          }}
        >
          <h1>{author}</h1>
          <h5>{intro.intro}</h5>
          <h2>{totalCount} Posts</h2>
        </div>
      </div>
      <div id="loop" className="section-loop wrap">
        <div className="items-wrap membership-cards flex">
          {edges.map(({ node }) => {
            return (
              <Link
                to={`/${node.slug}/`}
                className="membership-card flex"
                key={node.id}
              >
                <div className="membership-card-content">
                  <div
                    className="item-image"
                    style={{
                      backgroundImage: `url(${node.featuredImage.fluid.src})`,
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
          <Link to="/authors">All Authors</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Author

export const pageQuery = graphql`
  query($author: String) {
    allContentfulBlogPost(
      sort: { fields: updatedAt, order: DESC }
      filter: { author: { name: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
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

    contentfulAuthor(name: { eq: $author }) {
      id
      name
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      intro {
        intro
      }
    }
  }
`
