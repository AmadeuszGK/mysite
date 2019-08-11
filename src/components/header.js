import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import arrowsWhite from "../images/arrows-white.svg"

function Header() {
  const headerText = "<FRONT-END DEVELOPER />";

  return (
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
          <h2>{headerText}</h2>
          <p>
            NOWOCZESNE STRONY I SKLEPY INTERNETOWE
          </p>
        </div>
        <Link className="scroll-down" to="/#section-about-me">
          <div className="scroll-img-container">
            <img src={arrowsWhite} alt="arrow" />
          </div>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
