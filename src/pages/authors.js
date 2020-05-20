import React from "react"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AuthorPage = ({ data }) => {
  const authorsData = data.allContentfulAuthor.edges
  const authoraHeader = data.contentfulAsset
  return (
    <Layout>
      <SEO
        title="All Authors"
        keywords={[
          `blogbudz`,
          `authors`,
          `blog`,
          `technology blog`,
          `social media blog`,
          `lifestyle blog`,
          `latest news`,
          `business blog`,
          `entertainment blog`,
        ]}
        description="All Authors - Blogbudz. Blogbudz covers the latest tech news, Popular & latest gadgets, Coding, Top Lists, Social Media updates, Product Reviews, How to, Business news, health tips, lifestyle."
      />
      <div className="membership-plans membership-header section-profile is-cover">
        <div
          className="profile-wrap is-author"
          style={{
            backgroundImage: `url(${authoraHeader.file.url})`,
            minHeight: "60vh",
          }}
        >
          <h1>Authors</h1>
        </div>
      </div>
      <div id="loop" className="section-loop wrap">
        <div className="items-wrap membership-cards flex">
          {authorsData.map(({ node }) => {
            return (
              <Link
                to={`/authors/${kebabCase(node.name)}/`}
                className="membership-card"
                key={node.id}
              >
                <div className="membership-card-content">
                  <div
                    className="item-image"
                    style={{
                      backgroundImage: `url(${node.image.fluid.src})`,
                    }}
                  ></div>

                  <h2 className="membership-card-title">{node.name}</h2>
                  <h5 style={{ color: "white" }}>{node.intro.intro}</h5>
                  <div className="membership-card-button-wrap">
                    <div className="membership-card-button global-button read-more-button">
                      Visit Author Posts
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AuthorPage

export const pageQuery = graphql`
  {
    contentfulAsset(title: { eq: "Authors Header" }) {
      title
      file {
        url
      }
    }
    allContentfulAuthor {
      edges {
        node {
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
          github
          facebook
          website
        }
      }
    }
  }
`
