import * as React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

import { RFSiteLocation, RFPost, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

interface NotFoundPageProps {
  location: RFSiteLocation;
  data: {
    site: RFSiteData
    banner: RFBannerImage
  }
}

class NotFoundPage extends React.Component<NotFoundPageProps> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        banner={data.banner}>
        <SEO
          title="404: Not Found"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `runfastus`]} />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    banner: file(absolutePath: { regex: "/banner.jpg/" }) {
      childImageSharp {
        fixed(width: 1000, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      ...RFSiteDataGraphQL
      siteMetadata {
        title
      }
    }
  }
`
