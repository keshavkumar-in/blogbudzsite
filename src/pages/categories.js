import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoryPage = ({ data }) => {
  const categoryData = data.allContentfulCategory.edges

  return (
    <Layout>
      <SEO
        title="All Categories"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div class="section-page-tags wrap">
        <div class="page-tags-wrap flex">
          <div class="page-tags-title">
            <h4>Our top categories</h4>
          </div>
          {categoryData.map(category => (
            <div class="page-tag-wrap top is-image" key={category.node.name}>
              <Link
                to={`/categories/${kebabCase(category.node.name)}/`}
                class="item-link-overlay"
              ></Link>
              <div
                class="page-tag-image"
                style={{
                  backgroundImage: `url(${category.node.image.fluid.src})`,
                }}
              ></div>
              <h2>
                <Link to={`/categories/${kebabCase(category.node.name)}/`}>
                  {category.node.name}
                </Link>
              </h2>
              <p>{category.node.intro.intro}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    allContentfulCategory(filter: { name: { ne: "Uncategorized" } }) {
      edges {
        node {
          name
          intro {
            intro
          }
          image {
            fluid(toFormat: WEBP) {
              src
            }
          }
        }
      }
    }
  }
`
