import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addPreviousAddress } from './Action'

export default function PreviousAddressDetils() {
  const [addline1,setAddline1] = useState("")
  const [addline2,setAddline2] = useState("")
  const [addline3,setAddline3] = useState("")
  const [clicked,setClicked] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    let value = {addline1:addline1,addline2:addline2,addline3:addline3}
    
    dispatch(addPreviousAddress({value :value}))
    navigate('/submit')


  }

  const addAnotherAdress = ()=>{
    
  }
  return (
    <div className='wrapper'>
    <div className='form'>
    <h1 className='title'>Enter Your PREVIOUS Address</h1>
        <label>Previous Address 1</label>
        <input className='input' type="text" placeholder='Address Line 1' value={addline1} onChange={(e)=>setAddline1(e.target.value)}/>
        <input className='input' type="text" placeholder='Address Line 2' value={addline2} onChange={(e)=>setAddline2(e.target.value)}/>
        <input className='input' type="text" placeholder='Address Line 3' value={addline3} onChange={(e)=>setAddline3(e.target.value)}/>
        
        <div align="center">
        <button className="button" type='submit' onClick={handleSubmit}>Submit</button>
    </div>
          <button onClick={addAnotherAdress}>Add another address</button>
    </div>
    </div>
  )
}