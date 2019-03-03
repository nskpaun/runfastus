import * as React from 'react';

import { RFPostFields } from '../types/RFTypes';
import { RFThumbnailNode } from '../types/GraphQLFragments';
import RFFeaturedCard from './RFFeaturedCard';
import { rhythm } from '../utils/typography';

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
    const selectedPosts = this.props.posts
      .filter(this.props.postSelector)
      .slice(0, 3);
    const cards =
      selectedPosts
        .map((post) => {
          if (post === selectedPosts[2]) {
            return (
              <div className="MobileHiddenElement">
                <RFFeaturedCard post={post} />
              </div>
            );
          }
          return (
            <div>
              <RFFeaturedCard post={post} />
            </div>
          );
        });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#FFFFFF'
        }}>
        <h3
          style={{
            margin: rhythm(1 / 6),
          }}
        >
          Featured Knowledge
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1
          }}>
          {cards}
        </div>
      </div>
    );
  }
}

export default RFFeaturedUnit
