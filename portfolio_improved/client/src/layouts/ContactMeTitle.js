import React from "react";
import { motion } from "framer-motion";
import "../Styles/ContactMeTitle.css";

const ContactMeTitle = () => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 }};
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 1 }};


    return (

        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            <div className="ContactMeTitleParent">
                <div className="ContactMeTitleWelcome">
                    <h1>Contact Me</h1>
                </div>
            </div>
        </motion.div>
    )

}

export default ContactMeTitle;