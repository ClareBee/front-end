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
          className="text-purple-700 hover:text-gray-500"
        >
          &#32;
          Gatsby
        </a>
        and
        &#32;
        <a
          href="https://strapi.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-gray-500"
        >
          Strapi CMS
        </a>
        &#32;
        inspired by the
        &#32;
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
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Hosted on
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-gray-500"
            href="https://www.netlify.com/"
          >
          &#32;
           Netlify
          </a>
          &#32;
          (Gatsby) and
          &#32;
          <a
            href="https://www.heroku.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-gray-500"
          >
            Heroku
          </a>
          &#32;
          (Strapi)
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Images hosted on
          &#32;
          <a
            href="https://cloudinary.com/"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudinary
          </a>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Code syntax highlighting by
          &#32;
          <a
            href="https://prismjs.com/"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prism.js
          </a>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Social share buttons via
          &#32;
          <a
            href="https://github.com/nygardk/react-share"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-share
          </a>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Comments by
          &#32;
          <a
            href="https://disqus.com/"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disqus
          </a>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Styled with
          &#32;
          <a
            href="https://tailwindcss.com/"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
        </li>
        <li className="flex my-2">
          <svg
            class="h2 w-2 text-gray-500 mx-2"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          Contact form by
          &#32;
          <a
            href="https://getform.io/"
            className="text-purple-700 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GetForm
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default About
