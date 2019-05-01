import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header style={{height: 100 + 'vh'}}>
    <div className="canvas-container">
    <div className="header-bg-bottom"></div>
     <canvas id="stars" width="300"></canvas>
     <div className="canvas-text">
     <h1>AMADEUSZ<br />
     GRZESIAK</h1>
     <h2></h2>
     <p>NOWOCZESNE, RESPONSYWNE <strong>STRONY I SKLEPY INTERNETOWE</strong></p>
     </div>
     <Link className="scroll-down" to="/#section-about-me">
      <p>SCROLL DOWN</p>
      <div className="scroll-img-container">
        <img src="../../../arrows-white.svg" alt="arrow"></img>
      </div>
      </Link>
     </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
