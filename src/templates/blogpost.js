import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPost = ({ data }) => {
  const { title, content, featuredImage, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={featuredImage.file.url} />
        <p className="body-text">{content.content}</p>
        <div className="tags">
          <strong>Tags: </strong>
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      content {
        content
      }
      featuredImage {
        file {
          url
        }
      }
      tags
    }
  }
`
