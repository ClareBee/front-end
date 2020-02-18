import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SocialShare from "../components/social-share"

const PostTemplate = ({ data, location }) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  const { id, title, author, created_at, banner, content } = data.strapiPost
  const disqusShortname = process.env.GATSBY_DISQUS
  const disqusConfig = {
    identifier: id,
    title,
  }
  const shareUrl = location.href
  return (
    <Layout>
      <div className="flex flex-col lg:w-1/2 md:w-full bg-white p-6">
        <h1>{title}</h1>
        <p className="font-body mb-2">
          by{" "}
          <Link
            to={`/authors/User_${author.id}`}
            className="transition-text duration-300 ease-in text-gray-500 hover:text-purple-700"
          >
            {author.username}
          </Link>
          <span> - {new Date(created_at).toLocaleString()}</span>
        </p>
        <SocialShare data={data.strapiPost} shareUrl={shareUrl} />
        <div className="mt-2 flex flex-col">
          <hr className="my-4 border-t-4 border-gray-300" />
          <div className="w-full md:w-3/4 lg:w-1/2my-4 mx-auto">
            <Img fluid={banner.childImageSharp.fluid} className="rounded" />
          </div>
          <hr className="my-4 border-t-4 border-gray-300" />
          <ReactMarkdown
            className="sm:text-md md:text-lg text-justify"
            source={content}
            transformImageURI={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
            escapeHtml={false}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
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
