import React from "react";

import MenuItem from "./MenuItem";

const Menu = ({ children }) => (
    <div className="container">
        <div className="menu-dropdown">
            {children}
        </div>
    </div>
);

export default Menu;