module.exports = {
  siteMetadata: {
    title: `Wrixby Blog`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Keshav Kumar`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k2bz2774lau9`,
        accessToken: `6firBo1HKrBdw-pxCTnATrZ-m6-yGrSoSLnmX2EPqmA`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ghost-194`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
