import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const blog = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Post'>
            <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
        allFile {
            nodes {
                name
            }
        }
    }
`  

export default blog