/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaGithub } from "react-icons/fa";

import Header from "./header"

const Layout = ({ children, location }) => {
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
    <div className="min-h-screen flex flex-col bg-gray-200" location={location}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container flex-grow flex flex-col py-4">
        <main className="flex-grow p-4 flex flex-col items-center">
          {children}
        </main>
        <footer className="font-body w-100 mt-2 text-gray-500 flex justify-between">
        <div>
          © {new Date().getFullYear()} - Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>,{` `}
          <a href="https://strapi.io/">Strapi</a>
          {` `}&{` `}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </div>
          <div className="flex sm:w-full md:w-auto">
            <a href="https://twitter.com/clarie_bee" className="text-2xl mx-2 hover:text-purple-700">
              <FaTwitter />
            </a>
            <a href="https://github.com/ClareBee" className="text-2xl ml-2 hover:text-purple-700">
              <FaGithub />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
