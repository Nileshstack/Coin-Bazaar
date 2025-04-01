import React, { useState } from 'react'
import './looginn.css'
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import person from '../../assets/person.png';
const Looginn = () => {

    const [action, setAction] =useState("Sign Up");


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="under"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>:
        <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder='Name' />
        </div> }
        
        <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password <span>Click here!</span></div>}
      <div className="onsubmit">
         <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Looginn
