import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import error from "../images/error.svg"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={error} alt="404: Not Found" />
  </Layout>
)

export default NotFoundPage
