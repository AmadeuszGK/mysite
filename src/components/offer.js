import PropTypes from "prop-types"
import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';


const Offer = ({ siteTitle }) => (
<section className="section-offer" id="section-offer">

    <div className="offer-grid">

        <ScrollAnimation className="offer-about" animateIn="slideInDown" delay={100}  animateOnce={true}>

            <div className="offer-header">
              <div className="flat-line"></div>
              <p>CO ROBIĘ?</p>
            </div>

            <h2>Nowocześność<br />i użtkowość</h2>
            <p>Moje strony charakteryzuje przede wszystkim intuicyjna obsługa oraz nowoczesny design.</p>
        </ScrollAnimation>

        <div className="offer-items">
            <ScrollAnimation className="offer-item" animateIn="slideInUp" delay={300}  animateOnce={true}>
                <img src="../../../www.png" alt="sklepy stron internetowe"></img>
                <h3>Strony WWW i Sklepy</h3>
                <p>Tworzę strony firmowe oraz sklepy internetowe. Wszystko dostosowane do urządzeń mobilnych. Tworzę strony statyczne oraz dynamiczne z wykorzystaniem najnowszych technologii.</p>
            </ScrollAnimation>
            <ScrollAnimation className="offer-item" animateIn="slideInUp" delay={700}  animateOnce={true}>
                <img src="../../../fix.png" alt="naprawa stron internetowych"></img>
                <h3>Naprawa starych Stron</h3>
                <p>Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron internetowych. Dobieram odpowiednie metody do zaistniałej sytuacji: naprawiam, poprawiam lub oferuję nową, wysoką jakość.</p>
            </ScrollAnimation>
            <ScrollAnimation className="offer-item" animateIn="slideInUp" delay={1100}  animateOnce={true}>
                <img src="../../../settings.png" alt="adminiastracja stron"></img>
                <h3>Administrowanie stronami</h3>
                <p>Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i skleów internetowych, wdrażam podsyłane treści lub wprowadzam modyfikacje. Ponadto dbam by wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie zapasowe.</p>
            </ScrollAnimation>

        </div>
    </div>

</section>
)

Offer.propTypes = {
  siteTitle: PropTypes.string,
}

Offer.defaultProps = {
  siteTitle: ``,
}

export default Offer
