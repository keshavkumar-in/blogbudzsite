import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

// const elem = document.querySelector(".section-scrollable")
// const flkty = new Flickity(elem, {
//   initialIndex: 0,
//   //   cellSelector: ".section-featured",
//   accessibility: true,
//   autoPlay: 3000, // default false
//   cellAlign: "left",
//   contain: true,
// })
const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
        limit: 3
        sort: { fields: updatedAt, order: ASC }
      ) {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              file {
                url
              }
              fluid {
                base64
              }
            }
            tags
            updatedAt(fromNow: true)
          }
        }
      }
    }
  `)
  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <>
      {/* <Helmet>
        <script src="./index.js"></script>
      </Helmet> */}
      <div id="slider" class="section-scrollable">
        {/* <Flickity
      className={"section-scrollable"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    > */}
        {blogPosts.map(({ node: post }) => (
          <div class="section-featured is-featured-image" key={post.id}>
            <div
              class="featured-image"
              style={{
                backgroundImage: `url(${post.featuredImage.file.url})`,
              }}
            ></div>
            <div class="featured-wrap flex">
              <article class="featured-content">
                <span class="featured-label global-tag">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.9712403,8.05987765 L16.2291373,8.05987765 L12.796794,0.459688839 C12.5516266,-0.153229613 11.4483734,-0.153229613 11.0806223,0.459688839 L7.64827899,8.05987765 L0.906176009,8.05987765 C0.538424938,8.05987765 0.170673866,8.30504503 0.0480901758,8.6727961 C-0.0744935148,9.04054717 0.0480901758,9.40829825 0.293257557,9.65346563 L5.31918887,14.3116459 L3.11268244,22.4021694 C2.99009875,22.7699205 3.11268244,23.1376716 3.48043351,23.382839 C3.72560089,23.6280063 4.21593565,23.6280063 4.46110303,23.5054227 L11.9387082,19.2149935 L19.4163133,23.5054227 C19.538897,23.6280063 19.6614807,23.6280063 19.906648,23.6280063 C20.1518154,23.6280063 20.2743991,23.5054227 20.5195665,23.382839 C20.7647339,23.1376716 20.8873176,22.7699205 20.8873176,22.4021694 L18.6808111,14.3116459 L23.7067424,9.65346563 C23.9519098,9.40829825 24.0744935,9.04054717 23.9519098,8.6727961 C23.7067424,8.30504503 23.3389914,8.05987765 22.9712403,8.05987765 Z" />
                  </svg>
                  Featured
                </span>
                <h2>
                  <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
                  <span class="featured-dot"></span>
                </h2>
                <div class="item-meta white">
                  <span>by </span>
                  <a href="/author/sean/">Sean Hamilton</a>,{" "}
                  <time datetime={post.updatedAt}>{post.updatedAt}</time>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// export const query = graphql`
//   {
//     allContentfulBlogPost(limit: 3, sort: { fields: updatedAt, order: ASC }) {
//       edges {
//         node {
//           id
//           title
//           slug
//           featuredImage {
//             file {
//               url
//             }
//           }
//           tags
//           updatedAt(fromNow: true)
//         }
//       }
//     }
//   }
// `
export default Slider
