import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const PageList = props => {
  useEffect(() => {
    Prism.highlightAll()
  })
  const { data } = props

  const posts = data.allStrapiPost.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/posts/${currentPage - 1}`
  const nextPage = `/posts/${currentPage + 1}`
  return (
    <Layout>
      <SEO title="Home" />
      <ul className="sm:w-full md:w-3/4">
        {posts.map(post => (
          <li className="shadow-md p-4 m-2 rounded bg-white" key={post.node.id}>
            <Link to={`${post.node.id}`}>
              <h1>{post.node.title}</h1>
            </Link>
            <div className="sm:flex items-start py-3 border-b-2 border-t-2 border-gray-400">
              <Img
                fixed={post.node.banner.childImageSharp.fixed}
                className="flex-none rounded m-2"
              />
              <ReactMarkdown
                className="flex flex-col mx-2"
                source={post.node.content.substring(0, 350).concat("...")}
                transformImageURI={uri =>
                  uri.startsWith("http")
                    ? uri
                    : `${process.env.IMAGE_BASE_URL}${uri}`
                }
                escapeHtml={false}
              />
            </div>
            <div className="flex justify-end pt-3">
              <Link
                to={`${post.node.id}`}
                className="transition-text duration-300 ease-in text-gray-500 hover:text-purple-700"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <ul className="w-full flex justify-center items-center pl-0 rounded my-2">
        {!isFirst && (
          <li className="text-sm md:text-base p-2 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          </li>
        )}
        {isFirst && (
          <li className="text-sm md:text-base p-2 leading-tight bg-white border border-gray-300 text-gray-300 border-r-0 ml-0 rounded-l">
            ← Previous Page
          </li>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              background: i + 1 === currentPage ? "darkgray" : "#fff",
            }}
            className="text-sm md:text-base p-2 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 hover:bg-gray-200"
          >
            <Link
              to={`/posts/${i === 0 ? "" : i + 1}`}
              style={{
                textDecoration: "none",
                color: i + 1 === currentPage ? "#ffffff" : "",
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className="text-sm md:text-base p-2 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          </li>
        )}
        {isLast && (
          <li className="text-sm md:text-base p-2 leading-tight bg-white border border-gray-300 text-gray-300 border-r-0 ml-0 rounded-l">
            Next Page →
          </li>
        )}
      </ul>
    </Layout>
  )
}

export default PageList

export const query = graphql`
  query postQuery($skip: Int!, $limit: Int!) {
    allStrapiPost(
      sort: { fields: [title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          content
          created_at
          banner {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
