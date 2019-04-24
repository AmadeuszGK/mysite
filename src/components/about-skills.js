import PropTypes from "prop-types"
import React from "react"


const About = ({ siteTitle }) => (
    <section className="section-about-me">
      <div className="about-me">

        <div className="about-me-text">
            <div className="about-me-header">
              <div className="flat-line"></div>
              <p>O MNIE</p>
            </div>

            <p>
            Cześć, jestem kreatywnym front-end&nbsp;developerem z&nbsp;Jeleniej Góry. <br />
            Stwórzmy coś razem!
            </p>
            <a href="#">ZOBACZ MOJE CV</a>
        </div>

        <div className="about-me-images">
          <div className="about-me-image">
          
          </div>
          <div className="about-me-box">

          </div>
        </div>


      </div>
    </section>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
