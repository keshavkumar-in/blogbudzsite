import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./style.css"
import blogbudz from "../images/blogbudz.svg"

import Newsletter from "./newsletter"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="global-wrap">
        <div className="section-content-wrap">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Newsletter />
          <footer className="section-footer">
            <div className="footer-wrap wrap flex">
              <div className="footer-logo flex">
                <Link className="is-logo" to="/">
                  <img src={blogbudz} alt="Blogbudz" width="200" />
                </Link>
              </div>
              <div className="footer-nav">
                <ul className="nav-list">
                  <li className="nav-list-item">
                    <Link to="/authors/" className="nav-link">
                      Authors
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/contact/" className="nav-link">
                      Contact
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/sitemap/" className="nav-link">
                      Sitemap
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/" className="nav-link">
                      Privacy Policy
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                </ul>
              </div>
              <div className="footer-social-links flex">
                <a
                  href="https://twitter.com/blogbudz"
                  aria-label="link Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://www.facebook.com/blogbudz/"
                  aria-label="link Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="global-svg"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/blog_budz/"
                  aria-label="link Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="global-svg"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                  >
                    <path d="M13,2.34c3.47,0,3.88,0,5.26.08a7.21,7.21,0,0,1,2.41.45,3.93,3.93,0,0,1,1.5,1,4.13,4.13,0,0,1,1,1.49,7.22,7.22,0,0,1,.45,2.42c.06,1.37.07,1.78.07,5.25s0,3.89-.07,5.26a7.21,7.21,0,0,1-.45,2.41,4.26,4.26,0,0,1-2.47,2.47,7.21,7.21,0,0,1-2.41.45c-1.38.06-1.79.07-5.26.07s-3.88,0-5.25-.07a7.22,7.22,0,0,1-2.42-.45,4.13,4.13,0,0,1-1.49-1,3.93,3.93,0,0,1-1-1.5,7.21,7.21,0,0,1-.45-2.41c-.06-1.37-.08-1.79-.08-5.26s0-3.88.08-5.25a7.22,7.22,0,0,1,.45-2.42,3.89,3.89,0,0,1,1-1.49,3.89,3.89,0,0,1,1.49-1,7.22,7.22,0,0,1,2.42-.45c1.37-.06,1.78-.08,5.25-.08M13,0C9.47,0,9,0,7.64.08a9.45,9.45,0,0,0-3.15.6,6.34,6.34,0,0,0-2.31,1.5A6.42,6.42,0,0,0,.68,4.49a9.45,9.45,0,0,0-.6,3.15C0,9,0,9.47,0,13s0,4,.08,5.36a9.52,9.52,0,0,0,.6,3.16,6.39,6.39,0,0,0,1.5,2.3,6.21,6.21,0,0,0,2.31,1.5,9.68,9.68,0,0,0,3.15.61C9,26,9.47,26,13,26s4,0,5.36-.07a9.75,9.75,0,0,0,3.16-.61,6.26,6.26,0,0,0,2.3-1.5,6.39,6.39,0,0,0,1.5-2.3,9.75,9.75,0,0,0,.61-3.16C26,17,26,16.53,26,13s0-4-.07-5.36a9.68,9.68,0,0,0-.61-3.15,6.42,6.42,0,0,0-1.5-2.31,6.39,6.39,0,0,0-2.3-1.5,9.52,9.52,0,0,0-3.16-.6C17,0,16.53,0,13,0" />
                    <path d="M13,6.33A6.68,6.68,0,1,0,19.68,13,6.66,6.66,0,0,0,13,6.33m0,11A4.34,4.34,0,1,1,17.34,13,4.33,4.33,0,0,1,13,17.34" />
                    <path d="M21.5,6.06A1.56,1.56,0,1,1,19.94,4.5,1.56,1.56,0,0,1,21.5,6.06" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://blogbudz.com">Blogbudz.com</a> . All Rights
              Reserved.
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
