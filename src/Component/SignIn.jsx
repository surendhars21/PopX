import React from 'react'
import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    let navigate=useNavigate();
    let login=()=>{
        navigate("/profile")
    }
  return (
    <div className={style.signin}>
      <h1>Signin to your <br />PopX account</h1>
      <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,</p>
      <span>Email Address</span>
      <input type="email" placeholder='Enter email address'/>
      <span>Password</span>
      <input type="password" placeholder='Enter password'/>
      <button onClick={login}>Login</button>

    </div>
  )
}

export default SignIn