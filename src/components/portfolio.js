import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "Promatic Games",
      desc:
        "Największy projekt, który współtworzyłem wraz z innym programistą pracując w E-fun. Strona prezętuje gry firmy Promatic. Oparta jest o Angular 7 oraz Firebase.",
      link: "https://promaticgames.com",
      linkText: "promaticgames.com",
      bg: "url('promaticgames-bg.jpg')"
    };
  }

  changeItem0() {
    this.setState({
      id: 5,
      name: "Promatic Games",
      desc:
        "Największy projekt, który współtworzyłem wraz z innym programistą pracując w E-fun. Strona prezętuje gry firmy Promatic. Oparta jest o Angular 7 oraz Firebase.",
      link: "https://promaticgames.com",
      linkText: "promaticgames.com",
      bg: "url('promaticgames-bg.jpg')"
    });
  }

  changeItem1() {
    this.setState({
      id: 1,
      name: "amadeuszgrzesiak.com",
      desc:
        "Moje portfolio, które stworzyłem przy użyciu nowoczesnego generatora stron statycznych GatsbyJS, który oparty jest o ReactJS. Kod strony możesz zobaczyć tutaj.",
      link: "https://github.com/AmadeuszGK/mysite",
      linkText: "github",
      bg: "url('agrzesiak-bg.jpg')"
    });
  }

  changeItem2() {
    this.setState({
      id: 2,
      name: "Wolności 14",
      desc:
        "Strona stworzona na zlecenie developra. Posiada skrypt napisany w Vanilla JS dynamicznie prezentujący plany budynku oraz szczegółowe dane dotyczące pięter i pomieszczeń.",
      link: "http://wolnosci14.pl/",
      linkText: "wolnosci14.pl",
      bg: "url('wolnosci14-bg.jpg')"
    });
  }

  changeItem3() {
    this.setState({
      id: 3,
      name: "Chiara Shop",
      desc:
        "Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel zarządzania sklepem do dyspozycji właścicielki.",
      link: "https://chiarashop.pl/",
      linkText: "chiarashop.pl",
      bg: "url('chiara-bg.jpg')"
    });
  }

  changeItem4() {
    this.setState({
      id: 4,
      name: "Inlei",
      desc:
        "Sklep internetowy stworzony dla polskich dystrubutorów produktów włoskiej firmy Inlei. Oparty jest na Wordpress i Woocomerce. Posiada panel do zarządzania sklepem.",
      link: "https://inlei.pl/",
      linkText: "inlei.pl",
      bg: "url('chiara-bg.jpg')"
    });
  }

  changeItem5() {
    this.setState({
      id: 5,
      name: "Goodside",
      desc:
        "Przykład typowej, nowoczesnej strony - wizytówki stworzonej dla warszawskiej agencji eventowej Goodside.",
      link: "http://goodside.com.pl",
      linkText: "goodside.com.pl",
      bg: "url('goodside-bg.jpg')"
    });
  }

  render() {
    return (
      <section className="section-portfolio" id="section-portfolio">
        <div className="portfolio-container">
          <ScrollAnimation
            className="portfolio-container-content"
            animateIn="fadeIn"
            delay={300}
            animateOnce={true}
          >
            <div className="portfolio-about">
              <div className="portfolio-header">
                <div className="flat-line" />
                <p>Portfolio</p>
              </div>

              <h2>Zadowoleni klienci</h2>
              <p className="portfolio-text-desktop">
                Naciśnij na logo, aby zobaczyć podląd, krótki opis projektu i
                przejść pod wybrany adres WWW.
              </p>
              <p className="portfolio-text-mobile">
                Naciśnij na logo, aby przejść pod wybrany adres WWW.
              </p>
            </div>

            <div className="portfolio-items">
              <div
                className="portfolio-item"
                onClick={this.changeItem0.bind(this)}
              >
                <img
                  src="../../../promaticgames-logo.png"
                  alt="promatic games"
                />
              </div>
              <div
                className="portfolio-item"
                onClick={this.changeItem1.bind(this)}
              >
                <img
                  src="../../../agrzesiak-logo.png"
                  alt="amadeusz grzesiak"
                />
              </div>
              <div
                className="portfolio-item"
                onClick={this.changeItem2.bind(this)}
              >
                <img src="../../../wolnosci14-logo.png" alt="wolności 14" />
              </div>
              <div
                className="portfolio-item"
                onClick={this.changeItem3.bind(this)}
              >
                <img src="../../../chiarashop-logo.png" alt="chiarashop" />
              </div>
              <div
                className="portfolio-item"
                onClick={this.changeItem4.bind(this)}
              >
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div
                className="portfolio-item"
                onClick={this.changeItem5.bind(this)}
              >
                <img src="../../../goodside-logo.png" alt="goodside" />
              </div>
            </div>

            <div className="portfolio-items-mobile">
              <div className="portfolio-item">
                <a href="https://github.com/AmadeuszGK/mysite" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../../../agrzesiak-logo.png"
                    alt="amadeusz grzesiak"
                  />
                </a>
              </div>
              <div className="portfolio-item">
                <a href="https://promaticgames.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../../../promaticgames-logo.png"
                    alt="promatic games"
                  />
                </a>
              </div>
              <div className="portfolio-item">
                <a href="http://wolnosci14.pl/" target="_blank" rel="noopener noreferrer">
                  <img src="../../../wolnosci14-logo.png" alt="wolności 14" />
                </a>
              </div>
              <div className="portfolio-item">
                <a href="https://chiarashop.pl/" target="_blank" rel="noopener noreferrer">
                  <img src="../../../chiarashop-logo.png" alt="chiarashop" />
                </a>
              </div>
              <div className="portfolio-item">
                <a href="https://inlei.pl/" target="_blank" rel="noopener noreferrer">
                  <img src="../../../inlei-logo.png" alt="inlei" />
                </a>
              </div>
              <div className="portfolio-item">
                <a href="http://goodside.com.pl" target="_blank" rel="noopener noreferrer">
                  <img src="../../../goodside-logo.png" alt="goodside" />
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation
          className="portfolio-bigimage"
          animateIn="slideInRight"
          delay={600}
          animateOnce={true}
          style={{ backgroundImage: this.state.bg }}
        >
          <h2 className="portfolio-item-header">{this.state.name}</h2>
          <p className="portfolio-item-desc">{this.state.desc}</p>
          <a className="portfolio-item-link" href={this.state.link} target="_blank" rel="noopener noreferrer">
            {this.state.linkText}
          </a>
        </ScrollAnimation>
      </section>
    );
  }
}

Portfolio.propTypes = {
  siteTitle: PropTypes.string
};

Portfolio.defaultProps = {
  siteTitle: ``
};

export default Portfolio;
