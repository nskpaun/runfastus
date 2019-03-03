import * as React from 'react';

import { RFPostFields } from '../types/RFTypes';

import { RFThumbnailNode } from '../types/GraphQLFragments'

interface RFFeaturedUnitProps {
  posts: Array<{
    node: RFPostFields
    thumbnail: RFThumbnailNode
  }>;
  postSelector: (post: {
    node: RFPostFields
    thumbnail: RFThumbnailNode
  }) => boolean;
}

class RFFeaturedUnit extends React.Component<RFFeaturedUnitProps> {
  render() {
    const cards = this.props.posts
      .filter(this.props.postSelector)
      .slice(0, 3)
      .map((post) => {
        return (
          <div>
            {post.node.frontmatter.title}
          </div>
        );
      });
    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default RFFeaturedUnit
