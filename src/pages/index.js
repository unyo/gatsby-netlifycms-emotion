import React from 'react'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <section>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </section>
    )
  }
}

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        textSection {
          heading
          text
        }
      }
    }
  }
`
