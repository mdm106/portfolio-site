import React from "react";

import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

const Skills = () => (
    <Menu>
        <MenuItem classID="no-highlight"
                  content="Home"
                  link="/" />
        <MenuItem classID="no-highlight"
                  content="About"
                  link="/about" />
        <MenuItem classID="highlight"
                  content="Skills"
                  link="/skills" /> 
        <MenuItem classID="no-highlight"
                  content="Projects"
                  link="/projects" />  
        <MenuItem classID="no-highlight"
                  content="Contact"
                  link="/contact" />   
    </Menu>
);

export default Skills;