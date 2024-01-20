import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../Styles/contactMe.css'
import { motion } from 'framer-motion';
import '../Styles/contactMe.css'
import ContactMeTitle from '../layouts/ContactMeTitle';



function ContactMe() {

  const [submitted, setSubmitted] = useState(false);

  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
  const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 1 } };

  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    axios.post('https://noisy-quickest-jeep.glitch.me/contact_me', data)
      .then((response) => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
      <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>

          <ContactMeTitle/>

        <div className="contact-me-container"> 
          {/* <div className="contact-me-content">
            <h1>Contact Me</h1>
          </div> */}
          <div>
            <form className="contact-form" id='a-form' onSubmit={submitHandler}>
              <div className="personal-info">
                <label className='input-section' htmlFor="first_name">First       Name</label>
                <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='first_name' type='text' placeholder='First Name' name='first_name' />
                
                <label className='input-section padd1' htmlFor="last_name">Last Name</label>
                <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='last_name' type='text' placeholder='Last Name' name='last_name' />
                
                <label className='input-section padd1' htmlFor="contact_number">Phone Number</label>
                <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='contact_number' type='text' placeholder='Contact Number' name='contact_number' />
                
                <label className='input-section padd1' htmlFor="email-address">Email</label>
                <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='email_address' type='text' placeholder='Email Address' name='email_address' />
              </div>
              
              <div className="message-section">
                <label className='input-section' htmlFor="message_content">Message</label>
                <textarea className='w-full h-8 p-1 mb-6 focus:outline-none message-section message-input f2' id='message_content' type='text' placeholder='Message content' name='message_content' />
              </div>
            
            </form>
          </div>
            <div className="submit-button-container">
              <button className='submit-button' form='a-form' type='submit'>Submit</button>
            </div>
        </div>

        <div className="form-submit-message">
          {submitted && <p>Form successfully submitted!</p>}
        </div>
    
      </motion.div>
    
  );
};

export default ContactMe;



