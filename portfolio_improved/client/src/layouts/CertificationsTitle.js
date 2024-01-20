import React from "react";
import { motion } from "framer-motion";
import "../Styles/CertificationsTitle.css";

const CertificationsTitle = () => {

    const exitAnimation = { opacity: 0, transition: {duration: 1, delay: 0.5}}
    const enterAnimation = { opacity: 1, transition: {duration: 1, delay: 0.5}}

    return (

        <motion.div enter={exitAnimation} animate={enterAnimation} exit={exitAnimation}>

        <div className="CertificationsTitleParent">
            <div className="CertificationsTitleWelcome">
                <h1>Certifications</h1>
            </div>
        </div>

        </motion.div>
    )
}

export default CertificationsTitle;