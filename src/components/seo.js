import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import defaultOpenGraphImage from "../images/blogbudz-icon.png"
// import SchemaOrg from "./SchemaOrg"

function SEO({ description, lang, meta, image, title, keywords, isBlogPost }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            organization
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImageUrl = "https:" + (image || defaultOpenGraphImage)
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: isBlogPost ? `article` : `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: ogImageUrl,
          },
          {
            property: `og:image:width`,
            content: "1200",
          },
          {
            property: `og:image:height`,
            content: "630",
          },
          {
            property: `twitter:image`,
            content: ogImageUrl,
          },
          {
            property: `image`,
            content: ogImageUrl,
          },
          {
            property: "og:image:alt",
            content: title,
          },
          {
            property: "twitter:image:alt",
            content: title,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : []
          )
          .concat(meta)}
      />
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
