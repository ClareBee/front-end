import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Prism from 'prismjs'

const IndexPage = ({ data }) => {

  useEffect(() => {
    Prism.highlightAll()
  })
  return(
  <Layout>
    <SEO title="Home" />
    <ul className="sm:w-full md:w-3/4">
    {data.allStrapiPost.edges.map(post => (
      <li className="shadow-md p-4 m-2 rounded bg-white" key={post.node.id}>
        <Link to={`/${post.node.id}`}>
          <h1>{post.node.title}</h1>
        </Link>
        <div className="sm:flex items-start py-3 border-b-2 border-t-2 border-gray-400">
          <Img fixed={post.node.banner.childImageSharp.fixed} className="flex-none rounded m-2"/>
          <ReactMarkdown
            className="flex flex-col mx-2"
            source={post.node.content.substring(0,350).concat("...")}
            transformImageURI={uri => uri.startsWith('http') ? uri :
            `${process.env.IMAGE_BASE_URL}${uri}`}
            escapeHtml={false} />
        </div>
        <div className="flex justify-end pt-3">
          <Link to={`/${post.node.id}`} className="text-gray-500 hover:text-purple-700">Read more</Link>
        </div>
      </li>
    ))}
    </ul>
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content
          created_at
          banner {
            childImageSharp {
              fixed(width: 150, height: 150){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
