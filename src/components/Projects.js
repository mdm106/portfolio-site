import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

import football from '../images/football-sized.jpeg';

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
        <div className="container">
                <article className="project-article">
                    <h6 className="project-title">Team Selector App</h6>
                    <img className="project-image" src={football} alt="Screenshot of team selector project"></img>
                    <p className="main-text project-skills"><strong>React / Redux / Laravel / Heroku / Git</strong></p>
                    <p className="main-text project-text">An app made to provide a tool to select football teams. The app was made with a React Redux frontend, and a Laravel API backend. The backend was deployed with Heroku and the frontend is hosted on GitHub pages.</p>
                    <p className="main-text project-text">This was completed in a week to fulfil the technical challenge at the end of the DevelopMe course. Features included an option to select based on ability and the choice of team size from 5 to 11 players. The API backend provided the data for a team name picker feature, and also allows the user to save, update and view game details.</p>
                    <div className="project-links">
                        <a href="https://github.com/mdm106/team-selector-frontend">
                            <i className="fab fa-github fa-2x"></i> 
                        </a>
                        <a href="https://mdm106.github.io/team-selector-frontend/#/">
                            <i className="fas fa-link fa-2x"></i>
                        </a>
                    </div>
                </article>
        </div>
    </div> 
);

export default Projects;