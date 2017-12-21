import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ contentComponent, content, data }) => {
  const PageContent = contentComponent || Content
  return (
    <section>
      <PageContent content={content} />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: { html, frontmatter } } = data
  console.log(data, html, frontmatter)
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      content={html}
      data={data.markdownRemark}
    />
  )
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
