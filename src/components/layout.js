import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"
import "./style.css"
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
      <div class="global-wrap">
        <div class="section-content-wrap">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Newsletter />
          <footer className="section-footer">
            <div className="footer-wrap wrap flex">
              <div className="footer-logo flex">
                <a className="is-logo" href="/">
                  <img src="/content/images/2018/12/nurui.svg" alt="Nurui" />
                </a>
              </div>
              <div className="footer-nav">
                <ul className="nav-list">
                  <li className="nav-list-item">
                    <a
                      href="https://nurui.fueko.net/membership/"
                      className="nav-link"
                    >
                      Authors
                    </a>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <a
                      href="https://nurui.fueko.net/features/"
                      className="nav-link"
                    >
                      Features
                    </a>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <a
                      href="https://nurui.fueko.net/style-guide/"
                      className="nav-link"
                    >
                      Sitemap
                    </a>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <a
                      href="https://nurui.fueko.net/contact/"
                      className="nav-link"
                    >
                      Contact
                    </a>
                    <span className="nav-dot"></span>
                  </li>
                </ul>
              </div>
              <div className="footer-social-links flex">
                <a href="https://twitter.com/ghost" aria-label="link Twitter">
                  <svg
                    className="global-svg"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" aria-label="link Vimeo">
                  <svg
                    className="global-svg"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                </a>
                <a href="#" aria-label="link YouTube">
                  <svg
                    className="global-svg"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="a"
                      d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-copyright">
              &copy;2020 <a href="https://nurui.fueko.net">Wrixby</a> . All
              Right Reserved.
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
