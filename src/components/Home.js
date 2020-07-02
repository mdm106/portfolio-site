import React from "react";

import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Home = () => (
    <Menu>
        <MenuItem classID="highlight"
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
        <MenuItem classID="no-highlight"
                  content="Contact"
                  link="/contact" />   
    </Menu>
);

export default Home;