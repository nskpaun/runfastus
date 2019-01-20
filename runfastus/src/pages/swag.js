import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Tabs from '../components/Tabs'
import Layout from '../components/Layout'

import { rhythm, scale } from '../utils/typography'

function Swag() {
  return (
    <Layout location={"this.props.location"} title={"siteTitle"}>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        We're going to have stuff you can buy here.
      </div>
    </Layout>
  );
}
export default Swag
