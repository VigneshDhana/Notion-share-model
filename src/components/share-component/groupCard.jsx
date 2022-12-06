import React from "react";
import PropTypes from "prop-types";
import "./profileCard.css";

export default function GroupProfile({ handleClick, title}) {
  return (
    <div className="profile" onClick={()=>{
        handleClick(title,title)
    }}>
      <div className="groupProfile">
        <h2>{title[0]}</h2>
      </div>
      <p>
        <strong>{title}</strong>
      </p>
    </div>
  );
}

GroupProfile.propTypes = {
    title:PropTypes.string,
    handleClick:PropTypes.func
}

GroupProfile.defaultProps = {
    title:"Developers"
}