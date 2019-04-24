import PropTypes from "prop-types"
import React from "react"

const Offer = ({ siteTitle }) => (
<section className="section-offer">

    <div className="offer-grid">

        <div className="offer-about">

            <div className="offer-header">
              <div className="flat-line"></div>
              <p>CO ROBIĘ?</p>
            </div>

            <h2>Nowocześność<br />i użtkowość</h2>
            <p>Our digital agency has two goals: optimise every user’s experience, and create real impact for our clients.</p>
        </div>

        <div className="offer-items">

            <div className="offer-item">
                <img src="../../../offer.png" alt="oferta"></img>
                <h3>Strony WWW i Sklepy</h3>
                <p>Tworzę strony firmowe oraz sklepy internetowe. Wszystko dostosowane do urządzeń mobilnych. Tworzę strony statyczne oraz dynamiczne z wykorzystaniem najnowszych technologii.</p>
            </div>
            <div className="offer-item">
                <img src="../../../offer.png" alt="oferta"></img>
                <h3>Naprawa starych Stron</h3>
                <p>Internet jest pełen zepsutych, zaniedbanych lub przestarzałych stron internetowych. Dobieram odpowiednie metody do zaistniałej sytuacji: naprawiam, poprawiam lub oferuję nową, wysoką jakość.</p>
            </div>
            <div className="offer-item">
                <img src="../../../offer.png" alt="oferta"></img>
                <h3>Administrowanie stronami</h3>
                <p>Moi klienci zawsze mogą na mnie liczyć, pomagam w obsłudze stron i skleów internetowych, wdrażam podsyłane treści lub wprowadzam modyfikacje. Ponadto dbam by wszystko było zaktualizowane, działało sprawnie oraz tworzę kopie zapasowe.</p>
            </div>

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
