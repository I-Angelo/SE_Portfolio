//AboutMe.js
import React, { useEffect, useState } from 'react';
import profile from '../static/PROFILE_PIC.jpg'
import '../Styles/aboutMe.css';
import { motion } from 'framer-motion';
import RootLayout from '../layouts/RootLayOut';
import { useScrollControl } from '../config/ScrollControl';
import AboutMeTitle from '../layouts/AboutMeTitle';
// import "../Styles/AboutMeTitle.css"



function AboutMe() {

  useScrollControl(true);

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 1 } };
    
    

    return (

      
          <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            {/* <body> */}
            <AboutMeTitle/>

          <div className="about-me-container-A">

              {/* <AboutMeTitle/> */}
           
            <div className="about-me-content2-A">
             
              <p>
              <br></br>
              I've successfully transitioned into software engineering, bringing extensive experience from roles as a pre-sales engineer and business consultant. My journey reflects a commitment to continuous learning and knowledge pursuit. <br></br><br></br>In my previous roles, I excelled at understanding complex business challenges and creating tailored solutions. Now in software development, I leverage expertise in JavaScript, Python, C++, TypeScript, and React, supported by AWS Certified Cloud Practitioner certification. <br></br><br></br> Beyond work, my passions include cooking and golf, contributing to a balanced life. I prioritize work-life harmony, aiming to create innovative software solutions driving business growth. Excited about my software engineering journey, I seek opportunities to contribute my diverse skills to the tech industry.<br></br><br></br>Feel free to contact me for a detailed discussion under the 'Contact Me' section in the Main Menu!

              </p>
            </div>
            <div className="Profile-pic-A">
                <img src={profile} alt="Profile" className="selfie" />
  
              </div>
          </div>
          {/* </body> */}
          </motion.div>
          
  );
}

export default AboutMe;

