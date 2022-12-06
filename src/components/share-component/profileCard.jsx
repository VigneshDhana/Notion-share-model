import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./profileCard.css";

export default function Profile({ handleClick, image, title, email }) {
  return (
    <div className="profile" onClick={()=>handleClick(title, email)}>
      <div className="profilePic">
        <img src={image} alt="Profile pic" />
      </div>
      <p>
        <strong>{title}</strong>
      </p>
    </div>
  );
}

Profile.propTypes = {
  title:PropTypes.string,
  image:PropTypes.string,
}

Profile.defaultProps={
  title: "Profile Name",
  image: "https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105594/pandavector190105594.jpg?ver=6",
}
