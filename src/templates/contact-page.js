import React from 'react'

export default ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
