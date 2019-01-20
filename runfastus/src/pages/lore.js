import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Tabs from '../components/Tabs'

import { rhythm, scale } from '../utils/typography'

function Lore() {
  return (
    <div>
      <Tabs/>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        The order was started in ancient times by Runfastus for reasons and it
        attracted ameteur runners. The order lies dormant for centuries at a time
        but always leaves its mark on history. Now the order has reemerged. Run
        fast.
      </div>
    </div>
  );
}
export default Lore
