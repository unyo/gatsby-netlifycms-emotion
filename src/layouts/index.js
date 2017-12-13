import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
// Emotion
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { injectGlobal } from 'react-emotion'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
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
    background-color: ${theme.colors.accent2};
    color: ${theme.colors.textLight};
    position: relative;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
`

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <h1>Hi</h1>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="Home | JCD - Custom Home Design" />
      <Navbar />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
