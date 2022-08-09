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
                    <p>I am a full-stack web developer, working in a commercial role since August 2020. I am a driven and conscientious individual, with a keen eye for detail. I love using my logic skills to solve programming problems, and I am persistent and methodical when faced with challenging questions. I also have an affinity with data, having previously worked as a data analyst for several years.
                    </p>
                    <p>My commercial experience has primarily been in Ruby on Rails applications on sites used by not-for-profit providers and local authorities, and a large e-commerce application. Whilst working with Ruby on Rails I regularly use the Mintiest suite both in TDD and to test code changes. I also use Vue.js, and have integrated this with Ruby on Rails applications. I also have experience of jQuery and Angular in a commercial setting.
                    </p>
                    <p>In my spare time I enjoy hiking, with the Lake District and the Alps as personal favourite spots. I am also a huge fan of watching live sport, especially football and cricket.
                    </p>
                </section>
            </div>
    </>
);

export default Home;