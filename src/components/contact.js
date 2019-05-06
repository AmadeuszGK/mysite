import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = ({ siteTitle }) => (
  <section className="section-contact" id="section-contact">
    <div className="contact-box">
      <ScrollAnimation
        className="contact-details"
        animateIn="slideInUp"
        delay={300}
        animateOnce={true}
      >
        <div className="contact-header">
          <div className="flat-line" />
          <p>KONTAKT</p>
        </div>

        <h2>
          Nawiążmy
          <br />
          współpracę
        </h2>
        {/* 
                <div className="contact-bg-number">09</div> */}

        <p>
          Możesz mnie znaleźć w paru miejscach w sieci, ale jeśli wolisz zrobić
          to "po staremu" po prostu wyślij maila.
        </p>

        <div className="contact-social">
          <div className="contact-social-item">
            <a href="mailto:grzesiak.amadeusz@gmail.com">
              <img src="../../../envelope-regular.png" alt="email" />
              grzesiak.amadeusz@gmail.com
            </a>
          </div>
          <div className="contact-social-item">
            <a href="tel:796536228">
              {" "}
              <img src="../../../phone-solid.png" alt="phone" />+48 796 536 228
            </a>
          </div>
          <div className="contact-social-item">
            <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160">
              {" "}
              <img src="../../../linkedin-brands.png" alt="linked" />linkedin
            </a>
          </div>
          <div className="contact-social-item">
            <a href="https://www.facebook.com/grzesiak.amadeusz">
              <img src="../../../facebook-square-brands.png" alt="facebook" />
              facebook
            </a>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        className="contact-image"
        animateIn="fadeIn"
        delay={600}
        animateOnce={true}
      >
        <img src="../../../responsive.png" alt="responsive screens" />
      </ScrollAnimation>
      {/* <div className="contact-form">
                <input type="text" placeholder="twój e-mail" type="email"></input>
                <textarea type="text" placeholder="w czym mogę Ci pomóc?" className="message-input"  type="text"></textarea>
                <button className="send-button">wyślij</button>
            </div> */}
    </div>
  </section>
);

Contact.propTypes = {
  siteTitle: PropTypes.string
};

Contact.defaultProps = {
  siteTitle: ``
};

export default Contact;
