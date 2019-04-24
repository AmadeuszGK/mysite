import PropTypes from "prop-types"
import React from "react"

const Skills = ({ siteTitle }) => (
  <section className="section-skills">

<div className="skills-box">

  <div className="skills-top-square"></div>
  <div className="skills-bottom-square"></div>

  <div className="skills-desc">
    <div className="skills-header">
      <div className="flat-line"></div>
      <p>UMIEJĘTNOŚCI I TECHNOLOGIE</p>
    </div>

    <h2>Najnowsze<br />technologie</h2>
    <p>Moje projekty tworzone są w oparciu o najnowsze technologie webowe. Stale rozwijam wachlarz umiejętności poprzez nowe wyzwania w pracy, jak i doszkalając się w domu.</p>
  </div>

  <div className="skills">
        <div className="skill-container">
          <img className="skill-image" src="../../../javascript.png" alt="javascript"></img>
          <p className="skill-text">javascript</p>
        </div>
        <div className="skill-container">
          <img className="skill-image" src="../../../html5.png" alt="html"></img>
          <p className="skill-text">html 5</p>
        </div>
        <div className="skill-container">
          <img className="skill-image" src="../../../css3.png" alt="css"></img>
          <p className="skill-text">css 3</p>
        </div>
        <div className="skill-container">
          <img className="skill-image" src="../../../angular.png" alt="angular"></img>
          <p className="skill-text">angular 2</p>
        </div>
        <div className="skill-container">
          <img className="skill-image" src="../../../firebase.png" alt="firebase"></img>
          <p className="skill-text">firebase</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../sass.png" alt="sass"></img>
        <p className="skill-text">sass</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../less.png" alt="less"></img>
        <p className="skill-text">less</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../es6.png" alt="es6"></img>
        <p className="skill-text">es6</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../bootstrap.png" alt="bootstrap"></img>
        <p className="skill-text">bootstrap</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../wordpress.png" alt="wordpress"></img>
        <p className="skill-text">wordpress</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../photoshop.png" alt="photoshop"></img>
        <p className="skill-text">photoshop</p>
        </div>
        <div className="skill-container">
        <img className="skill-image" src="../../../figma.png" alt="figma"></img>
        <p className="skill-text">figma</p>
        </div> 
      </div>

    </div>
  </section>
)

Skills.propTypes = {
  siteTitle: PropTypes.string,
}

Skills.defaultProps = {
  siteTitle: ``,
}

export default Skills
