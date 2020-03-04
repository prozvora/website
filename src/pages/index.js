import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>About This Site</h2>
    <p>
      This site is an index of things I find interesting.
    </p>
  </Layout>
)

export default IndexPage
