import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus } from "gatsby-plugin-disqus"
import kebabCase from "lodash/kebabCase"
import Share from "../components/share"
import { ArticleJsonLd, SpeakableJsonLd } from "gatsby-plugin-next-seo"

const BlogPost = ({ pageContext, data }) => {
  const {
    id,
    title,
    slug,
    content,
    excerpt,
    featuredImage,
    tags,
    updatedAt,
    categories,
    author,
    createdAt,
  } = data.contentfulBlogPost
  const ogImage = data.ogImage.featuredImage
  const updatedDate = data.updatedDate.updatedAt
  const {
    site: {
      siteMetadata: { siteUrl, twitterHandle },
    },
  } = data
  const { prev, next } = pageContext
  let disqusConfig = {
    url: `${siteUrl}/${slug}`,
    identifier: id,
    title: title,
  }
  return (
    <Layout>
      <SEO
        title={title}
        url={`${siteUrl}/${slug}`}
        description={excerpt.excerpt}
        image={ogImage.fixed.src}
        keywords={tags}
        isBlogPost
      />
      <ArticleJsonLd
        url={`https://blogbudz.com/${slug}`}
        headline={title}
        images={`https:${featuredImage.fluid.src}`}
        datePublished={createdAt}
        dateModified={updatedAt}
        authorName={author.name}
        publisherName="Blogbudz"
        publisherLogo="https://blogbudz.com/icons/icon-512x512.png?v=978dc3d723376ac16e7d63f792e37824"
        description={excerpt.excerpt}
        overrides={{
          "@type": "BlogPosting", // set's this as a blog post.
        }}
      />
      <SpeakableJsonLd cssSelector={["#posttitle", "#post-wrap"]} />
      <article>
        <div className="section-featured is-featured-image">
          <div
            className="featured-image"
            style={{
              backgroundImage: `url(${featuredImage.fluid.src})`,
            }}
          ></div>
          <div className="featured-wrap flex">
            <div className="featured-content">
              <div className="tags-wrap">
                {/* <span className="featured-label global-tag">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.9712403,8.05987765 L16.2291373,8.05987765 L12.796794,0.459688839 C12.5516266,-0.153229613 11.4483734,-0.153229613 11.0806223,0.459688839 L7.64827899,8.05987765 L0.906176009,8.05987765 C0.538424938,8.05987765 0.170673866,8.30504503 0.0480901758,8.6727961 C-0.0744935148,9.04054717 0.0480901758,9.40829825 0.293257557,9.65346563 L5.31918887,14.3116459 L3.11268244,22.4021694 C2.99009875,22.7699205 3.11268244,23.1376716 3.48043351,23.382839 C3.72560089,23.6280063 4.21593565,23.6280063 4.46110303,23.5054227 L11.9387082,19.2149935 L19.4163133,23.5054227 C19.538897,23.6280063 19.6614807,23.6280063 19.906648,23.6280063 C20.1518154,23.6280063 20.2743991,23.5054227 20.5195665,23.382839 C20.7647339,23.1376716 20.8873176,22.7699205 20.8873176,22.4021694 L18.6808111,14.3116459 L23.7067424,9.65346563 C23.9519098,9.40829825 24.0744935,9.04054717 23.9519098,8.6727961 C23.7067424,8.30504503 23.3389914,8.05987765 22.9712403,8.05987765 Z" />
                  </svg>
                  <span>Featured</span>
                </span> */}
                {categories.map(categories => (
                  <Link
                    className="post-tag global-tag"
                    to={`/categories/${kebabCase(categories.name)}/`}
                    key={categories.name}
                  >
                    {categories.name}
                  </Link>
                ))}
              </div>
              <h1 className="white posttitle">{title}</h1>
              <div className="item-meta white">
                <span>by </span>
                <Link to={`/authors/${kebabCase(author.name)}/`}>
                  {author.name}
                </Link>
                <br />
                <time dateTime={updatedDate}>{updatedDate}</time>
                <span className="reading-time">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1907692,24 C4.5625628,24 0,19.4374372 0,13.8092308 C0,8.18102433 4.5625628,3.61846154 10.1907692,3.61846154 C15.8189757,3.61846154 20.3815385,8.18102433 20.3815385,13.8092308 C20.3815385,19.4374372 15.8189757,24 10.1907692,24 Z M10.1907692,22 C14.7144062,22 18.3815385,18.3328677 18.3815385,13.8092308 C18.3815385,9.28559383 14.7144062,5.61846154 10.1907692,5.61846154 C5.6671323,5.61846154 2,9.28559383 2,13.8092308 C2,18.3328677 5.6671323,22 10.1907692,22 Z"
                      id="Oval"
                    ></path>
                    <path
                      d="M7.53230769,2.32923077 C6.98002294,2.32923077 6.53230769,1.88151552 6.53230769,1.32923077 C6.53230769,0.776946019 6.98002294,0.329230769 7.53230769,0.329230769 L12.9225711,0.329230769 C13.4748559,0.329230769 13.9225711,0.776946019 13.9225711,1.32923077 C13.9225711,1.88151552 13.4748559,2.32923077 12.9225711,2.32923077 L7.53230769,2.32923077 Z"
                      id="Line-2"
                    ></path>
                    <path
                      d="M13.2928932,9.29289322 C13.6834175,8.90236893 14.3165825,8.90236893 14.7071068,9.29289322 C15.0976311,9.68341751 15.0976311,10.3165825 14.7071068,10.7071068 L10.897876,14.5163376 C10.5073517,14.9068618 9.87418674,14.9068618 9.48366245,14.5163376 C9.09313816,14.1258133 9.09313816,13.4926483 9.48366245,13.102124 L13.2928932,9.29289322 Z"
                      id="Line"
                    ></path>
                  </svg>{" "}
                  {content.childMarkdownRemark.fields.readingTime.text}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-post wrap">
          <div className="post-wrap">
            <div
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
            <div className="tags">
              <strong>Tags: </strong>
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="section-post-authors post-authors flex">
            <div className="author-label">
              <span>Author</span>
            </div>
            <div className="author-wrap flex">
              <Link
                to={`/authors/${kebabCase(author.name)}/`}
                className="item-link-overlay"
              ></Link>
              <div
                className="author-profile-image"
                style={{
                  backgroundImage: `url(${author.image.fluid.src})`,
                }}
              ></div>
              <div className="author-content">
                <h4 className="is-bio no-cover-image">
                  <a href={author.name}>{author.name}</a>
                </h4>
                <p>{author.intro.intro}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <a href="https://www.buymeacoffee.com/blogbudz" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt="Buy Me A Coffee"
                style={{ height: "51px", width: "217px", borderRadius: "15px" }}
              />
            </a>
          </div> */}

          <div className="post-meta">
            <div className="post-share">
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${siteUrl}/${slug}`,
                    title,
                  },
                }}
                tags={tags}
              />
              {/* <a
                className="twitter"
                href="https://twitter.com/intent/tweet?text=I'm%20passionate%20about%20food%2C%20the%20tradition%20of%20it%2C%20cooking%20it%2C%20sharing%20it&amp;url=https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                onClick={`window.open(this.href, 'twitter-share', 'width=550,height=235');return false;`}
              >
                <svg
                  className="global-svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                className="facebook"
                href="https://www.facebook.com/sharer/sharer.php?u=https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                onClick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
              >
                <svg
                  className="global-svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                </svg>
              </a>
              <a className="copy" id="copy" data-clipboard-target="#link-value">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.33 13.04h-4.155v4.154h-2.078v-4.155H9.942v-2.077h4.155V6.806h2.078v4.156h4.154v2.077zM8.902 18.58a6.582 6.582 0 0 1 0-13.162c.068 0 .135.007.202.009a8.874 8.874 0 0 0-.001 13.144c-.067 0-.133.009-.2.009zm6.194-15.484a8.876 8.876 0 0 0-3.087.56A8.904 8.904 0 0 0 0 12a8.903 8.903 0 0 0 8.903 8.905 8.893 8.893 0 0 0 3.103-.563 8.854 8.854 0 0 0 3.09.563A8.903 8.903 0 0 0 24 12a8.904 8.904 0 0 0-8.903-8.903z" />
                </svg>
              </a>
              <span className="copy-popup">The link has been copied!</span>
              <input
                type="text"
                defaultValue={`https://blogbudz.com/${slug}`}
                id="link-value"
              /> */}
            </div>
          </div>
        </div>
      </article>
      <aside className="section-prev-next">
        <div className="prev-next-wrap">
          {prev && (
            <Link to={`/${prev.slug}/`} className="prev-post post is-image">
              <div
                className="prev-next-image"
                style={{
                  backgroundImage: `url(
                    ${prev.featuredImage.fluid.src}
                  )`,
                }}
              ></div>
              <section className="prev-next-title">
                <h5>Newer Post</h5>
                <h3>{prev.title}</h3>
              </section>
            </Link>
          )}
          {next && (
            <Link to={`/${next.slug}/`} className="next-post post is-image">
              <div
                className="prev-next-image"
                style={{
                  backgroundImage: `url(
                    ${next.featuredImage.fluid.src}
                  )`,
                }}
              ></div>
              <section className="prev-next-title">
                <h5>Older Post</h5>
                <h3>{next.title}</h3>
              </section>
            </Link>
          )}
        </div>
      </aside>
      <div className="section-disqus">
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      excerpt {
        excerpt
      }
      content {
        childMarkdownRemark {
          html
          fields {
            readingTime {
              text
            }
          }
        }
      }
      categories {
        name
      }
      author {
        name
        intro {
          intro
        }
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
      createdAt(formatString: "")
      updatedAt(formatString: "")
    }
    ogImage: contentfulBlogPost(slug: { eq: $slug }) {
      featuredImage {
        fixed(width: 300, height: 300) {
          src
        }
      }
    }
    updatedDate: contentfulBlogPost(slug: { eq: $slug }) {
      updatedAt(fromNow: true)
    }
  }
`
