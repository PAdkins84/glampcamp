import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Blog({ data }) {
  return (
    <Layout>
        <div className="container mt-5 pricingPage">
            <h1>Glamp-Camp Blog</h1>
            <h4>Posts</h4>
            {data.allWpPost.nodes.map(node => (
                <div key={node.slug}>
                {/* highlight-start */}
                <Link to={node.slug}>
                    <p>{node.title}</p>
                </Link>
                {/* highlight-end */}
                {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
            ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`