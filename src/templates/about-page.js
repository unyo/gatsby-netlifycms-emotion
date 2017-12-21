import React from 'react'

// export const AboutPageTemplate = ({ title, content, contentComponent }) => {
//   const PageContent = contentComponent || Content
//   return (
//     <section>
//       <h2>{title}</h2>
//       <PageContent content={content} />
//     </section>
//   )
// }

export default ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
