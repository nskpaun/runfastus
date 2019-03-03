import * as React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFPost, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

interface LoreProps {
  location: RFSiteLocation;
  data: {
    site: RFSiteData
    banner: RFBannerImage
    allMarkdownRemark: {
      edges: Array<RFPost>
    }
  }
}
class Lore extends React.Component<LoreProps> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <Layout
        location={this.props.location}
        title={"The Ancient Texts of Runfastus"}
        banner={this.props.data.banner}>
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          The order was started in ancient times by Runfastus for reasons and it
          attracted ameteur runners. The order lies dormant for centuries at a time
          but always leaves its mark on history. Now the order has reemerged. Run
          fast.
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
      </Layout>
    );
  }
}
export default Lore

export const pageQuery = graphql`
  query {
    site {
      ...RFSiteDataGraphQL
    }
    banner: file(absolutePath: { regex: "/lore-banner.png/" }) {
      childImageSharp {
        fixed(width: 1000, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {fileAbsolutePath: {regex: "/.*lore.*/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
