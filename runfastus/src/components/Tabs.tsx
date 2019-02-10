import * as React from 'react';
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { RFSiteLocation } from '../types/RFTypes'

interface RFTab {
  name: string;
  path: string;
}

interface RFTabsProps {
  location: RFSiteLocation;
}

const RF_TABS: Array<RFTab> = [
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Lore",
    path: "/lore",
  },
  {
    name: "Swag",
    path: "/swag",
  },
];

class Tabs extends React.Component<RFTabsProps> {
  render() {
    const location = this.props.location.pathname;
    return (
      <div
        style={{
          display: `flex`,
        }}
      > {RF_TABS.map(({ name, path }) =>
        <h3
          style={{
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            marginRight: 10,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={path}
          >
            {name}
          </Link>
        </h3>
      )}
      </div>
    );
  }
}
export default Tabs
