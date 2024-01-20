import React from 'react';
import '../Styles/Projects.css'; // Make sure to import your CSS file correctly
import { motion } from 'framer-motion'
import ProjectsTitle from '../layouts/ProjectsTitle';


const subsectionsData = [
//   { title: 'Whiskey!', link: 'https://twisty-congruous-trouble.glitch.me' },
  { title: 'React - Cooking and Recipes App', link: 'https://final-testing-recipe.web.app/' },
//   { title: 'Phonebook', link: 'https://nettle-remarkable-jumpsuit.glitch.me' },
  { title: 'Flask - Recipes', link: 'https://jazzy-foregoing-planet.glitch.me' },
];

function Projects() {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 0.5 } };

    return (

        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}
        >
            <ProjectsTitle/>
            <div className='projects-container-main'>
                {/* <div className='title-P'>
                    <h1>Projects completed</h1>
                    <h1>and</h1>
                    <h1>in development</h1>
                </div> */}
                < div className="proj-container">
                    <div className="Projects background-fade">
                        <div className="grid-container">
                            {subsectionsData.map((subsection, index) => (
                            <div key={index} className="project-subsection">
                                <h2>{subsection.title}</h2>
                                <a href={subsection.link} target="_blank" rel="noopener noreferrer">
                                Click to visit Website (Hosted on Glitch)
                                </a>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
  );
}

export default Projects;
