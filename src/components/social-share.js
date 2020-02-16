import React from "react"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"

const SocialShare = ({ data: { title, author }, shareUrl }) => (
  <ul className="flex">
    <li className="mr-2">
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </li>
    <li className="mr-2">
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </li>
    <li className="mr-2">
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body={`${title} by ${author.username}`}
        separator=" - "
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </li>
  </ul>
)

export default SocialShare
