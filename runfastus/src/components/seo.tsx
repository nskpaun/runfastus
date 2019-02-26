import * as React from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { RFSiteData, RFSiteDataGraphQL } from '../types/GraphQLFragments'

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  keywords: Array<string>;
  title: string;
}

interface SeoQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string; author: string
    }
  }
}


class SEO extends React.Component<SeoProps> {
  render() {
    const { description, lang, meta, keywords, title } = this.props;
    return (
      <StaticQuery
        query={detailsQuery}
        render={(data: SeoQueryProps) => {
          const metaDescription =
            description || data.site.siteMetadata.description
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  this.props.keywords && this.props.keywords.length > 0
                    ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                    : []
                )
                .concat(meta)}
            >
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="google-site-verification"
                content="r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"
              />
            </Helmet>
          )
        }}
      />
    );
  }

  getDefaultProps() {
    return {
      lang: `en`,
      meta: [],
      keywords: [],
    };
  }
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      ...RFSiteDataGraphQL
    }
  }
`
