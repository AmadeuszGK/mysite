import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
// import ScrollAnimation from 'react-animate-on-scroll';

const Header = ({ siteTitle }) => (
  <header style={{ height: 100 + "vh" }}>
    <div className="canvas-container">
      <div className="header-bg-bottom" />
      <canvas id="stars" width="300" />
      <div className="canvas-text">
        <h1>
          AMADEUSZ
          <br />
          GRZESIAK
        </h1>
        <h2 />
        <p>
          NOWOCZESNE, RESPONSYWNE <strong>STRONY I SKLEPY INTERNETOWE</strong>
        </p>
      </div>
      <Link className="scroll-down" to="/#section-about-me">
        {/* <p>SCROLL DOWN</p> */}
        <div className="scroll-img-container">
          <img src="../../../arrows-white.svg" alt="arrow" />
        </div>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
