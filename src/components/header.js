import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Helmet>
    <script src="http://requirejs.org/docs/release/2.1.15/minified/require.js" type="text/javascript" />
    <script src="https://rawgit.com/ironwallaby/delaunay/master/delaunay.jsgit " type="text/javascript" />
    <script src={withPrefix('canvas.js')} type="text/javascript" />
    </Helmet>
    <canvas id="stars" width="300" height="300"></canvas>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
