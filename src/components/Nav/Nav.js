import React from "react";

const Nav = ({ children }) => (
    <div className="container">
        <div className="menu-dropdown">
            {children}
        </div>
    </div>
);

export default Nav;