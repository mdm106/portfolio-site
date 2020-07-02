import React from "react";

import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Contact = () => (
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
        <MenuItem classID="no-highlight"
                  content="Projects"
                  link="/projects" />  
        <MenuItem classID="highlight"
                  content="Contact"
                  link="/contact" />   
    </Menu>
);

export default Contact;