/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import About from "./about";
import Portfolio from "./portfolio";
import Offer from "./offer";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import Menu from "./menu";
import "./layout.css";
import "../styles/main.scss";

// import Helmet from "react-helmet";
// import { withPrefix } from "gatsby";
import "animate.css/animate.min.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}


class Layout extends React.Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "/delaunay.js";
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement("script");
    script1.src = "/require.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/canvas.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "/menu-toggle.js";
    script3.async = true;
    document.body.appendChild(script3);
}

  render () {
    return (

        <div>
  
          <div className="website-content">
            <Menu />
  
            <div className="main-content">
              <div className="main-content-button" />
  
              <Header/>
  
              <main>
                <About />
                <Offer />
                <Portfolio />
                <Skills />
                <Contact />
              </main>
  
              <Footer />
            </div>
          </div>
          </div>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
