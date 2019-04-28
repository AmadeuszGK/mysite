import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{height: 100 + 'vh'}}>
    <div className="canvas-container">
     <canvas id="stars" width="300"></canvas>
     <div className="canvas-text">
     <h1>AMADEUSZ<br />
     GRZESIAK</h1>
     <h2></h2>
     <p>NOWOCZESNE, RESPONSYWNE <strong>STRONY I SKLEPY INTERNETOWE</strong></p>
     </div>
     <div className="scroll-down">
    <p>SCROLL DOWN</p><br />
    <img src="../../../arrows-white.svg" alt="arrow"></img>
    </div>
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
