import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

import ProjectArticle from './ProjectArticle';
import football from '../images/football-sized.jpeg';
import olympics from '../images/olympics.png';
import photography from '../images/photography.png';
import portfolio from '../images/portfolio.jpeg';

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
        <ProjectArticle 
            title="Team Selector App"
            image={football}
            skills="React / Redux / Laravel / Heroku / Git"
            para1="An app made to provide a tool to select football teams. The app was made with a React Redux frontend, and a Laravel API backend. The backend was deployed with Heroku and the frontend is hosted on GitHub pages."
            para2="This was completed in a week to fulfil the technical challenge at the end of the DevelopMe course. Features included an option to select based on ability and the choice of team size from 5 to 11 players. The API backend provided the data for a team name picker feature, and also allows the user to save, update and view game details."
            repoName="team-selector-frontend"
            githubAvail={true}
            projectLink="https://mdm106.github.io/team-selector-frontend/#/"
            linkAvail={true} />
        <ProjectArticle 
            title="Lockdown Olympics App"
            image={olympics}
            skills="React / Redux / Laravel / Git / Team management"
            para1="This app was made for the group project in week 12 of the DevelopMe bootcamp. It provides information for a fictitious 'Lockdown Olympics' event The app was made with a React Redux frontend, and a Laravel API backend."
            para2="I was the team leader for this group project. The app was produced in one week from conception to deployment. Alongside team mates I was responsible for creating the API and implementing Redux. I also produced the competitor registration form which performs a post request to add new competitors."
            repoName="Lockdown-Olympics"
            githubAvail={true}
            projectLink="https://techmilton.github.io/Lockdown-Olympics/#/"
            linkAvail={true} />
        <ProjectArticle 
            title="Photography site"
            image={photography}
            skills="HTML / CSS"
            para1="This site was made in the first two weeks of the DevelopMe bootcamp. It was produced in HTML and CSS based on a provided design. The site is responsive to changes in screen size. I produced the site prior to learning Git. Therefore, the git repository was initialised after project completion, and there are therefore few commits."
            repoName="photography-site"
            githubAvail={true}
            projectLink="https://mdm106.github.io/photography-site/"
            linkAvail={true} />
        <ProjectArticle 
            title="Portfolio Site - First version"
            image={portfolio}
            skills="HTML / SCSS / Javascript"
            para1="This was a first version of my portfolio site. It was produced in HTML and SCSS. Although I ultimately was not happy with the design and feel of the site, it game me good experience in using SCSS, including the use of mixins and extensions."
            repoName="Personal-Portfolio"
            githubAvail={true}
            linkAvail={false} />
    </div> 
);

export default Projects;