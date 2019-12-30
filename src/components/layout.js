/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
    <div className="min-h-screen flex flex-col">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container flex-grow flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer className="">
          © {new Date().getFullYear()} - Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>,
          {` `}
          <a href="https://strapi.io/">Strapi</a>
          {` `}&{` `}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
