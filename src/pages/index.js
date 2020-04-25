import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import kebabCase from "lodash/kebabCase"

const IndexPage = ({ data }) => {
  const categoryData = data.allContentfulBlogPost.group
  return (
    <Layout>
      <SEO title="Wrixby" keywords={[`gatsby`, `application`, `react`]} />
      <Slider />
      <div id="loop" class="section-loop wrap is-featured">
        <div class="items-wrap flex">
          {categoryData.map(category => (
            <div key={category.fieldValue}>
              <div class="item-wrap flex post is-image">
                <article>
                  <Link
                    to={`/categories/${kebabCase(category.fieldValue)}/`}
                    className="item-link-overlay"
                    aria-label={category.fieldValue}
                  ></Link>
                  <div
                    className="item-image"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1524222717473-730000096953?ixlib&#x3D;rb-0.3.5&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ&amp;s&#x3D;8b1938d0d4ef26e336db84568708980a)",
                    }}
                  ></div>
                  <h2>
                    <Link
                      to={`/categories/${kebabCase(category.fieldValue)}/`}
                      className="white"
                    >
                      {category.fieldValue}
                    </Link>
                  </h2>
                  {/* <div class="item-meta white is-primary-tag is-members-label">
                    <span>by</span>
                    <a class="author-name white" href="/author/patricia/">
                      Patricia Jenkins
                    </a>
                    <time datetime="2018-05-17">2 years ago</time>
                  </div> */}
                  {/* <a class="primary-tag global-tag white" href="/tag/story/">
                    Story
                  </a> */}
                  <span class="members-label white">
                    Total Posts: {category.totalCount}
                  </span>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="section-load-more">
        <div class="load-more">
          <span>Load more</span>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: updatedAt, order: ASC }) {
      group(field: categories___name, limit: 1) {
        totalCount
        fieldValue
        edges {
          node {
            id
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
