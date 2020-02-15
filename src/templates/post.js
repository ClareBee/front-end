import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

const PostTemplate = ({ data }) => {
  console.log('data', data)
  return (
  <Layout>
    <div className="flex flex-col lg:w-1/2 md:w-full bg-white p-6">
      <h1>{data.strapiPost.title}</h1>
      <p className="font-body">by {' '}
        <Link to={`/authors/User_${data.strapiPost.author.id}`} className="text-gray-500 hover:text-purple-700">
          {data.strapiPost.author.username}
        </Link>
        <span>{' '}- {new Date(data.strapiPost.created_at).toLocaleString()}</span>
      </p>
      <div className="mt-2">
        <div className="lg:w-1/2 md:w-full mb-2 ml-2 float-right">
          <Img fluid={data.strapiPost.banner.childImageSharp.fluid} className="rounded"/>
        </div>
        <ReactMarkdown
          className="text-lg text-justify"
          source={data.strapiPost.content}
          transformImageURI={uri => uri.startsWith('http') ? uri :
          `${process.env.IMAGE_BASE_URL}${uri}`}
          escapeHtml={false} />
        </div>
    </div>
  </Layout>
)}

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
      created_at
      author {
        id
        username
      }
    }
  }
`
