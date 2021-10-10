import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const blog = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Post'>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
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
        slug
      }
    }
}
`  

export default blog