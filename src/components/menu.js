import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import linekdinWhite from '../images/linkedin-brands-white.png'
import facebookWhite from '../images/facebook-square-brands-white.png'
import phoneWhite from '../images/phone-solid-white.png'
import envelopeWhite from '../images/envelope-regular-white.png'

class  Menu extends React.Component  {

  render() {
    return(
      // <nav className={this.state.showMenu ? "side-menu show" : "side-menu"}>
      <nav className="side-menu"> 
      <div className="menu-button">
      <div id="nav-icon3" onClick={this.props.passedFunction} className={this.props.showMenu ? "open" : ""}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>

    <ul>
      <li>
        <Link className="navButton" to="/#section-about-me" onClick={this.props.passedFunction}>
          O mnie
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-offer" onClick={this.props.passedFunction}>
          Oferta
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-portfolio" onClick={this.props.passedFunction}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-skills" onClick={this.props.passedFunction}>
          Umiejętności
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-contact" onClick={this.props.passedFunction}>
          Kontakt
        </Link>
      </li>

      <div className="side-menu-bottom">
        <div className="side-menu-social">
          <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160" target="_blank" rel="noopener noreferrer">
            {" "}
            <img src={linekdinWhite} alt="linked" />
          </a>
          <a href="https://www.facebook.com/grzesiak.amadeusz" target="_blank" rel="noopener noreferrer">
            <img
              src={facebookWhite} alt="facebook"
            />
          </a>
        </div>
        <div className="side-menu-contact">
          <a href="tel:796536228">
            {" "}
            <img src={phoneWhite} alt="phone" />+48 796 536
            228
          </a>
        </div>
        <div className="side-menu-contact">
          <a href="mailto:grzesiak.amadeusz@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={envelopeWhite} alt="email" />
            grzesiak.amadeusz@gmail.com
          </a>
        </div>
      </div>
    </ul>
  </nav>
    )
  }
  
};

Menu.propTypes = {
  siteTitle: PropTypes.string
};

Menu.defaultProps = {
  siteTitle: ``
};

export default Menu;

