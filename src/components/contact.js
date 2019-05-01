import PropTypes from "prop-types"
import React from "react"


const Contact = ({ siteTitle }) => (
    <section className="section-contact" id="section-contact">
        <div className="contact-box">

            <div className="contact-details">
                <div className="contact-header">
                    <div className="flat-line"></div>
                    <p>KONTAKT</p>
                </div>
                <h2>Nawiążmy<br />współpracę</h2>
                <p>Możesz mnie znaleźć w paru miejscach w sieci, ale jeśli wolisz zrobić to "po staremu" po prostu wyślij maila</p>
            

                <div className="contact-social">
                    <div className="contact-social-item">
                        <a href="mailto:grzesiak.amadeusz@gmail.com"><img src="../../../envelope-regular.svg" alt="email"></img>grzesiak.amadeusz@gmail.com</a>
                    </div>
                    <div className="contact-social-item">
                        <a href="tel:796536228"> <img src="../../../phone-solid.svg" alt="phone"></img>+48 796 536 228</a> 
                    </div>
                    <div className="contact-social-item">
                        <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"> <img src="../../../linkedin-brands.svg" alt="linked"></img>linkedin</a> 
                    </div>
                    <div className="contact-social-item">
                        <a href="https://www.facebook.com/grzesiak.amadeusz"><img src="../../../facebook-square-brands.svg" alt="facebook"></img>facebook</a> 
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <input type="text" defaultValue="twój e-mail" type="email"></input>
                <input type="text" defaultValue="w czym mogę Ci pomóc?" className="message-input"  type="text"></input>
                <button className="send-button">wyślij</button>
            </div>
        </div>
    </section>
)

Contact.propTypes = {
  siteTitle: PropTypes.string,
}

Contact.defaultProps = {
  siteTitle: ``,
}

export default Contact
