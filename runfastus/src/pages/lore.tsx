import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import Tabs from '../components/Tabs'

import { rhythm, scale } from '../utils/typography'
import { RFSiteLocation } from '../types/RFTypes'

interface LoreProps {
  location: RFSiteLocation;
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    banner: {
      childImageSharp : {
        fixed: {
          srcSet: string;
          src: string;
          height: number;
          width: number;
        }
      }
    }
  }
}
class Lore extends React.Component<LoreProps> {
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
          Long, long ago, Runfastus lived happily during the day and during the night. Runfastus ran quickly as he could over rock and over dust. Runfastus faced many conflicts and drew many followers. These are the legends of him.

          The order was started in ancient times by Runfastus for reasons and it
          attracted ameteur runners. The order lies dormant for centuries at a time
          but always leaves its mark on history. Now the order has reemerged. Run
          fast.
      </div>
      </Layout>
    );
  }
}
export default Lore

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    banner: file(absolutePath: { regex: "/lore-banner.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/.*lore\/intro.*/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
