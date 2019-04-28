/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
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
        <script src="https://rawgit.com/ironwallaby/delaunay/master/delaunay.js" type="text/javascript" />
        <script src="http://requirejs.org/docs/release/2.1.15/minified/require.js" type="text/javascript" />
      

        <script src={withPrefix('canvas.js')} type="text/javascript" />
        <script src={withPrefix('menu-toggle.js')} type="text/javascript" />
        <script src={withPrefix('typed.js')} type="text/javascript" />
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
          <li>
            <Link className="navButton" to="/#section-about-me">O mnie</Link>
          </li>
          <li>
            <Link className="navButton" to="/#section-offer">Oferta</Link>
          </li>
          <li>
            <Link className="navButton" to="/#section-portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className="navButton" to="/#section-skills">Umiejętności</Link>
          </li>
          <li>
            <Link className="navButton" to="/#section-contact">Kontakt</Link>
          </li>

         <div className="side-menu-bottom">
            <div className="side-menu-social">
               <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"> <img src="../../../linkedin-brands.svg" alt="linked"></img></a> 
               <a href="https://www.facebook.com/grzesiak.amadeusz"><img src="../../../facebook-square-brands.svg" alt="facebook"></img></a> 
            </div>
            <div className="side-menu-contact">
               <a href="tel:796536228"> <img src="../../../phone-solid.svg" alt="phone"></img>+48 796 536 228</a> 
            </div>
            <div className="side-menu-contact">
               <a href="mailto:grzesiak.amadeusz@gmail.com"><img src="../../../envelope-regular.svg" alt="email"></img>grzesiak.amadeusz@gmail.com</a>
            </div>
         </div>
    

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
          <li>
            <Link className="footer-menu-item" to="/#section-about-me">O mnie</Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-offer">Oferta</Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-skills">Umiejętności</Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-contact">Kontakt</Link>
          </li>
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

