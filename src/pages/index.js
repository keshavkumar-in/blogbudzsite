import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import kebabCase from "lodash/kebabCase"

const IndexPage = ({ data }) => {
  const category = data.allContentfulCategory.edges
  return (
    <Layout>
      <SEO
        title="Blogbudz"
        url="https://blogbudz.com/"
        keywords={[
          `blogbudz`,
          `blog`,
          `technology blog`,
          `social media blog`,
          `lifestyle blog`,
          `latest news`,
          `business blog`,
          `entertainment blog`,
        ]}
      />
      <Slider />
      <div id="loop" className="section-loop wrap is-featured">
        <div className="items-wrap flex">
          <div class="item-wrap flex post tag-story tag-hash-orange tag-hash-post-orange tag-hash-cta-violet no-image">
            <article>
              <a
                href="https://coronalivestatus.info/"
                className="item-link-overlay"
                aria-label="The future of architecture is culture"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <h2>
                <a
                  href="https://coronalivestatus.info/"
                  class="white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COVID - 19 Cases Tracker INDIA
                </a>
              </h2>
              <div className="item-meta white is-primary-tag is-members-label">
                State &amp; District wise live COVID-19 Cases Tracker in India
              </div>
            </article>
          </div>
          {category.map(edge => (
            <div className="item-wrap flex is-image" key={edge.node.id}>
              <article>
                <Link
                  to={`/categories/${kebabCase(edge.node.name)}/`}
                  className="item-link-overlay"
                  aria-label={edge.node.name}
                ></Link>
                <div
                  className="item-image"
                  style={{
                    backgroundImage: `url(${edge.node.image.fluid.src})`,
                  }}
                ></div>
                <h2>
                  <Link
                    to={`/categories/${kebabCase(edge.node.name)}/`}
                    className="white"
                  >
                    {edge.node.name}
                  </Link>
                </h2>
                <div className="item-meta white is-primary-tag is-members-label">
                  {edge.node.intro.intro}
                  {/* <span>by</span>
                    <a class="author-name white" href="/author/patricia/">
                      Patricia Jenkins
                    </a>
                    <time datetime="2018-05-17">2 years ago</time> */}
                </div>
                {/* <a class="primary-tag global-tag white" href="/tag/story/">
                    Story
                  </a> */}
                {/* <span class="global-tag primary-tag white">
                    Total Posts: {totalpost}
                  </span> */}
              </article>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  {
    allContentfulCategory(
      filter: { name: { ne: "Uncategorized" } }
      sort: { fields: blog_post___updatedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
          intro {
            intro
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
