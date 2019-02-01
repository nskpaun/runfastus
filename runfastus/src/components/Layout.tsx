import * as React from 'react';
import { Link } from 'gatsby';
import Tabs from '../components/Tabs';
import { RFSiteLocation } from '../types/RFTypes'

import { rhythm, scale } from '../utils/typography';

interface RFLayoutProps {
  location: RFSiteLocation;
  title: string;
}

class Layout extends React.Component<RFLayoutProps> {
  render() {
    const { location, title, children } = this.props;
    // @ts-ignore: it's a string but I don't know how to tell typescript...
    const rootPath = `${__PATH_PREFIX__}/`;
    let header: JSX.Element | React.ReactElement<any>;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <Tabs location={location} />
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
