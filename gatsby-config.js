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
    siteUrl: `https://blogbudz.com/`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blogbudz.com`,
        short_name: `Blogbudz`,
        start_url: `/`,
        background_color: `#0cc798`,
        theme_color: `#0cc798`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k2bz2774lau9`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blogbudz-com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
