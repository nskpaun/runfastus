import * as React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import Tabs from '../components/Tabs';
import { RFSiteLocation, RFBannerImage } from '../types/RFTypes'

import { rhythm, scale } from '../utils/typography';

interface RFLayoutProps {
  location: RFSiteLocation;
  title: string;
  hideTabs?: boolean;
  banner: RFBannerImage;
}

class Layout extends React.Component<RFLayoutProps> {
  render() {
    const { location, title, children } = this.props;
    // @ts-ignore: it's a string but I don't know how to tell typescript...
    const rootPath = `${__PATH_PREFIX__}/`;
    let header: JSX.Element | React.ReactElement<any>;
      header = (
        <div
          style={{
            display: "flex",
            alignItems: 'flex-end',
          }}
          >
          <Image
            fixed={this.props.banner.childImageSharp.fixed}
            style={{
              marginBottom: 0,
            }}
          />
          <h1
            style={{
              ...scale(1.4),
              marginBottom: rhythm(1.5),
              marginLeft: rhythm(1.5),
              marginTop: 0,
              position: 'absolute',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `white`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(35),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {this.props.hideTabs ? null : <Tabs location={location} />}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
