import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

class Footer extends Component {

  
  render() {
    if (!this.props.data) return null;

    function Mailto({ email, subject, body, ...props }) {
      return (
        <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
          {props.children}
        </a>
      );
    }

    const networks = this.props.data.social.map(function (network) {
      return (
        
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      
      <footer id="footer">
        
        <div className="row">
        <br></br>
          <Fade bottom>
            <div className="twelve columns">
              <h1 id="headfooter">Get in touch with me</h1>
              <ul className="social-links">{networks}
              <li >
              <Mailto email="krittiya.pichai@gmail.com"><i className="fa fa-envelope"></i></Mailto>
          
        </li>
              </ul>

              <ul className="copyright">
                {/*<li>&copy; Copyright 2021 Nordic Giant</li>*/}
                <li>
                  
                  <a>
                    Made by React
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
     
    );
  }
}

export default Footer;
