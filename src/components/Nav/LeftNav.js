import React from 'react';

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: rgb(45,49,52);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 55vw;
    transition: transform 0.3s ease-in-out;
    margin: 0;
    padding-top: 4rem;
    z-index: 20;

    li h6 {
        color: white;
        font-family: var(--montserrat);
        font-size: 1rem;
        margin: 1.2rem 0;
    }

    a {
        text-decoration: none;
    }
`;

const LeftNav = ({ open }) => {
    return (
        <StyledUl open={open}>
            <li>
                <Link to={"/"}>
                <h6>Home</h6>
                </Link>
            </li>
            <li>
                <Link to={"/about"}>
                <h6>About</h6>
                </Link>
            </li>
            <li>
                <Link to={"/skills"}>
                <h6>Skills</h6>
                </Link>
            </li>
            <li>
                <Link to={"/projects"}>
                <h6>Projects</h6>
                </Link>
            </li>
            <li>
                <Link to={"/contact"}>
                <h6>Contact</h6>
                </Link>
            </li>
        </StyledUl>  
    )
}

export default LeftNav;