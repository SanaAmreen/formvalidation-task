import React from 'react'
import { useNavigate } from 'react-router'

export default function PreviousAddress() {
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
    <div className='form'>
    <h1 className='title'>Do You Have Previous Address</h1>
    
        <div align="center">
        <button className="button" type='submit' onClick={()=>navigate('/prev-address-details')}>Yes</button>
    </div>
    <div align="center">
        <button className="button" type='submit' onClick={()=>navigate('/submit')}>No</button>
    </div>
    </div>
    </div>
  )
}