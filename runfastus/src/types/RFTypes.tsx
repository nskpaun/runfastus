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
