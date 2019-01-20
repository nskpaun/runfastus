import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Tabs from '../components/Tabs'

import { rhythm, scale } from '../utils/typography'

function Swag() {
  return (
    <div>
      <Tabs/>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        We're going to have stuff here.
      </div>
    </div>
  );
}
export default Swag
