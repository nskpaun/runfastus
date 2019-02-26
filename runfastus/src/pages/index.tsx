import * as React from 'react';
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Tabs from '../components/Tabs'
import SEO from '../components/seo'
import RFWelcomeMat from '../components/RFWelcomeMat'
import RFSubscriptionForm from '../components/RFSubscriptionForm'
import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFPost } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'
import { RFThumbnailImageGraphQL, RFThumbnailImage } from '../types/GraphQLFragments'
import Image from 'gatsby-image';

interface RFThumbnailNode {
  node: RFThumbnailImage & { absolutePath: string }
}

interface IndexPageProps {
  location: RFSiteLocation;
  data: {
    allFile: {
      edges: Array<RFThumbnailNode>
    }
    site: RFSiteData
    allMarkdownRemark: {
      edges: Array<RFPost>
    }
  }
}

class BlogIndex extends React.Component<IndexPageProps> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const thumbnails = data.allFile.edges;

    const postsWithThumbnails = posts.map(({ node }) => {
      const cleanSlug = node.fields.slug.replace("/", "");
      const thumbnail = thumbnails.filter(thumbnail => {
        return thumbnail.node.absolutePath.indexOf(cleanSlug) > -1;
      })[0];
      return { node: node, thumbnail: thumbnail };
    });

    return (
      <Layout location={this.props.location} title={siteTitle} hideTabs={true}>
        <SEO
          title="Runfastus"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `runfastus`]}
        />
        <RFWelcomeMat posts={posts} />
        <RFSubscriptionForm />
        <Tabs location={this.props.location} />
        <Bio />
        {postsWithThumbnails.map(({ node, thumbnail }) => {
          const title = node.frontmatter.title || node.fields.slug
          const thumbnailComponent = thumbnail ? <Image
            fixed={thumbnail.node.childImageSharp.fluid}
            style={{
              width: 200,
              height: 200,
              marginRight: 12,
            }}
          /> : null;
          return (
            <div key={node.fields.slug} style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}>
              {thumbnailComponent}
              <div style={{ flexDirection: "column" }}>
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
      ...RFSiteDataGraphQL
    }
    allFile(
      filter: {
        absolutePath: {regex: "/.*blog.*/"},
        extension: {regex: "/png|jpg/"
      }
    }) {
      edges {
        node {
          absolutePath
          ...RFThumbnailImageGraphQL
        }
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
            guest_author
            tags
          }
        }
      }
    }
  }
`
