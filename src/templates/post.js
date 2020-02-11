import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    <p className="font-body">by
      <Link to={`/authors/User_${data.strapiPost.author.id}`}>
      {data.strapiPost.author.username}
      </Link>
    </p>
    <div className="sm:w-full md:w-1/2 sm:float-none md:float-right sm:m-1 md:m-6">
      <Img fluid={data.strapiPost.banner.childImageSharp.fluid} className="rounded"/>
    </div>
    <ReactMarkdown
      source={data.strapiPost.content}
      transformImageURI={uri => uri.startsWith('http') ? uri :
      `${process.env.IMAGE_BASE_URL}${uri}`}
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
