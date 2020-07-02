import React from "react";

import { Link } from "react-router-dom";

const MenuItem = ({ classID, content, link }) => (
        <Link to href={link}>
            <h6 className={"menu-heading " + classID}>{content}</h6>
        </Link>
);

export default MenuItem;