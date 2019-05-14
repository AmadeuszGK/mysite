import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = ({ siteTitle }) => (
  <section className="section-skills" id="section-skills">
    <div className="skills-box">
      <ScrollAnimation
        className="skills-top-square"
        animateIn="slideInLeft"
        delay={700}
        animateOnce={true}
      />
      <ScrollAnimation
        className="skills-bottom-square"
        animateIn="slideInRight"
        delay={700}
        animateOnce={true}
      />

      <div className="skills-desc">
        <div className="skills-header">
          <div className="flat-line" />
          <p className="flat-line-text">UMIEJĘTNOŚCI I TECHNOLOGIE</p>
        </div>

        <h2>
          Najnowsze
          <br />
          technologie
        </h2>
        <p>
          Moje projekty tworzone są w oparciu o najnowsze technologie webowe.
          Stale rozwijam wachlarz umiejętności poprzez nowe wyzwania oraz kursy.
        </p>
      </div>

      <div className="skills">
        <ScrollAnimation
          className="all-skills"
          animateIn="fadeIn"
          delay={300}
          animateOnce={true}
        >
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../javascript.png"
              alt="javascript"
            />
            <p className="skill-text">javascript</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src="../../../html5.png" alt="html" />
            <p className="skill-text">html 5</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src="../../../css3.png" alt="css" />
            <p className="skill-text">css 3</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../angular.png"
              alt="angular"
            />
            <p className="skill-text">angular 2</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../reactjs.png"
              alt="react"
            />
            <p className="skill-text">react js</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../firebase.png"
              alt="firebase"
            />
            <p className="skill-text">firebase</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src="../../../sass.png" alt="sass" />
            <p className="skill-text">sass</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src="../../../es6.png" alt="es6" />
            <p className="skill-text">es6</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../bootstrap.png"
              alt="bootstrap"
            />
            <p className="skill-text">bootstrap</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../wordpress.png"
              alt="wordpress"
            />
            <p className="skill-text">wordpress</p>
          </div>
          <div className="skill-container">
            <img
              className="skill-image"
              src="../../../photoshop.png"
              alt="photoshop"
            />
            <p className="skill-text">photoshop</p>
          </div>
          <div className="skill-container">
            <img className="skill-image" src="../../../figma.png" alt="figma" />
            <p className="skill-text">figma</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

Skills.propTypes = {
  siteTitle: PropTypes.string
};

Skills.defaultProps = {
  siteTitle: ``
};

export default Skills;
