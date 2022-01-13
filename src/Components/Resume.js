import React, { Component } from "react";
import Slide from "react-reveal";

import ReactTypingEffect from 'react-typing-effect';


import jspng from './js.png';
import csspng from './css.png';
import nodejspng from './nodejs.png';
import htmlpng from './html.png';
import reactpng from './react.png';
import firebasepng from './firebase.png';
import dockerpng from './docker.png';
import unitypng from './unity.jpeg';
import phppng from './php.png';
import mysql from './mysql.jpg';



class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          {/*<h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
      <p>{education.description}</p>*/}
      </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          {/*<h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
      <p>{work.description}</p>*/}
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        {/*<Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns"><a href="https://www.siit.tu.ac.th/">{education}</a></div>
              </div>
            </div>
          </div>
    </Slide>*/}

        
          
          <div className="row skill">
            
            <div className="three columns header-col">
              <h2>
                <span>Skills</span>
                
              </h2>
            </div>
            
            <div className="nine columns main-col">
             
            
              <div >
                <ul>
                <Slide right duration={1300}>
                <li>
                <h1>F R O N T E N D</h1>
                
                <img className="pic" src={jspng} alt="js"/>
                <img className="pic" src={reactpng} alt="react"/>
                <img className="pic" src={htmlpng} alt="html"/>
                <img className="pic" src={csspng} alt="css"/>
                <img className="pic" src={phppng} alt="php"/>
                
                
                   
                
                </li>
                </Slide>
                <br></br>
                
                <Slide left duration={1300}>
                <li>
                  <h1>B A C K E N D</h1>
                  <img className="pic" src={nodejspng} alt="nodejs"/>
                  <img className="pic" src={firebasepng} alt="firebase"/>
                  <img className="pic" src={dockerpng} alt="docker"/>
                  <img className="pic" src={mysql} alt="docker"/>
                 
                </li>
                </Slide>
                <br></br>
                <Slide up duration={1300}>
                <li>
                  <h1>G A M E - D E V E L O P M E N T</h1>
                  <img className="pic" src={unitypng} alt="unity"/>
                  
                </li>
                </Slide>

                </ul>
              </div>
              
            </div>
            
            
            
          </div>
        

        {/*<Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Internship</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
  </Slide>*/}


      </section>
    );
  }
}

export default Resume;
