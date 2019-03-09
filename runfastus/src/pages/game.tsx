import * as React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

interface RFGameProps {
  location: RFSiteLocation;
  data: {
    site: RFSiteData
    banner: RFBannerImage
  }
}
class Game extends React.Component<RFGameProps> {
  render() {
    return (
      <Layout
        location={this.props.location}
        title={"Runfastus Chronicals"}
        banner={this.props.data.banner}>
        <div
            className="game-font"
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          We're working on a game! Check out the demo so far.
      </div>
      </Layout>
    );
  }
}
export default Game

export const pageQuery = graphql`
  query {
    site {
      ...RFSiteDataGraphQL
    }
    banner: file(absolutePath: { regex: "/banner.jpg/" }) {
      childImageSharp {
        fixed(width: 1000, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
