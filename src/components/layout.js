/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import About from "./about-skills"
import Portfolio from "./portfolio"
import Offer from "./offer"
import Skills from "./skills"
import Contact from "./contact"
import "./layout.css"
import "../styles/main.scss"

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    render={data => (
      <>
      <Helmet>
        <script src="https://rawgit.com/ironwallaby/delaunay/master/delaunay.js" type="text/javascript" />
        <script src="http://requirejs.org/docs/release/2.1.15/minified/require.js" type="text/javascript" />
        <script src={withPrefix('canvas.js')} type="text/javascript" />
        <script src={withPrefix('menu-toggle.js')} type="text/javascript" />
      </Helmet>

      <div className="website-content"> 
      <nav className="side-menu">

      <div className="menu-button">
        <div id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>

        <ul>
          <li className="navButton">O mnie</li>
          <li className="navButton">Oferta</li>
          <li className="navButton">Portfolio</li>
          <li className="navButton">Umiejętności</li>
          <li className="navButton">Kontakt</li>
        </ul>
      </nav>

      <div className="main-content">
      <div className="main-content-button"></div>

        <Header siteTitle={data.site.siteMetadata.title} />
       
        <main>{children}
          <About/>
          <Offer />
          <Portfolio />
          <Skills />
          <Contact />
        </main>

        <footer>
          <p>© {new Date().getFullYear()} Amadeusz Grzesiak. All rights reserved</p>

            <ul>
              <li className="navButton">O mnie</li>
              <li className="navButton">Oferta</li>
              <li className="navButton">Portfolio</li>
              <li className="navButton">Umiejętności</li>
              <li className="navButton">Kontakt</li>
            </ul>
        </footer>

        </div>
      </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

