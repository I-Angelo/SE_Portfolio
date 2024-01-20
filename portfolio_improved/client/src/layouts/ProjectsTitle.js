import React from "react";
import { motion } from "framer-motion";
import "../Styles/ProjectsTitle.css"

const ProjectsTitle = () => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 1}}
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 1}}

    return (

        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            <div className="ProjectsTitleParent">
                <div className="ProjectsTitleWelcome">
                    <h1>
                        Projects In Development
                    </h1>
                </div>
            </div>

        </motion.div>
    )
}

export default ProjectsTitle;