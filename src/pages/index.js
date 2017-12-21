import React from 'react'

export const IndexPageTemplate = ({ data }) => (
  <pre>{JSON.stringify(data, null, 4)}</pre>
)

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return <IndexPageTemplate data={data} />
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
