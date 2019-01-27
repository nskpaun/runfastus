export interface RFSiteLocation { pathname: string; }

export interface RFPost {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    }
    frontmatter: {
      date: string;
      title: string;
    }
  }
}

export interface RFSiteData {
  siteMetadata: {
    title: string;
  }
}

export interface RFBannerImage {
  childImageSharp : {
    fixed: {
      srcSet: string;
      src: string;
      height: number;
      width: number;
    }
  }
}
