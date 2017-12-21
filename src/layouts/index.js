import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// Emotion
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import styled, { injectGlobal } from 'react-emotion'

injectGlobal`
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  pre {
    background-color: #eee;
    padding: 16px;
    margin: 16px;
    white-space: pre-wrap;
  }
`

const NavLink = styled(Link)`
  padding: 8px 16px;
`

const Navbar = () => (
  <section>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
  </section>
)

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="Gatsbyjs | NetflifyCMS | Emotion" />
      <Navbar />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
