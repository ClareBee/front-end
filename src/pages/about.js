import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>

    <div className="bg-white p-6 my-4 rounded shadow-md">
      <p className="text-gray-700 text-base">
        A small experiment integrating
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-gray-500 mx-1"
        >
          Gatsby
        </a>
        and
        <a
          href="https://strapi.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-gray-500 mx-1"
        >
          Strapi CMS
        </a>
        inspired by the
        <a
          href="https://strapi.io/blog/building-a-static-website-using-gatsby-and-strapi#10setupcloudinarynetlifypredeploy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-gray-500 mx-1"
        >
          Strapi Docs
        </a>
      </p>
      <hr className="my-4 border-t-4 border-gray-300" />
      <ul>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Hosted on
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-gray-500 mx-1"
              href="https://www.netlify.com/"
            >
              Netlify
            </a>
            (Gatsby) and
            <a
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-gray-500 mx-1"
            >
              Heroku
            </a>
            (Strapi)
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Images hosted on:
            <a
              href="https://cloudinary.com/"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudinary
            </a>
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Code syntax highlighting by:
            <a
              href="https://prismjs.com/"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prism.js
            </a>
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Social share buttons via:
            <a
              href="https://github.com/nygardk/react-share"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-share
            </a>
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Comments by:
            <a
              href="https://disqus.com/"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disqus
            </a>
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Styled with:
            <a
              href="https://tailwindcss.com/"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
          </span>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span>
            Contact form by:
            <a
              href="https://getform.io/"
              className="text-purple-700 hover:text-gray-500 mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GetForm
            </a>
          </span>
        </li>
      </ul>
    </div>
  </Layout>
)

export default About
