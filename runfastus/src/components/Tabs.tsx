import * as React from 'react';
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

interface RFTab {
  name: string;
  path: string;
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

function Tabs() {

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
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
export default Tabs
