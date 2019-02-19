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
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
