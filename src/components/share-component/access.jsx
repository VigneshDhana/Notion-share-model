import React from "react";
import PropTypes from 'prop-types';
import "./access.css";

export default function Access({title,subtext,access,image, update}){
    const options = ["Full access", "Can edit","Can view", "No access"];
    const handleChange = (e)=>{
        let change = e.target.value 
        update(subtext,change)
    }
    return(
        (subtext.split("@").length !== 2 || access !=="No access") ? (
        <div className="access-wrapper">
            <div className="profile-details">
                <div className="profile-image">
                <img src={image} alt="profileImage" />
                </div>
                <div className="profile-data">
                <p><strong>{title}</strong></p>
                <p style={{color:"gray"}}>{subtext}</p>
                </div>
            </div>
            <div className="access-dropdown">
                <select name="access-status" id="access" onChange={(e)=>handleChange(e)}>
                {options.map((item,i)=>{
                    if(item === access){
                        if(item === "No access"){
                            return <option key={i} value={item} style={{color:"red"}} selected>{item}</option>
                        }
                        return <option key={i} value={item} selected>{item}</option>
                    }
                    else{
                        if(item === "No access"){
                            return <option key={i} value={item} style={{color:"red"}}>{item}</option>
                        }
                        return <option key={i} value={item}>{item}</option>
                    }
                })}
                </select>
            </div>
        </div>) : ""
    )
}

Access.propTypes={
    title:PropTypes.string.isRequired,
    subtext:PropTypes.string.isRequired,
    access:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    update:PropTypes.func
}

Access.defaulProps ={
    title: "Title",
    subtext: "Subtext",
    access: "Full access",
    image: "https://www.linkpicture.com/q/48_48.png"
}