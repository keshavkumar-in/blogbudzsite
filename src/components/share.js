import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share"

import "./style.css"

const Share = ({ socialConfig, tags }) => (
  <div className="post-social">
    <FacebookShareButton
      url={socialConfig.config.url}
      className="button facebook"
    >
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>
    <TwitterShareButton
      url={socialConfig.config.url}
      className="button twitter"
      title={socialConfig.config.title}
      via={socialConfig.twitterHandle.split("@").join("")}
      hashtags={tags}
    >
      <TwitterIcon size={40} round={true} />
      {/* <span className="text">Twitter</span> */}
    </TwitterShareButton>
    <PinterestShareButton
      url={socialConfig.config.url}
      className="button googleplus"
    >
      <PinterestIcon size={40} round={true} />
    </PinterestShareButton>
    <LinkedinShareButton
      url={socialConfig.config.url}
      className="button linkedin"
      title={socialConfig.config.title}
    >
      <LinkedinIcon size={40} round={true} />
    </LinkedinShareButton>
    <RedditShareButton
      url={socialConfig.config.url}
      className="button reddit"
      title={socialConfig.config.title}
    >
      <RedditIcon size={40} round={true} />
    </RedditShareButton>
    <WhatsappShareButton
      url={socialConfig.config.url}
      className="button whatsapp"
      title={socialConfig.config.title}
    >
      <WhatsappIcon size={40} round={true} />
    </WhatsappShareButton>
  </div>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
