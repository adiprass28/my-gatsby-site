import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const blog = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Post'>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D-MM-YYYY")
          title
        }
        id
        body
      }
    }
}
  
`  

export default blog