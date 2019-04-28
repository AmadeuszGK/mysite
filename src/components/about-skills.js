import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';

////////////// JQUERY TYPING START ////////////////////
var
  words = ['PROMATIC GROUP','INLEI ITALY','CHIARASHOP','PAŁKA GOŁĘBIE','GOODSIDE'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 120;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});
////////////// JQUERY TYPING END ////////////////////

const About = ({ siteTitle }) => (
    <section className="section-about-me" id="section-about-me">
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
            <a href="https://onet.pl">ZOBACZ MOJE CV</a>

            <div className="typing-box">
              <p>Dumny ze współpracy z&nbsp;&nbsp;</p>
              <div className="word"></div>
            </div>

        </div>

        <div className="about-me-images">
          <div className="about-me-image"></div>
          <div className="about-me-box"></div>
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
