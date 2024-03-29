import React, { useState } from "react"
import { Link } from "gatsby"
import blogbudz from "../images/blogbudz.svg"

const Header = () => {
  const [isActive, setActive] = useState(true)

  const clickHandler = () => {
    setActive(!isActive)
  }

  return (
    <div className="section-header wrap">
      <header className="header-wrap flex">
        <div className="header-logo">
          <h1 className="is-logo">
            <Link to="/">
              <img src={blogbudz} alt="Blogbudz" />
            </Link>
          </h1>
        </div>
        <div className="header-nav">
          <nav className="nav-wrap">
            <label
              htmlFor="toggle"
              className="nav-label hamburger hamburger-minus"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </label>
            <input type="checkbox" id="toggle" className="nav-toggle" />
            <ul className="nav-list">
              {/* <li className="nav-list-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <span className="nav-dot nav-dot-current"></span>
              </li> */}
              <li className="nav-list-item">
                <Link
                  to="/categories/technology/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  Technology
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/coding/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  Coding
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/how-to/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  How To
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/top-lists/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  Top Lists
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/social-media/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  Social Media
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/product-review/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  Product Review
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li className="nav-list-item">
                <Link
                  to="/categories/news/"
                  className="nav-link"
                  activeStyle={{ borderBottom: "3px solid blue" }}
                >
                  News
                </Link>
                <span className="nav-dot"></span>
              </li>
              <li
                className={
                  "nav-dots is-visible" + (isActive ? "" : " is-active")
                }
                onClick={clickHandler}
                onKeyDown={clickHandler}
              >
                <ul className="nav-dots-wrap">
                  <li className="nav-list-item">
                    <Link
                      to="/categories/entertainment/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Entertainment
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/categories/business/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Business
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/categories/health-tips/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Health Tips
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/categories/lifestyle/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Lifestyle
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/categories/miscellaneous/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Miscellaneous
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/authors/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Authors
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                  <li className="nav-list-item">
                    <Link
                      to="/contact/"
                      className="nav-link"
                      activeStyle={{ borderBottom: "3px solid blue" }}
                    >
                      Contact
                    </Link>
                    <span className="nav-dot"></span>
                  </li>
                </ul>
              </li>
              {/* <li class="section-members-login-panel">
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
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="blog-description flex">Thoughts, stories and ideas</div>
      </header>
    </div>
  )
}

export default Header
