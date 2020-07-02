import React from "react";

const Menu = ({ children }) => (
    <div className="container">
        <div className="menu-dropdown">
            {children}
        </div>
    </div>
);

export default Menu;