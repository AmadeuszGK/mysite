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
        <p>Naciśnij na logo, aby zobaczyć podląd, krótki opis projektu i przejść pod wybrany adres WWW.</p>

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

      <div className="portfolio-items-mobile">
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
    <h2>Chiara Shop</h2>
    <p>Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel do zarządzania sklepem do dyspozycji właściciela.</p>
    <a href="https://chiarashop.pl">CHIARASHOP.PL</a>
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
