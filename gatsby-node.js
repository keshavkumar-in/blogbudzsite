const path = require(`path`)
const slash = require(`slash`)
const _ = require("lodash")

// Create Blog Page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  const result = await graphql(`
    {
      postData: allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            id
            slug
            categories {
              name
            }
          }
        }
      }
      categoryGroup: allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        group(field: categories___name) {
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
  // Then for each result we create a page.
  posts.forEach((edge, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: `/${_.kebabCase(edge.node.categories.name)}/${edge.node.slug}/`,
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
}
