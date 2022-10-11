import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addContactDetails } from './Action';

export default function ContactDetails() {
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [ip,setIp]= useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
  let value = {email:email,number:number}
    dispatch(addContactDetails({value}))

    navigate('/prevAdd')

  }
  useEffect(()=>{
      axios.get("https://geolocation-db.com/json/").then((res)=>setIp(res.data.IPv4))
      axios.get("https://geolocation-db.com/json/").then((res)=>setIp(console.log(res.config)))

  },[])
  return (
    <div className='wrapper'>
    <div className='form'>
    <h1 className='title'>Enter Your Contact Detail</h1>
        <label>Email :</label>
        <input className='input' type="text" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Phone Number :</label>
        <input type="text" className='input' placeholder='Phone Number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <div align="center">
        <button className="button" type='submit' onClick={handleSubmit}>Submit</button>
    </div>
    </div>
    </div>
  )
}
