export interface RFSiteLocation { pathname: string; }

export interface RFPost {
  node: RFPostFields;
}

export interface RFPostFields {
  excerpt: string;
  fields: {
    slug: string;
  }
  frontmatter: {
    date: string;
    title: string;
    guest_author?: string;
  }
}

export interface RFSiteData {
  siteMetadata: {
    title: string;
  }
}

export interface RFBannerImage {
  childImageSharp: {
    fixed: {
      srcSet: string;
      src: string;
      height: number;
      width: number;
    }
  }
}
