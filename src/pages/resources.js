import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <div className="bg-white p-6 my-4 rounded shadow-md">
      <p className="text-gray-700 text-base">
        A small experiment with Gatsby, Strapi, Netlify, Heroku and Cloudinary,
        inspired by the{" "}
        <a
          href="https://strapi.io/blog/building-a-static-website-using-gatsby-and-strapi#10setupcloudinarynetlifypredeploy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strapi Docs
        </a>
      </p>
      <p className="text-gray-700 text-base">Styled with TailwindCSS</p>
      <p className="text-gray-700 text-base">
        Contact form provided by GetForm
      </p>
    </div>
  </Layout>
)

export default Resources
