import * as React from 'react';
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Tabs from '../components/Tabs'
import SEO from '../components/seo'
import RFWelcomeMat from '../components/RFWelcomeMat'
import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFPost, RFSiteData } from '../types/RFTypes'

interface IndexPageProps {
  location: RFSiteLocation;
  data: {
    site: RFSiteData
    allMarkdownRemark: {
      edges: Array<RFPost>
    }
  }
}

class BlogIndex extends React.Component<IndexPageProps> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} hideTabs={true}>
        <SEO
          title="Runfastus"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `runfastus`]}
        />
        <RFWelcomeMat posts={posts} />
        <Tabs location={this.props.location} />
        <Bio />
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
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/.*blog.*/"}}
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
