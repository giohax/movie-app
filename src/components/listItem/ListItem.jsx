import "./listItem.scss";
import React from "react";

import heroImage from "../../images/hero/SP010286020000.jpeg";

const ListItem = () => {
    return (
        <div className="listItem">
            <img src={heroImage} />
        </div>
    );
};

export default ListItem;
