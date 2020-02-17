import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/posts" className="transition-text duration-300 ease-in text-gray-500 hover:text-purple-700">
      Why not try again here?
    </Link>
  </Layout>
)

export default NotFoundPage
