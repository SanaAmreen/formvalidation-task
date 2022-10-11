import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDetails } from './Action';
import { ADD_PERSONAL_DETAILS } from './Action/types';
import {  useNavigate } from "react-router-dom";


export default function PersonalDetails() {
    const [fname,setFName] = useState("");
    const [lname,setLName] = useState("");
    const [dob,setDob] = useState("");
    const dispatch
     = useDispatch();
    const history = useNavigate();

    const handleNext =(e)=>{
          e.preventDefault();
          let value = {fname:fname,lname:lname,dob:dob}
          dispatch(addDetails({value}));
          history('/contact-details')

          

    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Enter Your Personal Detail</h1>
        <label>First Name</label> :
        <input type="text" className='input' placeholder="First Name"  name='userInput' value={fname} onChange={(e)=>setFName(e.target.value)} required/>
        <label>Last Name</label> :
        <input type="text" className='input' placeholder="Last Name" value={lname} onChange={(e)=>setLName(e.target.value)}/>
        <label>D-O-B</label>
        <input className='input' type="date"  value={dob} onChange={(e)=>setDob(e.target.value)}/>
        <div align="center">
            <button type='submit' className="button" onClick={handleNext}>Next</button>
        </div>
    </div>
    </div>
  )
}
