import * as React from 'react';
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import RFGuestAuthorHeader from '../components/RFGuestAuthorHeader'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

import { RFSiteLocation, RFPostFields, RFSiteData } from '../types/RFTypes'

type RFPostPageData = RFPostFields & { html: string }

interface BlogPostTemplateProps {
  pageContext: {
    previous?: RFPostPageData;
    next?: RFPostPageData;
  };
  location: RFSiteLocation;
  data: {
    site: RFSiteData;
    markdownRemark: RFPostPageData;
  }
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const guestAuthor = post.frontmatter.guest_author;
    let authorHeader = null;
    if (guestAuthor) {
      authorHeader = <RFGuestAuthorHeader guestAuthorName={post.frontmatter.guest_author} />
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt}
          //TODO add keywords
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `runfastus`]} />
        <h1>{post.frontmatter.title}</h1>
        {authorHeader}
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        guest_author
      }
    }
  }
`
