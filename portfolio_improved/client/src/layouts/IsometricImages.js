//IdometricImages.js
import React from "react";
import '../Styles/IsometricImages.css'; // Import your CSS file for styling
import { motion } from 'framer-motion';



const IsometricImages = ({ children }) => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
    // const animation = {opacity: 1};
    const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };


  return (

    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}
    >

    <div className="grid-containerIso">
        <div className="grid-itemIso">
            <div className="Image1"></div>
        </div>
        <div className="grid-itemIso2">
            <div className="Image2"></div>
        </div>
      <div className="grid-itemIso3">
        <div className="Image3"></div>
      </div>
      <div className="grid-itemIso4">
        <div className="Image4"></div>
      </div>
    </div>
    </motion.div>
  );
};

export default IsometricImages;
