import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
// Emotion
import styled from 'react-emotion'

const Section = styled('section')`
  background-color: ${({ theme }) => theme.colors.accent1};
`

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Section>
        <div className="container">
          <div>{JSON.stringify(data, null, 2)}</div>
        </div>
      </Section>
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
      }
    }
  }
`

// <Script
//   url="https://identity.netlify.com/v1/netlify-identity-widget.js"
//   onLoad={this.handleScriptLoad.bind(this)}
// />
