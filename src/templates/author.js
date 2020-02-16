import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const UserTemplate = ({ data: { strapiUser } }) => (
  <Layout>
    <h1>{strapiUser.username}</h1>
    <div className="bg-white p-6 my-4 rounded shadow-md">
      <p>
        ClareBee is a UK-based developer, currently obsessed with everything
        JAMStack.
      </p>
      <hr className="my-4 border-t-4 border-gray-300" />
      <ul>
        {strapiUser.posts.map(post => (
          <li key={post.id} className="flex justify-between items-center my-2">
            <div className="flex">
              <svg
                class="h2 w-2 text-gray-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              <h2>
                <Link to={`/Post_${post.id}`}>{post.title}</Link>
              </h2>
            </div>
            <Link
              className="transition-text duration-300 ease-in text-gray-500 hover:text-purple-700"
              to={`/Post_${post.id}`}
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      posts {
        id
        title
        content
      }
    }
  }
`
