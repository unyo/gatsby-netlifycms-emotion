import React from 'react'

export const ContactPageTemplate = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default ({ data }) => {
  return <ContactPageTemplate data={data} />
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
