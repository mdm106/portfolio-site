import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

import ProjectArticle from './ProjectArticle';
import football from '../images/football.jpg';
import olympics from '../images/olympics.jpg';
import photography from '../images/photography.jpg';
import portfolio from '../images/portfolio.jpg';
import vet from '../images/vet-practice.jpg';
import hatgame from '../images/hatgame.jpg';
import millionaire from "../images/millionaire.jpg"

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
        <div className="container">
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
            title="Who wants to be a Web Developer App"
            image={millionaire}
            skills="PHP / Laravel / APIs / React / Redux / Responsive Design / Pair Programming"
            para1="This project is a web development quiz based on the 'Who wants to be a Millionaire' game show. I completed this project alongside another developer, using pair programming. It was a great experience to do pair programming, and I learnt a lot."
            para2="The back-end was built using Laravel, and the front-end in React, using Redux. We used a pre-built React component to incorporate sounds into the app. The responsive design utilised CSS grids. The app makes GET requests to the API to retrieve questions. It also makes POST requests to record completed games, and GET requests to retrieve game statistics."
            repoName="whoWantsToBeAWebDeveloperFrontEnd"
            githubAvail={true}
            projectLink="https://avi-cohen-nehemia.github.io/whoWantsToBeAWebDeveloperFrontEnd/#/"
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
            title="Photography Site"
            image={photography}
            skills="HTML / CSS"
            para1="This site was made in the first two weeks of the DevelopMe bootcamp. It was produced in HTML and CSS based on a provided design. The site is responsive to changes in screen size. I produced the site prior to learning Git. Therefore, the git repository was initialised after project completion, and there are therefore few commits."
            repoName="photography-site"
            githubAvail={true}
            projectLink="https://mdm106.github.io/photography-site/"
            linkAvail={true} />
        <ProjectArticle 
            title="Hat Game App"
            image={hatgame}
            skills="React / Redux / Laravel / Heroku / Git / Pre-built components"
            para1="This app is a game where players in two teams must guess the words based on descriptions from teammates. The app provides words in four categories, that are retrieved from an API, and the team scores are also recorded using the API. The app includes a 45 second timer and an onscreen message and air horn sound at the end of the round. The sound is played using the use-sound React Hook. A table of previous game results recorded and retrieved from the API is also provided. The app uses React Bootstrap components. The back-end is deployed using Heroku and the front-end through GitHub pages."
            repoName="hat-game-frontend"
            githubAvail={true}
            projectLink="https://mdm106.github.io/hat-game-frontend/#/"
            linkAvail={true} />
        <ProjectArticle 
            title="Portfolio Site - First version"
            image={portfolio}
            skills="HTML / SCSS"
            para1="This was a first version of my portfolio site. It was produced in HTML and SCSS. Although I ultimately was not happy with the design and feel of the site, it gave me good experience in using SCSS, including the use of mixins and extensions."
            repoName="Personal-Portfolio"
            githubAvail={true}
            linkAvail={false} />
        <ProjectArticle 
            title="Veterinary Practice App"
            image={vet}
            skills="PHP / Laravel / APIs"
            para1="This project was completed in weeks 7 and 8 of the DevelopMe bootcamp. It was a site for a veterinary practice created using Laravel, with a MySQL database and using PHP blade views. The project also involved producing a RESTful API."
            repoName="week7-vet-practice"
            githubAvail={true}
            linkAvail={false} />
        </div>
    </div> 
);

export default Projects;