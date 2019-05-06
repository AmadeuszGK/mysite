import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "Amadeusz Grzesiak",
      desc:
        "Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.",
      link: "www.amadeuszgrzesiak.pl",
      linkText: "amadeuszgrzesiak.pl",
      bg: "url('agrzesiak-bg.jpg')"
    };
  }

  changeItem0() {
    this.setState({
      id: 0,
      name: "Amadeusz Grzesiak",
      desc:
        "Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.",
      link: "www.amadeuszgrzesiak.pl",
      linkText: "amadeuszgrzesiak.pl",
      bg: "url('agrzesiak-bg.jpg')"
    });
  }

  changeItem1() {
    this.setState({
      id: 1,
      name: "Chiara Shop",
      desc:
        "Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel do zarządzania sklepem do dyspozycji właścicielki.",
      link: "https://chiarashop.pl/",
      linkText: "chiarashop.pl",
      bg: "url('chiara-bg.jpg')"
    });
  }

  changeItem2() {
    this.setState({
      id: 2,
      name: "Inlei",
      desc:
        "Sklep internetowy stworzony dla polskich dystrubutorów włoskiego Inlei. Oparty jest na Wordpress i Woocomerce. Posiada panel do zarządzania sklepem.",
      link: "https://inlei.pl/",
      linkText: "inlei.pl",
      bg: "url('chiara-bg.jpg')"
    });
  }

  changeItem3() {
    this.setState({
      id: 4,
      name: "Goodside",
      desc:
        "Przykład typowej, nowoczesnej strony - wizytówki stworzonej dla warszawskiej agencji eventowej Goodside.",
      link: "http://goodside.com.pl",
      linkText: "goodside.com.pl",
      bg: "url('goodside-bg.jpg')"
    });
  }

  // changeItem4() {
  //   this.setState({
  //     id: 0,
  //     name: 'Amadeusz Grzesiak',
  //     desc: 'Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.',
  //     link: 'www.amadeuszgrzesiak.pl',
  //     linkText: 'amadeuszgrzesiak.pl',
  //     bg: "url('agrzesiak-bg.jpg')"
  //   })
  // }

  // changeItem5() {
  //   this.setState({
  //     id: 0,
  //     name: 'Amadeusz Grzesiak',
  //     desc: 'Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.',
  //     link: 'www.amadeuszgrzesiak.pl',
  //     linkText: 'amadeuszgrzesiak.pl',
  //     bg: "url('agrzesiak-bg.jpg')"
  //   })
  // }

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
                id="portfolioItem1"
                onClick={this.changeItem0.bind(this)}
              >
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div
                className="portfolio-item"
                id="portfolioItem2"
                onClick={this.changeItem1.bind(this)}
              >
                <img src="../../../chiarashop-logo.png" alt="chiarashop" />
              </div>
              <div
                className="portfolio-item"
                id="portfolioItem3"
                onClick={this.changeItem2.bind(this)}
              >
                <img src="../../../palka-logo.png" alt="pałka gołębie" />
              </div>
              <div
                className="portfolio-item"
                id="portfolioItem4"
                onClick={this.changeItem3.bind(this)}
              >
                <img src="../../../goodside-logo.png" alt="goodside" />
              </div>
              <div className="portfolio-item" id="portfolioItem5">
                <img src="../../../agrzesiak-logo.png" alt="agrzesiak" />
              </div>
              <div className="portfolio-item" id="portfolioItem6">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
            </div>

            <div className="portfolio-items-mobile">
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
              </div>
              <div className="portfolio-item">
                <img src="../../../inlei-logo.png" alt="inlei" />
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
          <a className="portfolio-item-link" href={this.state.link}>
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
