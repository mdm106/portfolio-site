import React from "react";

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";

const Projects = () => (
    <Nav>
        <NavItem classID="no-highlight"
                  content="Home"
                  link="/" />
        <NavItem classID="no-highlight"
                  content="About"
                  link="/about" />
        <NavItem classID="no-highlight"
                  content="Skills"
                  link="/skills" /> 
        <NavItem classID="highlight"
                  content="Projects"
                  link="/projects" />  
        <NavItem classID="no-highlight"
                  content="Contact"
                  link="/contact" />   
    </Nav>
);

export default Projects;