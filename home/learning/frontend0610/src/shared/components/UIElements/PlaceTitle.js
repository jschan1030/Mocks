import React from "react";

import './PlaceTitle.css';

const PlaceTitle = props => {
    const element = props.type === 'h1' ? (
        <h1>{props.text}</h1>
    ) : (
        <h2>{props.text}</h2>
    )
    return (
        <div className="title-container">
            {element}
        </div>
    )
};

export default PlaceTitle;