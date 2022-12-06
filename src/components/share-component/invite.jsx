import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './invite.css';
import './toggle.css';
import Search from './search';
import Access from './access';

export default function Invite({data,setData,updateApi,setPopup,top,left}){
    const [workspaceData,setWorkspaceData] = useState(data);
    const [members,setMembers] = useState(data.members);
    const postData = async(uniqueId,accessStatus)=>{
            await fetch(updateApi,{
                method: "post",
                body:{
                    uniqueId,
                    accessStatus
                }
            })
        }
    const update = (email,accessStatus)=>{
        let update = workspaceData;
        let arr = [];
        if(email.split("@").length === 1){
            // Updating in server
            postData(update.workspace,accessStatus)

            update.access = accessStatus;
            arr = update.members.map((item)=>{
                item.access = accessStatus;
                return item
            })
        }else{
            // Updating in server
            postData(email,accessStatus)
            arr = update.members.map((item)=>{
                if(item.email === email){
                    item.access = accessStatus;
                }
                return item
            })
        }
        setWorkspaceData(update);
        setData(update);
        setMembers(arr);
    }
    return (
        <div id="share-popup" style={{top,left}}>
    
        <div className="invite-header">
            <div className="web-img">
                <img src="https://www.linkpicture.com/q/Icon.png" alt="web" />
            </div>
            <div className="web-share">
                <p><strong>Share to web</strong></p>
                <p style={{color:"grey"}}>Publish and share link to anyone</p>
            </div>
            <div className="toggle">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
        <div className="invite-access">
            <div className="search-invite" onClick={()=>{
                setPopup(<Search data={workspaceData} setPopup={setPopup} top={top} left={left} update={update}/>)}}>

                <input type="text" id="access-search" placeholder='People,email,groups'/>
                <div className="invite-btn">
                    <p>Invite</p>
                </div>
            </div>

            <Access key={-1} title={workspaceData.workspace} subtext={`${workspaceData.noOfMembers} workspace members`} access={workspaceData.access} image={workspaceData.workspaceImage} update={update}/>


            {members.map((item,i)=> <Access key={i} title={item.name} subtext = {item.email} access = {item.access} image = {item.image} update={update} />)} 

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
            <div className='invite-footer-content'>
                <div className="invite-icon">
                    <img src="https://www.linkpicture.com/q/Icon-4_1.png" alt="cop" />
                </div>
                <div className="footer-copy-txt">
                    <p>Copy link</p>
                </div>
            </div>
        </div>
       </div>
    )
}

//https://www.linkpicture.com/q/Icon.png
// https://www.linkpicture.com/q/web_13.png