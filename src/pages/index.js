import React, { Component } from 'react'
import { navigate, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import './profile.css'

class IndexPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges = [] } = {} } = {} } = this.props

    console.log(edges)
    return (
      <Layout>
        {edges.map(({ node = {} }) => {
          const { frontmatter } = node

          return (
            <div className="profile" onClick={() => navigate(frontmatter.path)}>
              <h2>{frontmatter.author}</h2>
              <p>{frontmatter.bio}</p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            path
            bio
            tech
          }
        }
      }
    }
  }
`
