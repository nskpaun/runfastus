import { graphql } from 'gatsby'

export interface RFThumbnailImage {
  childImageSharp: {
    fluid: {
      srcSet: string;
      src: string;
      height: number;
      width: number;
    }
  }
}

export const RFThumbnailImageGraphQL = graphql`
  fragment RFThumbnailImageGraphQL on File {
    childImageSharp {
      fluid(maxWidth: 150, maxHeight: 150) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export interface RFSiteData {
  siteMetadata: {
    title: string;
    author: string;
    siteUrl: string;
    social: {
      twitter: string;
    }
  }
}

export const RFSiteDataGraphQL = graphql`
  fragment RFSiteDataGraphQL on Site {
    siteMetadata {
      title
      author
      siteUrl
      social {
        twitter
      }
    }
  }
`
