import React from "react";
import Media from 'react-media';

import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Burger from './Nav/Burger';

import headshot from "../images/Maddy-small.jpg";

const Home = () => (
    <>
        <Media queries={{ mobile: { maxWidth: 699 } }}>
                {matches => 
                    matches.mobile ? (
                        <Burger />
                    ) : (
                        <Nav>
                            <NavItem classID="highlight"
                                    content="Home"
                                    link="/" />
                            <NavItem classID="no-highlight"
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
                <img className="main-image" src={headshot} alt="Headshot of Maddy McMahon"></img>
                <section className="main-text">
                    <p>I am a recent graduate of the DevelopMe 12 week Coding Fellowship, looking for junior web development opportunities. I am a driven and conscientious individual, with a keen eye for detail. I love using my logic skills to solve programming problems, and I am persistent when faced with challenging questions. I also have an affinity with data, having previously worked as a data analyst for several years.
                    </p>
                    <p>I am looking for a role where I can develop my skills, and learn from others in a collaborative environment. I am open to working across the stack, and particularly enjoy back-end programming using PHP and front-end programming using the React Javascript library.
                    </p>
                    <p>In my spare time I enjoy hiking, with the Lake District and the Alps as personal favourite spots. I am also a huge fan of watching live sport, especially football and cricket.
                    </p>
                </section>
            </div>
    </>
);

export default Home;