import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Menu = ({ siteTitle }) => (
  <nav className="side-menu">
    <div className="menu-button">
      <div id="nav-icon3">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>

    <ul>
      <li>
        <Link className="navButton" to="/#section-about-me">
          O mnie
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-offer">
          Oferta
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-skills">
          Umiejętności
        </Link>
      </li>
      <li>
        <Link className="navButton" to="/#section-contact">
          Kontakt
        </Link>
      </li>

      <div className="side-menu-bottom">
        <div className="side-menu-social">
          <a href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160">
            {" "}
            <img src="../../../linkedin-brands-white.png" alt="linked" />
          </a>
          <a href="https://www.facebook.com/grzesiak.amadeusz">
            <img
              src="../../../facebook-square-brands-white.png"
              alt="facebook"
            />
          </a>
        </div>
        <div className="side-menu-contact">
          <a href="tel:796536228">
            {" "}
            <img src="../../../phone-solid-white.png" alt="phone" />+48 796 536
            228
          </a>
        </div>
        <div className="side-menu-contact">
          <a href="mailto:grzesiak.amadeusz@gmail.com">
            <img src="../../../envelope-regular-white.png" alt="email" />
            grzesiak.amadeusz@gmail.com
          </a>
        </div>
      </div>
    </ul>
  </nav>
);

Menu.propTypes = {
  siteTitle: PropTypes.string
};

Menu.defaultProps = {
  siteTitle: ``
};

export default Menu;
