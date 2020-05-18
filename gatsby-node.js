const path = require(`path`)
const slash = require(`slash`)
const _ = require("lodash")
const documentToPlainTextString = require("@contentful/rich-text-plain-text-renderer")
const readingTime = require("reading-time")

exports.onCreateNode = async ({ node, loadNodeContent, actions }) => {
  const { internal } = node
  const { owner, mediaType } = internal
  if (mediaType !== "text/richtext" || owner !== "gatsby-source-contentful") {
    return
  }
  const doc = JSON.parse(await loadNodeContent(node))
  const text = documentToPlainTextString(doc)
  const result = readingTime(text)
  actions.createNodeField({ node, name: "readingTime", value: result })
}

// Create Blog Page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  const result = await graphql(`
    {
      postData: allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
            categories {
              name
            }
            author {
              name
            }
          }
        }
      }
      categoryGroup: allContentfulBlogPost {
        group(field: categories___name) {
          totalCount
          fieldValue
        }
      }
      authorsGroup: allContentfulBlogPost {
        group(field: author___name) {
          totalCount
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postData.edges
  // Resolve the paths to our template
  const blogPostTemplate = path.resolve("./src/templates/blogpost.js")
  // const categoryPageTemplate = path.resolve("./src/templates/tags.js")
  const categoryPageTemplate = path.resolve("./src/templates/categories.js")
  const authorPageTemplate = path.resolve("./src/templates/author.js")

  // Then for each result we create a page.
  posts.forEach((edge, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(blogPostTemplate),
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
        prev,
        next,
      },
    })
  })

  // Extract category data from query
  const category = result.data.categoryGroup.group

  // Make category pages
  category.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: categoryPageTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Extract author data from query
  const authors = result.data.authorsGroup.group

  // Make author pages
  authors.forEach(author => {
    createPage({
      path: `/authors/${_.kebabCase(author.fieldValue)}/`,
      component: authorPageTemplate,
      context: {
        author: author.fieldValue,
      },
    })
  })
}
