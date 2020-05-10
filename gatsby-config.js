const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Blogbudz`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Blogbudz.com`,
    twitterHandle: `@geekykeshav`,
    siteUrl: `https://blogbudz.com`,
    organization: `Blogbudz.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              wrapperStyle: `margin-top: 25px, margin-bottom: 25px, border-radius: 29px`,
              withWebp: true,
              loading: `lazy`,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blogbudz.com`,
        short_name: `Blogbudz`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#262626`,
        display: `minimal-ui`,
        icon: `src/images/blogbudz-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k2bz2774lau9`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blogbudz-com`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://blogbudz.com`,
        sitemap: `https://blogbudz.com/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // graphQL query to get siteMetadata
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl,
              author
            }
          }
        }
        `,
        feeds: [
          // an array of feeds, I just have one below
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              const {
                siteMetadata: { siteUrl },
              } = site
              return allContentfulBlogPost.edges.map(edge => {
                const {
                  node: {
                    title,
                    slug,
                    content,
                    excerpt,
                    featuredImage,
                    tags,
                    createdAt,
                    updatedAt,
                    categories,
                    author,
                  },
                } = edge
                return Object.assign({}, edge.node, {
                  language: `en-us`,
                  title,
                  description: excerpt.excerpt,
                  date: createdAt,
                  url: `${siteUrl}/${slug}`,
                  guid: `${siteUrl}/${slug}`,
                  author: `${author.name}`,
                  image: {
                    url: `https:${featuredImage.file.url}`,
                    title: `${featuredImage.title}`,
                    link: `https:${featuredImage.file.url}`,
                  },
                  custom_elements: [
                    { "content:encoded": content.childMarkdownRemark.html },
                  ],
                  category: [`${categories.name}`],
                  tags: [tags],
                })
              })
            },
            // query to get blog post data
            query: `
            {
              allContentfulBlogPost(sort: {order: DESC, fields: updatedAt}) {
                edges {
                  node {
                    id
                    slug
                    title
                    excerpt {
                      excerpt
                    }
                    content {
                      childMarkdownRemark {
                        html
                      }
                    }
                    featuredImage {
                      file {
                        url
                      }
                      title
                    }
                    categories {
                      name
                    }
                    author {
                      name
                    }
                    tags
                    createdAt(formatString: "")
                    updatedAt(formatString: "")
                  }
                }
              }
            }          
            `,
            output: "/rss.xml",
            title: `Blogbudz.com | RSS Feed`,
          },
        ],
      },
    },
  ],
}
