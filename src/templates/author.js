import React from 'react'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import '../styles/global.css'

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.posts.map(post => (
          <li key={post.id}>
            <h2>
              <Link to={`/Post_${post.id}`}>{post.title}</Link>
            </h2>
            <ReactMarkdown
              source={post.content.substring(0,500).concat('...')}
              transformImageURI={uri => uri.startsWith('http') ? uri :
              `${process.env.IMAGE_BASE_URL}${uri}`}
              className='indexArticle' />
              <Link to={`/Post_${post.id}`}>Read more</Link>

          </li>
        ))}
      </ul>
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
