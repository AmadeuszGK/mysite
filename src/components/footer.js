import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Footer = ({ siteTitle }) => (
  <footer>
    <Link className="skills-bottom-square" to="/#section-about-me">
      <div className="scroll-to-top">
        <div className="line-box">
          <div className="white-line" />
        </div>
      </div>
      <p>Top</p>
    </Link>

    <div className="footer-box">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Amadeusz Grzesiak. All rights reserved
        </p>
        <ul>
          <li>
            <Link className="footer-menu-item" to="/#section-about-me">
              O mnie
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-offer">
              Oferta
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-skills">
              Umiejętności
            </Link>
          </li>
          <li>
            <Link className="footer-menu-item" to="/#section-contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
