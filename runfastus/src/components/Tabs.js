import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

const SITE_TABS = [
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
    > {SITE_TABS.map(({name, path}) =>
      <h3
        style={{
          ...scale(0.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          marginRight:10,
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
