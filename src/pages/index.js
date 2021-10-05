import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Saya belajar membuat situs menggunakan Gatsby.</p>
      <StaticImage
        alt="GatsbyJS"
        src="../images/icon.png"
      />
    </Layout>
  )
}

export default IndexPage