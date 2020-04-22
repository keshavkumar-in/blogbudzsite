import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const BlogPost = ({ data }) => {
  const {
    title,
    content,
    featuredImage,
    tags,
    updatedAt,
  } = data.contentfulBlogPost

  let disqusConfig = {
    url:
      "https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/",
    identifier: "ghost-194",
  }
  return (
    <Layout>
      <SEO title={title} />
      <article>
        <div class="section-featured is-featured-image">
          <div
            class="featured-image"
            style={{
              backgroundImage: `url(${featuredImage.file.url})`,
            }}
          ></div>
          <div class="featured-wrap flex">
            <div class="featured-content">
              <div class="tags-wrap">
                <span class="featured-label global-tag">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.9712403,8.05987765 L16.2291373,8.05987765 L12.796794,0.459688839 C12.5516266,-0.153229613 11.4483734,-0.153229613 11.0806223,0.459688839 L7.64827899,8.05987765 L0.906176009,8.05987765 C0.538424938,8.05987765 0.170673866,8.30504503 0.0480901758,8.6727961 C-0.0744935148,9.04054717 0.0480901758,9.40829825 0.293257557,9.65346563 L5.31918887,14.3116459 L3.11268244,22.4021694 C2.99009875,22.7699205 3.11268244,23.1376716 3.48043351,23.382839 C3.72560089,23.6280063 4.21593565,23.6280063 4.46110303,23.5054227 L11.9387082,19.2149935 L19.4163133,23.5054227 C19.538897,23.6280063 19.6614807,23.6280063 19.906648,23.6280063 C20.1518154,23.6280063 20.2743991,23.5054227 20.5195665,23.382839 C20.7647339,23.1376716 20.8873176,22.7699205 20.8873176,22.4021694 L18.6808111,14.3116459 L23.7067424,9.65346563 C23.9519098,9.40829825 24.0744935,9.04054717 23.9519098,8.6727961 C23.7067424,8.30504503 23.3389914,8.05987765 22.9712403,8.05987765 Z" />
                  </svg>
                  <span>Featured</span>
                </span>
                <a class="post-tag global-tag" href="/tag/lifestyle/">
                  Lifestyle
                </a>
              </div>
              <h1 class="white">{title}</h1>
              <div class="item-meta white">
                <span>by </span>
                <a href="/author/sean/">Sean Hamilton</a>,{" "}
                <time datetime={updatedAt}>{updatedAt}</time>
                <span class="reading-time">
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
                  </svg>
                  <CommentCount config={disqusConfig} placeholder={"..."} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-post wrap">
          <div class="post-wrap">
            {content.content}
            <div className="tags">
              <strong>Tags: </strong>
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div class="section-post-authors post-authors flex">
            <div class="author-label">
              <span>This post was a collaboration between</span>
            </div>
            <div class="author-wrap flex">
              <a href="/author/sean/" class="item-link-overlay"></a>
              <div
                class="author-profile-image"
                style={{
                  backgroundImage:
                    "url(https://nurui.fueko.net/content/images/2018/12/alfonso-castro-130696-unsplash.jpg)",
                }}
              ></div>
              <div class="author-content">
                <h4 class="is-bio no-cover-image">
                  <a href="/author/sean/">Sean Hamilton</a>
                </h4>
                <p>
                  Respondeat totidem verbis. Utinam quidem dicerent alium alio
                  beatiorem, Iam ruinas videres. Quamquam ab iis philosophiam et
                  omnes ingenuas disciplinas habemus.
                </p>
              </div>
            </div>
          </div>
          <div class="post-meta">
            <div class="post-share">
              <a
                class="twitter"
                href="https://twitter.com/intent/tweet?text=I'm%20passionate%20about%20food%2C%20the%20tradition%20of%20it%2C%20cooking%20it%2C%20sharing%20it&amp;url=https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
              >
                <svg
                  class="global-svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                class="facebook"
                href="https://www.facebook.com/sharer/sharer.php?u=https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
              >
                <svg
                  class="global-svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                </svg>
              </a>
              <a class="copy" id="copy" data-clipboard-target="#link-value">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.33 13.04h-4.155v4.154h-2.078v-4.155H9.942v-2.077h4.155V6.806h2.078v4.156h4.154v2.077zM8.902 18.58a6.582 6.582 0 0 1 0-13.162c.068 0 .135.007.202.009a8.874 8.874 0 0 0-.001 13.144c-.067 0-.133.009-.2.009zm6.194-15.484a8.876 8.876 0 0 0-3.087.56A8.904 8.904 0 0 0 0 12a8.903 8.903 0 0 0 8.903 8.905 8.893 8.893 0 0 0 3.103-.563 8.854 8.854 0 0 0 3.09.563A8.903 8.903 0 0 0 24 12a8.904 8.904 0 0 0-8.903-8.903z" />
                </svg>
              </a>
              <span class="copy-popup">The link has been copied!</span>
              <input
                type="text"
                value="https://nurui.fueko.net/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                id="link-value"
              />
            </div>
          </div>
        </div>
      </article>
      <aside class="section-prev-next">
        <div class="prev-next-wrap">
          <Link
            to="/blogposts"
            className="prev-post post
            tag-story tag-hash-orange tag-hash-post-orange tag-hash-cta-violet
            no-image"
          >
            <section class="prev-next-title">
              <h5>All Tags</h5>
              <h3>Click to see all Blog Posts</h3>
            </section>
          </Link>
          <Link
            to="/"
            className="next-post post tag-people tag-journey no-image"
          >
            <section className="prev-next-title">
              <h5>Home</h5>
              <h3>Architecture belongs to culture, not to civilization</h3>
            </section>
          </Link>
        </div>
      </aside>
      <Disqus config={disqusConfig} />
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
      updatedAt(fromNow: true)
    }
  }
`