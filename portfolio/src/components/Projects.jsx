import { Link } from "react-router-dom"
import './Projects.css'
import React, { useState, useEffect } from 'react';
import healthfit from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit.png'
import healthfitmodal from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit-Modal.png'
import healthfitmain from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Health-Fit-Main.png'
import maintr from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/MainTR.png'
import pagetr from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/PageTR.png'
import welcomexatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/WelcomeXATL.png'
import pagexatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/PageXATL.png'
import mainxatl from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/MainXATL.png'
import saas from '/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/Saas.png'


const Projects = ({image}) => {  
    return (
    <div className="Projects">
        <header className="Projects-header">
            <Link className="ProjectsRTNHome" to="/"><button className="LinkBTN">Home</button></Link>
            <h1 className="ProjectsH1">Projects:</h1>
        </header>
        <div className="BTN-holder">
            <h2 className="ProjectsH2">Personnal Projects:</h2>
            <div className="ProjectsItem">
                    <img src={welcomexatl} alt="Project 1" className="ProjectsBTN" />
                    <img src={mainxatl} alt="Project 1" className="ProjectsBTN" />
                    <img src={pagexatl} alt="Project 1" className="ProjectsBTN" />
                    <div className="ProjectsTextbox">
                        <h3>Project: XploreATL</h3>
                    </div>
            </div>
            <div className="ProjectsItem">
                    <img src={maintr} alt="Time Rewind" className="ProjectsBTN" />
                    <img src={pagetr} alt="Time Rewind" className="ProjectsBTN" />
                    <div className="ProjectsTextbox">
                        <h3>Project: Time Rewind</h3>
                    </div>
            </div>
            <h2 className="ProjectsH2">Group Projects:</h2>
            <div className="ProjectsItem">
                    <img src={healthfitmain} alt="Health-Fit" className="ProjectsBTN" />
                    <img src={healthfit} alt="Health-Fit" className="ProjectsBTN" />
                    <img src={healthfitmodal} alt="Health-Fit" className="ProjectsBTN" />
                    <div className="ProjectsTextbox">
                        <h3>Project: Health-Fit</h3>
                    </div>
            </div>
              {/* <img src='' alt="Project 3" className="ProjectsBTN" />
              <img src='' alt="Health-Fit" className="ProjectsBTN" />
              <img src='' alt="Project 4" className="ProjectsBTN" /> */}
            <h2 className="ProjectsH2">Hackathons:</h2>
            <div className="ProjectsItem">
              <img src={saas} alt="Secure SaaS Supply Chains" className="ProjectsBTN" />
                    <div className="ProjectsTextbox">
                        <h3>Coming Soon</h3>
                    </div>
              </div>
              {/* <img src='' alt="Hunger Recipes" className="ProjectsBTN" /> */}
              <p></p>
              
        </div>
        
    </div>
    )
}
export default Projects

