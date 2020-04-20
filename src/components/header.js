import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

export default class Header extends Component {
  render(siteTitle) {
    return (
      <div class="section-header wrap">
        <header class="header-wrap flex">
          <div class="header-logo">
            <h1 class="is-logo">
              <a href="https://nurui.fueko.net">
                <img src="/content/images/2018/12/nurui.svg" alt="Wrixby" />
              </a>
            </h1>
          </div>
          <div class="header-nav">
            <nav class="nav-wrap">
              <label for="toggle" class="nav-label hamburger hamburger-minus">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </label>
              <input type="checkbox" id="toggle" class="nav-toggle" />
              <ul class="nav-list">
                <li class="nav-list-item">
                  <a href="https://nurui.fueko.net/" class="nav-link">
                    Home
                  </a>
                  <span class="nav-dot nav-dot-current"></span>
                </li>
                <li class="nav-list-item">
                  <a
                    href="https://nurui.fueko.net/membership/"
                    class="nav-link"
                  >
                    Membership
                  </a>
                  <span class="nav-dot"></span>
                </li>
                <li class="nav-list-item">
                  <a href="https://nurui.fueko.net/features/" class="nav-link">
                    Features
                  </a>
                  <span class="nav-dot"></span>
                </li>
                <li class="nav-list-item">
                  <a
                    href="https://nurui.fueko.net/style-guide/"
                    class="nav-link"
                  >
                    Style Guide
                  </a>
                  <span class="nav-dot"></span>
                </li>
                <li class="nav-dots is-visible">
                  <ul class="nav-dots-wrap">
                    <li class="nav-list-item">
                      <a
                        href="https://nurui.fueko.net/newsletter/"
                        class="nav-link"
                      >
                        Newsletter
                      </a>
                      <span class="nav-dot"></span>
                    </li>
                    <li class="nav-list-item">
                      <a
                        href="https://nurui.fueko.net/authors/"
                        class="nav-link"
                      >
                        Authors
                      </a>
                      <span class="nav-dot"></span>
                    </li>
                    <li class="nav-list-item">
                      <a href="https://nurui.fueko.net/tags/" class="nav-link">
                        Tags
                      </a>
                      <span class="nav-dot"></span>
                    </li>
                    <li class="nav-list-item">
                      <a
                        href="https://nurui.fueko.net/contact/"
                        class="nav-link"
                      >
                        Contact
                      </a>
                      <span class="nav-dot"></span>
                    </li>
                    <li class="nav-list-item">
                      <a
                        href="https://themeforest.net/item/nurui-multipurpose-ghost-blog-theme/22243886"
                        class="nav-link"
                      >
                        Get Theme
                      </a>
                      <span class="nav-dot"></span>
                    </li>
                  </ul>
                </li>
                <li class="section-members-login-panel">
                  <a
                    class="members-signin"
                    href="https://nurui.fueko.net/signin/"
                  >
                    Sign in
                  </a>
                  <a
                    class="members-signup"
                    href="https://nurui.fueko.net/signup/"
                  >
                    Sign up
                  </a>
                </li>
                <li class="nav-list-item search-open">
                  <span>Search</span>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.420346,15.5800244 L24,21.1596784 L21.1596784,24 L15.5800244,18.420346 C13.9925104,19.4717887 12.088789,20.0841064 10.0420532,20.0841064 C4.49598037,20.0841064 0,15.5881261 0,10.0420532 C0,4.49598037 4.49598037,0 10.0420532,0 C15.5881261,0 20.0841064,4.49598037 20.0841064,10.0420532 C20.0841064,12.088789 19.4717887,13.9925104 18.420346,15.5800244 Z M10.0420532,16.0672851 C13.3696969,16.0672851 16.0672851,13.3696969 16.0672851,10.0420532 C16.0672851,6.71440951 13.3696969,4.01682129 10.0420532,4.01682129 C6.71440951,4.01682129 4.01682129,6.71440951 4.01682129,10.0420532 C4.01682129,13.3696969 6.71440951,16.0672851 10.0420532,16.0672851 Z" />
                  </svg>
                </li>
              </ul>
            </nav>
          </div>
          <div class="blog-description flex">Thoughts, stories and ideas</div>
        </header>
      </div>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
