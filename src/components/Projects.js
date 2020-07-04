import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

const Projects = () => (
    <div>
        <Media queries={{ mobile: { maxWidth: 699 } }}>
            {matches => 
                matches.mobile ? (
                    <Burger />
                ) : (
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
                   )
                }
        </Media>
    </div> 
);

export default Projects;