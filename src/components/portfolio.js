import PropTypes from "prop-types"
import React from "react"

const Portfolio = ({ siteTitle }) => (
<section className="section-portfolio" id="section-portfolio">

  <div className="portfolio-container">
    <div className="portfolio-container-content">
      <div className="portfolio-about">

        <div className="portfolio-header">
          <div className="flat-line"></div>
          <p>Portfolio</p>
        </div>

        <h2>Zadowoleni klienci</h2>
        <p>Our digital agency has two goals: optimise every user’s experience, and create real impact for our clients.</p>

      </div>

      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
        <div className="portfolio-item">
          <img src="../../../inlei-logo.png" alt="inlei"></img>
        </div>
      </div>
      
    </div>
  </div>

  <div className="portfolio-bigimage">
  </div>

</section>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio
