import * as React from 'react';
import { navigate } from 'gatsby'
import * as ReactGA from 'react-ga';
import { FaFacebook, FaLinkedin, FaTwitter, FaReddit } from 'react-icons/fa';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share';

interface RFShareProps {
  socialConfig: {
    twitterHandle: string
    config: {
      url: string
      title: string
    }
  }
  tags: Array<string>
}

class RFShare extends React.Component<RFShareProps> {
  render() {
    const { socialConfig, tags } = this.props;
    return (
      <div style={{
        display:'flex',
        flexGrow:1,
        justifyContent: 'space-between',
        color: '#0073e6',
        marginBottom: 12,
      }}>
        <FacebookShareButton url={socialConfig.config.url}>
          <span className="icon">
            <FaFacebook />
          </span>
          <span className="text">Facebook</span>
        </FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="text">Twitter</span>
        </TwitterShareButton>
        <LinkedinShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="text">LinkedIn</span>
        </LinkedinShareButton>
        <RedditShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
          <span className="icon">
            <FaReddit />
          </span>
          <span className="text">Reddit</span>
        </RedditShareButton>
      </div>
    );
  }
}

export default RFShare
