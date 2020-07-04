import React, { useState } from 'react';
import styled from 'styled-components';

import LeftNav from './LeftNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25px;
    right: 25px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 2;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: black;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;


const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <LeftNav open={open} />
        </>
    )
}

export default Burger;