import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Prism from 'prismjs'
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

console.log('shre', LinkedinShareButton)


const PostTemplate = ({ data, location }) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  const { title, author, created_at, banner, content } = data.strapiPost
  const shareUrl = location.href
  return (
  <Layout>
    <div className="flex flex-col lg:w-1/2 md:w-full bg-white p-6">
      <h1>{title}</h1>
      <p className="font-body">by {' '}
        <Link to={`/authors/User_${author.id}`} className="text-gray-500 hover:text-purple-700">
          {author.username}
        </Link>
        <span>{' '}- {new Date(created_at).toLocaleString()}</span>
      </p>
      <ul className="flex">
        <li className="mr-2">
            <TwitterShareButton
            url={shareUrl}
            >
            <TwitterIcon
              size={32}
              round={true} />
          </TwitterShareButton>
        </li>
        <li className="mr-2">
            <LinkedinShareButton
            url={shareUrl}
            >
            <LinkedinIcon
              size={32}
              round={true} />
          </LinkedinShareButton>
        </li>
        <li className="mr-2">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={`${title} by ${author.username}`}
            separator=" - "
            >
            <EmailIcon
              size={32}
              round={true} />
          </EmailShareButton>
        </li>
      </ul>
      <div className="mt-2 flex flex-col">
        <div className="lg:w-1/2 md:w-3/4 my-4 mx-auto">
          <Img fluid={banner.childImageSharp.fluid} className="rounded"/>
        </div>
        <ReactMarkdown
          className="text-lg text-justify"
          source={content}
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
