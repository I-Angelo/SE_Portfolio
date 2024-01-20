import React from "react";
import '../Styles/AboutMeTitle.css';
import { motion } from "framer-motion";

const AboutMeTitle = () => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 }}
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 0.5 }}


    return (

        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            <div className="AboutMeTitleParent">
                <div className="AboutMeTitleWelcome">
                    <h1>About Me</h1>
                </div>
            </div>

        </motion.div>

    );



}

export default AboutMeTitle;