import React from "react";

import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

const Projects = () => (
    <Menu>
        <MenuItem classID="no-highlight"
                  content="Home"
                  link="/" />
        <MenuItem classID="no-highlight"
                  content="About"
                  link="/about" />
        <MenuItem classID="no-highlight"
                  content="Skills"
                  link="/skills" /> 
        <MenuItem classID="highlight"
                  content="Projects"
                  link="/projects" />  
        <MenuItem classID="no-highlight"
                  content="Contact"
                  link="/contact" />   
    </Menu>
);

export default Projects;