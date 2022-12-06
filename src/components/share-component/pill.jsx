import React from 'react';
import PropTypes from "prop-types";
import "./pill.css"

export default function Pill({title,handleClick}){
    return(
        <div className="pill">
            <p>{title}</p>
            <div className="close" onClick={()=>handleClick("x","")}><p>X</p></div>
        </div>
    )
}

Pill.propTypes = {
    title: PropTypes.string,
}

Pill.defaultProps={
    title:"Profile name"
}