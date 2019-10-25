import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global.css'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
    {data.allStrapiPost.edges.map(post => (
      <li key={post.node.id}>
        <Link to={`/${post.node.id}`}>
          <h3>{post.node.title}</h3>
        </Link>
        <Img fixed={post.node.banner.childImageSharp.fixed} />

        <ReactMarkdown
          source={post.node.content.substring(0,500).concat("...")}
          transformImageURI={uri => uri.startsWith('http') ? uri :
          `${process.env.IMAGE_BASE_URL}${uri}`}
          className='indexArticle'
          escapeHtml={false} />
        <Link to={`/${post.node.id}`}>Read more</Link>
      </li>
    ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content
          banner {
            childImageSharp {
              fixed(width: 200, height: 200){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
