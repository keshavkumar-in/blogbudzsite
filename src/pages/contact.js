import React, { Component } from "react"
import { Link } from "gatsby"

import { init } from "ityped"
import contact from "../images/contact.svg"
import SEO from "../components/seo"

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  componentDidMount() {
    const initTyped = document.querySelector(".ityped-wrap")
    init(initTyped, {
      strings: ["Let’s talk!"],
      showCursor: true,
      typeSpeed: 150,
      startDelay: 500,
      backDelay: 5000,
    })
  }

  render() {
    return (
      <React.Fragment>
        <SEO
          title="Contact Us"
          keywords={[
            `contact blogbudz`,
            `blog`,
            `technology blog`,
            `social media blog`,
            `lifestyle blog`,
            `latest news`,
            `business blog`,
            `entertainment blog`,
          ]}
          description="Contact Blogbudz. Blogbudz covers the latest tech news, Popular &amp; latest gadgets, Coding, Top Lists, Social Media updates, Product Reviews, How to, Business news, health tips, lifestyle."
        />
        <div className="section-page-custom flex">
          <div
            className="page-custom-image"
            style={{
              backgroundImage: `url(${contact})`,
            }}
          ></div>
          <div className="page-custom-wrap">
            <div className="page-custom-header">
              <Link to="/">Back to Homepage</Link>
            </div>
            <div className="page-custom-content flex">
              <div className="subscribe-wrap contact-wrap">
                <h3>Contact Us</h3>
                <div id="ityped" className="ityped">
                  <span className="ityped-wrap"></span>
                </div>
                <form
                  className="contact-form"
                  data-netlify="true"
                  name="contactform"
                >
                  <input type="hidden" name="form-name" value="contactform" />
                  <input
                    className="subscribe-email contact-name"
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                  <input
                    className="subscribe-email contact-email"
                    required
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <textarea
                    className="subscribe-email contact-message"
                    required
                    name="message"
                    placeholder="Your message"
                  ></textarea>
                  <br />
                  <button className="global-button" type="submit">
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <div className="page-custom-footer">
              <Link to="/">Blogbudz.</Link>
              <span>Thoughts, Stories and Ideas.</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
