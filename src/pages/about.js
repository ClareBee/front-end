import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>

    <div className="bg-white p-6 my-4 rounded shadow-md">
      <p className="text-gray-700 text-base">
        A small experiment integrating Gatsby and Strapi CMS
        inspired by the{" "}
        <a
          href="https://strapi.io/blog/building-a-static-website-using-gatsby-and-strapi#10setupcloudinarynetlifypredeploy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-gray-500"
        >
          Strapi Docs
        </a>
      </p>
      <hr className="my-4 border-t-4 border-gray-300" />
      <ul>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Hosted on Netlify (Gatsby) and Heroku (Strapi)</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Images hosted on Cloudinary</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Code syntax highlighting by Prism.js</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Social share buttons via react-share</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Comments by Disqus</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Styled with TailwindCSS</li>
        <li className="flex my-2">
          <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>Contact form by GetForm
        </li>
      </ul>
    </div>
  </Layout>
)

export default About
