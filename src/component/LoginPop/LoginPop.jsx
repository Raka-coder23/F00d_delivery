import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({setShowLogin}) => {
  const[currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-pop'>
      <form className='login-pop-container'>
        <div className="login-pop-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-input">
          {currState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
         
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='password' required />
        </div>
         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
         <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy</p>
         </div>
         {currState==="Login"?
         <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
         <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Click here</span></p>}
      </form>
    </div>
  )
}

export default LoginPop
