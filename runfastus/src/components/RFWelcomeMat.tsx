import * as React from 'react';
import { navigateTo } from 'gatsby'

import { rhythm } from '../utils/typography'
import { RFPost } from '../types/RFTypes'

interface RFWelcomeMatProps {
  posts: Array<RFPost>;
}

const WELCOME_TEXT = 'Welcome to The Order of Runfastus. We are an ancient order of amateur runners who hold speed as the highest virtue. Within the links of this blog you will find the truth and transcend the modern prison of running culture.';

const LINK_TEXT_OPTIONS: Array<String> = [
  'Follow the Spirit',
  'Explore the Order',
];

class RFWelcomeMat extends React.Component<RFWelcomeMatProps> {
  render() {
    const linkText = LINK_TEXT_OPTIONS[Math.floor(Math.random() * LINK_TEXT_OPTIONS.length)];
    const posts = this.props.posts;
    return (
      <div
        style={{
          display: `flex`,
          flexDirection: 'column',
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            padding: 12,
          }}>
          {WELCOME_TEXT}
        </div>
        <div
          style={{
            display: `flex`,
            backgroundColor: '#CD5C5C',
            justifyContent: 'center',
            color: '#FFFFFF',
            borderRadius: 10,
            padding: 14,
            marginTop: 12,
          }}
          onClick={() => {
            const target = posts[Math.floor(Math.random() * posts.length)];
            navigateTo(target.node.fields.slug);
          }}>
          {linkText}
        </div>
      </div>
    );
  }
}
export default RFWelcomeMat
