import React from 'react'
import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    let navigate=useNavigate();
    let create=()=>{
        navigate("/profile")
    }
  return (
    <div className={style.create}>
      <div className={style.box}>
        <h1>Create your <br />PopX account</h1>
        <span>Full Name<sup>*</sup></span>
        <input type="text" placeholder='Enter the name' />
        <span>Phone number<sup>*</sup></span>
        <input type="number" placeholder='Enter the phone no' />
        <span>Email address<sup>*</sup></span>
        <input type="email" placeholder='Enter the email' />
        <span>Password<sup>*</sup></span>
        <input type="password" placeholder='Enter the password' />
        <span>Company Name<sup>*</sup></span>
        <input type="text" placeholder='Enter the company name' />
        <h3>Are you an Agency?<sup>*</sup></h3>
        <div className={style.radio}>
            <input type="radio" name='agency'/>Yes
            <input type="radio" name='agency'/>No
        </div>
      </div>
        <button onClick={create}>Create Account</button>
    </div>
  )
}

export default Create