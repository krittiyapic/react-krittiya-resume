import React, { Component } from "react";
import Fade from "react-reveal";
import { Slide } from "react-reveal";
import ReactTypingEffect from 'react-typing-effect';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;


 

    return (
      <section id="about">
        
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Krittiya"
              />
            </div>
            <div className="nine columns main-col">
              <h2> <ReactTypingEffect eraseDelay="50000" text={["About Me."]}/></h2>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am newly graduated in Information Technology from Sirindhorn International Institute of Technology (SIIT), Thammasat University.
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am interested in full stack developer because developing website both front-end and back-end is my passion and I’d like to challenge myself to create website with complex code make it into a beautiful, and responsive user interface. 
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I will be very proud when I have designed and developed a website that the users will have the best possible user’s experience.</p>
              <div className="row">
                {/*<div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                 </div>*/}
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-user"></i>Resume
                    </a>
                    
                    <a href="https://drive.google.com/drive/folders/1UYkenVvPI3fv16cWWItbiADW7DGnKXld" className="button">
                      <i className="fa fa-check"></i>Certificate
                    </a>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </Fade>
        <div id="resume2">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>EDUCATION</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <div>
                  <h3><a href="https://www.siit.tu.ac.th/">SIIT, Thammasat University</a></h3>
                  <p className="info">
                  Bachelor of Science, Information Technology <br></br>
                    <em className="date">2017 - 2021</em>
                  </p>
                  <p></p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide right duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>INTERNSHIP</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <div>
                  <h3>CAT Telecom</h3>
                  <p className="info">
                    Research Assistant <span><br></br></span>
                    <em className="date">1st of June 2020 - 31th of July 2020</em>
                  </p>
                  <p>Worked on the research project named RTSP streaming server<br></br>Created software that can watch video from real-time CCTV</p>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </Slide>

      
      </div>
        
      </section>
      
   
    
      
    );
  }
}

export default About;
