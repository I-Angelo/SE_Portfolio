import React from "react";
import { motion } from "framer-motion";
import "../Styles/LoginTitle.css"

const LoginTitle = () => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 1}}
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 1}}

    return (

        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            <div className="LoginTitleParent">
                <div className="LoginTitleWelcome">
                    <h1>Login</h1>
                </div>
            </div>
        </motion.div>

    )

}

export default LoginTitle;