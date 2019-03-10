import * as React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import RFGameRoot from '../game/RFGameRoot'
import { RFSiteLocation, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

import { Loop, Stage, World } from 'react-game-kit';

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
          Running Simulator
      </div>
        <div style={{
          display: `flex`,
          flexGrow: 1,
          height: 500,
        }}>
          <Loop>
            <Stage>
              <World>
                <RFGameRoot />
              </World>
            </Stage>
          </Loop>
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
