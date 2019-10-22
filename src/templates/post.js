import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    <p>by
      <Link to={`/authors/User_${data.strapiPost.author.id}`}>
      {data.strapiPost.author.username}
      </Link>
    </p>
    <Img fixed={data.strapiPost.banner.childImageSharp.fixed} />
    <p>{data.strapiPost.content}</p>
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
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
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
