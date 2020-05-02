import React from "react"
// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AuthorPage = ({ data }) => {
  const authorsData = data.allContentfulAuthor.edges

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
    allContentfulAuthor {
      edges {
        node {
          id
          name
          image {
            fluid(toFormat: WEBP) {
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
