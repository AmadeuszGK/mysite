import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import About from "./about";
import Portfolio from "./portfolio";
import Offer from "./offer";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import Menu from "./menu";
import "./layout.css";
import "../styles/main.scss";




import "animate.css/animate.min.css";
import Loader from 'react-loader-spinner'
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}



class Layout extends React.Component {

  constructor () {
    super(); 
    this.state = {
      isLoading: true,
      showMenu: false
    } 

    const script = document.createElement("script");
    script.src = "/delaunay.js";
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement("script");
    script1.src = "/require.js";
    script1.async = true; 
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/canvas.js";
    script2.async = true; 
    document.body.appendChild(script2);


    // document.title = "Amadesz Grzesiak - Front-end Developer | Strony i sklepy internetowe";
    // document.description = "Cześć, nazywam się Amadeusz i jestem kreatywnym front-end developerem z Jeleniej Góry. Stwórzmy coś razem!";
    // document.lang = "pl-PL";

  }
  
  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  componentDidMount () {
    this.setState({ isLoading: false });
  }


  render () {

    return (
      <div>
  
          <div className={this.state.showMenu ? "website-content--show-menu" : "website-content"}>

            <div className="loader-content" style={{display: this.state.isLoading ? 'flex' : 'none' }}>
              <Loader type="Oval" color="#d83434" height={110} width={110} />
            </div>

            <Menu passedFunction={this.toglleMenu} showMenu={this.state.showMenu}/>
  
            <div className="main-content">
              <div className="main-content-button" onClick={this.toglleMenu.bind(this)}/>
  
              <Header/>
  
              <main>
                <About />
                <Offer />
                <Portfolio />
                <Skills />
                <Contact />
              </main>
  
              <Footer />
            </div>
          </div>
          </div>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
