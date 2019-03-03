import * as React from 'react';
import Image from 'gatsby-image';
import { Link, graphql, navigate } from 'gatsby';
import * as ReactGA from 'react-ga';

import { RFPostFields } from '../types/RFTypes';
import { rhythm } from '../utils/typography';
import { RFThumbnailNode } from '../types/GraphQLFragments'

interface RFFeaturedCardProps {
  post: {
    node: RFPostFields
    thumbnail: RFThumbnailNode
  };
}

const GET_REASON = (postNode: RFPostFields) => {
  const tags = postNode.frontmatter.tags;
  if (!tags) {
    return "From the archive";
  }
  if (tags.indexOf("newest") > -1) {
    return "New content";
  }
  if (postNode.frontmatter.guest_author) {
    return "Guest content";
  }

  return "From the archive";
}

class RFFeaturedCard extends React.Component<RFFeaturedCardProps> {
  render() {
    const thumbnail = this.props.post.thumbnail;
    const thumbnailComponent =
      <div>
        <Image
          fixed={thumbnail.node.childImageSharp.fluid}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </div>;
    const post = this.props.post;
    const node = post.node;
    return (
      <div
        key={node.fields.slug}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 12,
          backgroundColor: '#F5F5F5',
          margin: 12,
          height: rhythm(15),
          overflow: 'hidden',
        }}
        onClick={() => {
          ReactGA.event({
            category: 'Navigation',
            action: 'FEATURED_CARD',
          })
          navigate(node.fields.slug);
        }}>
        {thumbnailComponent}
        <div
          style={{
            backgroundColor: '#CD5C5C',
            justifyContent: 'center',
            color: '#FFFFFF',
            borderRadius: 10,
            paddingLeft: 6,
            paddingRight: 6,
            margin: 6,
          }}>
          <small>{GET_REASON(node)}</small>
        </div>
        <div style={{ flexDirection: "column" }}>
          <h4
            style={{
              margin: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h4>
          <p> {node.excerpt} </p>
        </div>
      </div>
    );
  }
}

export default RFFeaturedCard
