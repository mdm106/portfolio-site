import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from "./Nav/Burger";

const Skills = () => (
    <>
        <Media queries={{ mobile: { maxWidth: 699 } }}>
            {matches => 
                matches.mobile ? (
                    <Burger />
                ) : (
                    <Nav>
                            <NavItem classID="no-highlight"
                                    content="Home"
                                    link="/" />
                            <NavItem classID="highlight"
                                    content="Skills"
                                    link="/skills" /> 
                            <NavItem classID="no-highlight"
                                    content="Projects"
                                    link="/projects" />  
                            <NavItem classID="no-highlight"
                                    content="Contact"
                                    link="/contact" />   
                        </Nav>
                    )
                }
        </Media>
        <div className="container page-content">
            <div className="icon-wrapper">
        
                    <i className="fas fa-sitemap fa-5x" aria-hidden="true"></i>
         
                    <i className="fas fa-laptop-code fa-5x" arai-hidden="true"></i>
       
                    <i className="far fa-keyboard fa-5x" aria-hidden="true"></i>
            </div>
                <section className="main-text-skills">
                <p>HTML / CSS / SASS / Responsive design / Bootstrap</p>
                <p>Javascript  / React / Redux / Axios</p>
                
                <p>Object Oriented programming / Functional programming</p>
                
                <p>Git / GitHub / Gulp / npm / Composer</p>
                    
                <p>PHP / Laravel / MySQL</p>
                
                <p>SQL / R</p>
                </section>
        </div>
    </>
    
);

export default Skills;