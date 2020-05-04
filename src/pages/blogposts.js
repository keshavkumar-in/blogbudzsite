import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/${kebabCase(post.categories.name)}/${post.slug}/`}>
              {post.title}
            </Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default BlogPosts
export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          excerpt {
            excerpt
          }
          content {
            content
          }
          categories {
            name
          }
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          tags
        }
      }
    }
  }
`
