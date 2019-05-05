import PropTypes from "prop-types"
import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';
//import portfolioItem from 'portfolio-item'

// class portfolioItem {
//   constructor (name, desc, link, linkText, bg) {
//       this.name = name;
//       this.desc = desc;
//       this.link = link;
//       this.linkText = linkText;
//       this.bg = bg;
//   }
// }



class Portfolio extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 1
    };
    this.changeItem = this.changeItem.bind(this);
  }

  changeItem(id) {

    this.setState = id;
    let itemHeader = document.querySelector('.portfolio-item-header').innerHTML;
    let itemDesc = document.querySelector('.portfolio-item-desc').innerHTML;
    let itemLink = document.querySelector('.portfolio-item-link').href;
    let itemLinkText = document.querySelector('.portfolio-item-link').innerHTML;
    let itemBg = document.querySelector('.portfolio-bigimage').style.backgroundImage;
  
    // itemHeader = this.id.name; 
    // itemDesc = this.id.desc;  
    // itemLink = this.id.link;  
    // itemLinkText = this.id.linkText;  
    // itemBg = this.id.bg;  
  
  }

  render() {
    return (
      <section className="section-portfolio" id="section-portfolio">

        <div className="portfolio-container">
          <ScrollAnimation className="portfolio-container-content"  animateIn="fadeIn" delay={300}  animateOnce={true}>
            <div className="portfolio-about">

              <div className="portfolio-header">
                <div className="flat-line"></div>
                <p>Portfolio</p>
              </div>

              <h2>Zadowoleni klienci</h2>
              <p className="portfolio-text-desktop">Naciśnij na logo, aby zobaczyć podląd, krótki opis projektu i przejść pod wybrany adres WWW.</p>
              <p className="portfolio-text-mobile">Naciśnij na logo, aby przejść pod wybrany adres WWW.</p>
            </div>  

            {/* onClick={() => changeItem(id)} */}

            <div className="portfolio-items">
              <div className="portfolio-item" id="portfolioItem1" onClick={this.changeItem}>
                <img src="../../../inlei-logo.png" alt="inlei"></img>
              </div>
              <div className="portfolio-item" id="portfolioItem2">
                <img src="../../../chiarashop-logo.png" alt="chiarashop"></img>
              </div>
              <div className="portfolio-item" id="portfolioItem3">
                <img src="../../../palka-logo.png" alt="pałka gołębie"></img>
              </div>
              <div className="portfolio-item" id="portfolioItem4">
                <img src="../../../goodside-logo.png" alt="goodside"></img>
              </div>
              <div className="portfolio-item" id="portfolioItem5">
                <img src="../../../agrzesiak-logo.png" alt="agrzesiak"></img>
              </div>
              <div className="portfolio-item" id="portfolioItem6">
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
            
          </ScrollAnimation>
        </div>

        <ScrollAnimation className="portfolio-bigimage" animateIn="slideInRight" delay={600}  animateOnce={true}>
          <h2 className="portfolio-item-header">Chiara Shop</h2>
          <p className="portfolio-item-desc">Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel do zarządzania sklepem do dyspozycji właściciela.</p>
          <a className="portfolio-item-link" href="https://chiarashop.pl">CHIARASHOP.PL</a>
        </ScrollAnimation>
    </section>
    )
  }

}

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio
