import React from 'react'
// import Content, { HTMLContent } from '../components/Content'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return <div>{JSON.stringify(data, 2, null)}</div>
}

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
