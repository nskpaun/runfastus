import * as React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

interface SwagProps {
  location: RFSiteLocation;
  data: {
    site: RFSiteData
    banner: RFBannerImage
  }
}
class Swag extends React.Component<SwagProps> {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        {<Image
          fixed={this.props.data.banner.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
          }}
        />}
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          The order of Runfastus is currently working to unite our members by
          providing a symbol of our unity imprinted on various garments commonly
          used in running. Soon you will be able to display your dedication to
          running fast with pride.
      </div>
      </Layout>
    );
  }
}
export default Swag

export const pageQuery = graphql`
  query {
    site {
      ...RFSiteDataGraphQL
    }
    banner: file(absolutePath: { regex: "/swag-banner.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
