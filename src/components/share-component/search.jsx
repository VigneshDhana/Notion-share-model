import React,{useState,useEffect} from 'react';
import PropTypes, { func } from 'prop-types';
import Profile from './profileCard';
import GroupProfile from './groupCard';
import Pill from './pill';
import "./search.css";

export default function Search({data,setPopup,update,top,left}){
    const [search,setSearch] = useState();
    const [newUpdate,setNewUpdate] = useState([]);
    const searchChange =(e)=>{
        let value = e.target.value;
        setSearch(value)
        if(!value){
            setGroup(data.groups)
            setPerson(data.members)
            document.getElementById("select-profile").style['display'] = "flex";
             document.getElementById("select-group").style['display'] = "block";
             return
        }
        let person = [...data.members].filter((item)=>item.name.split(value).length>1,value)
        if(person.length){
            setPerson(person);
        }
        else{
            document.getElementById("select-profile").style['display'] = "none";
        }
        let group = [...data.groups].filter((item)=>item.split(value).length>1)
        if(group.length){
            setGroup(group);
        }
        else{
            document.getElementById("select-group").style['display'] = "none";
        }
    }
    const searchInput = <>
            <input type="text" id='search-profile' placeholder='People,email,groups' value={search} onChange={(e)=>{
                searchChange(e)
            }}/>
        </>
    const handleClick = (title,email)=>{
        console.log(title,email)
        if(email){
            setPill(<Pill title={title} handleClick={handleClick}/>)
        setNewUpdate([email,"Full access"]);
        }
        else{
            setPill(searchInput)
            setNewUpdate([]);
        }
    }
    const handleChange = (e)=>{
        let value = e.target.value;
        setNewUpdate([newUpdate[0],value])
        console.log(value)
    }
    const invite =(e)=>{
        e.preventDefault();
        update(newUpdate[0],newUpdate[1])
        setPopup("")
    }
    
    const [person,setPerson] = useState(data.members)
    const [group,setGroup] = useState(data.groups)
    const [pill,setPill] = useState(searchInput)
    return<div id="share-popup" style={{top,left}}>
        <div className="search-header">
            <div className="search-input">
                {pill}
            </div>
            <div className="search-dropdown">
                <select name="access-status" id="access" onChange={(e)=>handleChange(e)}>
                    <option value="Full access">Full access</option>
                    <option value="Can edit">Can edit</option>
                    <option value="Can view">Can view</option>
                    <option value="No access">No access</option>
                </select>
            </div>
            <button onClick={(e)=>invite(e)}>Invite</button>
        </div>
        <div className="search-result">
            <div className="select-person" id='select-profile'>
                <div className="profile" style={{height:"30px",borderBottom:"1px solid grey"}}>
                    <p><strong>Select a person</strong></p>
                </div>
                {person.map((item,i)=> <Profile key={i} title={item.name} image={item.image} email={item.email} handleClick={handleClick} />)}
            </div>
            <div className="select-group" id='select-group'>
                <div className="profile" style={{height:"30px",borderBottom:"1px solid grey"}}>
                    <p><strong>Select a Group</strong></p>
                </div>
                {
                    group.map((item,i)=><GroupProfile title={item} key={i} handleClick={handleClick}/>)
                }
            </div>
        </div>
        <div className="invite-footer">
            <div className="invite-footer-content">
            <div className="invite-icon">
                <img src="https://www.linkpicture.com/q/Icon-2.png" alt="help" />
            </div>
            <div className="footer-help-txt">
                <p>learn about sharing</p>
            </div>
            </div>
        </div>
    </div>
}
