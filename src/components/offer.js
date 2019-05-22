import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Offer = ({ siteTitle }) => (
  <section className="section-offer" id="section-offer">
    <div className="offer-grid">
      <ScrollAnimation
        className="offer-about"
        animateIn="slideInDown"
        delay={100}
        animateOnce={true}
      >
        <div className="offer-header">
          <div className="flat-line" />
          <p>CO ROBIĘ?</p>
        </div>

        <h2>
          Nowoczesność
          <br />i użytkowość
        </h2>
        <p>
          Moje strony charakteryzuje przede wszystkim intuicyjna obsługa oraz
          nowoczesny design.
        </p>
      </ScrollAnimation>

      <div className="offer-items">
        <ScrollAnimation
          className="offer-item"
          animateIn="slideInUp"
          delay={300}
          animateOnce={true}
        >
          <img src="../../../www.png" alt="sklepy stron internetowe" />
          <h3>Strony WWW i sklepy</h3>
          <p>
            Tworzę strony firmowe oraz sklepy internetowe. Wszystko dostosowane
            do urządzeń mobilnych. Tworzę strony statyczne oraz dynamiczne z
            wykorzystaniem najnowszych technologii.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="offer-item"
          animateIn="slideInUp"
          delay={700}
          animateOnce={true}
        >
          <img src="../../../fix.png" alt="naprawa stron internetowych" />
          <h3>Naprawa starych stron</h3>
          <p>
            Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron
            internetowych. Dobieram odpowiednie metody do zaistniałej sytuacji:
            naprawiam, poprawiam lub oferuję nową, wysoką jakość.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="offer-item"
          animateIn="slideInUp"
          delay={1100}
          animateOnce={true}
        >
          <img src="../../../settings.png" alt="adminiastracja stron" />
          <h3>Administrowanie stron</h3>
          <p>
            Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i
            sklepów internetowych, wdrażam podsyłane treści lub wprowadzam
            modyfikacje. Ponadto dbam, aby wszystko było zaktualizowane,
            działało sprawnie oraz tworzę kopie zapasowe.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

Offer.propTypes = {
  siteTitle: PropTypes.string
};

Offer.defaultProps = {
  siteTitle: ``
};

export default Offer;
