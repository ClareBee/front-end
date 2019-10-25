import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import "../styles/global.css"

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    <p>by
      <Link to={`/authors/User_${data.strapiPost.author.id}`}>
      {data.strapiPost.author.username}
      </Link>
    </p>
    <Img fluid={data.strapiPost.banner.childImageSharp.fluid} />
    <ReactMarkdown
      source={data.strapiPost.content}
      transformImageURI={uri => uri.startsWith('http') ? uri :
      `${process.env.IMAGE_BASE_URL}${uri}`}
      className='articleContent'
      escapeHtml={false} />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      title
      content
      banner {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
