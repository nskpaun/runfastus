import * as React from 'react';
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Tabs from '../components/Tabs'
import SEO from '../components/seo'
import RFWelcomeMat from '../components/RFWelcomeMat'
import RFFeaturedUnit from '../components/RFFeaturedUnit'
import RFSubscriptionForm from '../components/RFSubscriptionForm'
import { rhythm } from '../utils/typography'
import { RFSiteLocation, RFPost, RFBannerImage } from '../types/RFTypes'
import { RFSiteData, RFSiteDataGraphQL, RFThumbnailNode, RFThumbnailNodeGraphQL } from '../types/GraphQLFragments'
import { RFThumbnailImageGraphQL, RFThumbnailImage } from '../types/GraphQLFragments'
import Image from 'gatsby-image';

interface IndexPageProps {
  location: RFSiteLocation;
  data: {
    banner: RFBannerImage;
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
      <Layout
        location={this.props.location}
        title={siteTitle.toUpperCase()}
        banner={data.banner}
        hideTabs={true}>
        <SEO
          title="Runfastus"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `runfastus`]}
        />
        <RFWelcomeMat posts={posts} />
        <RFFeaturedUnit
          posts={postsWithThumbnails}
          postSelector={(post) => {
            const tags = post.node.frontmatter.tags
            if (!tags) {
              return false
            }
            return tags.includes('featured');
          }}
        />
        <RFSubscriptionForm />
        <h3
          style={{
            margin: rhythm(1 / 6),
          }}
        >
          All Knowledge
        </h3>
        {postsWithThumbnails.map(({ node, thumbnail }) => {
          const title = node.frontmatter.title || node.fields.slug
          const thumbnailComponent = thumbnail ?
            <div className="MobileHiddenElement">
              <Image
                fixed={thumbnail.node.childImageSharp.fluid}
                style={{
                  width: 150,
                  height: 150,
                  marginRight: 12,
                }}
              />
            </div> : null;

          const mobileThumbnailComponent =
          thumbnail ?
            <div className="MobileShownElement">
              <Image
                fixed={thumbnail.node.childImageSharp.fluid}
                style={{
                  flexGrow: 1,
                  minHeight:300,
                  minWidth: 100,
                  marginBottom: rhythm(-1),
                }}
              />
            </div> : null;
          return (
            <div
              key={node.fields.slug}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: rhythm(2)
              }}>
              {thumbnailComponent}
              <div style={{ flexDirection: "column" }}>
                {mobileThumbnailComponent}
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
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

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
    }
    allFile(
      filter: {
        extension: {regex: "/png|jpg/"
      }
    }) {
      edges {
        node {
          ...RFThumbnailNodeGraphQL
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
