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
import About from "./about"
import Portfolio from "./portfolio"
import Offer from "./offer"
import Skills from "./skills"
import Contact from "./contact"
import Footer from "./footer"
import Menu from "./menu"
import "./layout.css"
import "../styles/main.scss"

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import "animate.css/animate.min.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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

        <script src={withPrefix('delaunay.js')} type="text/javascript" />
        <script src="http://requirejs.org/docs/release/2.1.15/minified/require.js" type="text/javascript" />
      

        <script src={withPrefix('canvas.js')} type="text/javascript" />
        <script src={withPrefix('menu-toggle.js')} type="text/javascript" />
        <script src={withPrefix('typed.js')} type="text/javascript" />
      </Helmet>

      <div className="website-content"> 

        <Menu/>

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

          <Footer/>

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

