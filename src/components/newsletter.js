import React, { Component } from "react"
import { init } from "ityped"

export default class Newsletter extends Component {
  componentDidMount() {
    const initTyped = document.querySelector(".ityped-wrap")
    init(initTyped, {
      strings: ["Start your day with Wrixby ", "No spam ever, we promise! "],
      showCursor: true,
      typeSpeed: 150,
      startDelay: 500,
      backDelay: 5000,
    })
  }
  render() {
    return (
      <div className="section-subscribe wrap" style={{ marginTop: "25px" }}>
        <div className="subscribe-wrap">
          <form
            data-members-form="subscribe"
            className="subscribe-form"
            data-netlify="true"
            name="newsletter"
          >
            <h3>Join our occasional newsletter</h3>
            <div id="ityped" className="ityped">
              <span className="ityped-wrap"></span>
            </div>
            <div className="form-group">
              <input
                method="post"
                action="#"
                data-members-email
                className="subscribe-email"
                placeholder="Your email address"
                type="email"
                name="email"
                aria-label="Your email address"
                required
              />
            </div>
            <button type="submit" className="global-button">
              Subscribe
            </button>
          </form>
          <p className="subscribe-alert-loading">Processing your application</p>
          <p className="subscribe-alert-error">
            There was an error sending the email, please try again
          </p>
          <div className="subscribe-success">
            <h3>Great!</h3>
            Check your inbox and click the link to confirm your subscription
          </div>
        </div>
      </div>
    )
  }
}
