const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              description
              path
              templateKey
              title
              textSection {
                heading
                text
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const compPath = node.frontmatter.templateKey
        ? `src/templates/${String(node.frontmatter.templateKey)}.js`
        : `src/pages/index.js`

      createPage({
        path: node.frontmatter.path,
        component: path.resolve(compPath),
        context: {} // additional data can be passed via context
      })
    })
  })
}
