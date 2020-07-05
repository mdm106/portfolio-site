import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

const Contact = () => (
    <>
        <Media queries={{ mobile: { maxWidth: 699 } }}>
            {matches => 
                matches.mobile ? (
                    <Burger />
                ) : (
                    <Nav>
                        <NavItem classID="no-highlight"
                                content="About"
                                link="/" />
                        <NavItem classID="no-highlight"
                                content="Skills"
                                link="/skills" /> 
                        <NavItem classID="no-highlight"
                                content="Projects"
                                link="/projects" />  
                        <NavItem classID="highlight"
                                content="Contact"
                                link="/contact" />   
                    </Nav>
                    )
                }
        </Media>
        <div className="container contact-wrapper">
            <span className="email-icon">
                <a href="mailto:mads.mcmahon@gmail.com">
                <i className="far fa-envelope fa-3x"></i>
                </a>
            </span>
            <p className="contact-text">mads.mcmahon@gmail.com</p>  
            <span className="social-links">
                <a href="https://www.linkedin.com/in/maddy-mcmahon-5070ba1b1/">
                    <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a href="https://github.com/mdm106">
                    <i className="fab fa-github fa-3x"></i>
                </a>
            </span>
        </div>
    </>
);

export default Contact;