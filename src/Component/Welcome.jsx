import React from 'react'
import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
  let navigate=useNavigate();
let signin=()=>{
  navigate("/sign")
}
let create=()=>{
  navigate("/create")
}
  return (
    <div className={style.welcome}>
       
    <h1>Welcome to PopX</h1>
    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
    <button className={style.createbox} onClick={create}>Create Account</button>
    <button className={style.register} onClick={signin}>Already Registered? Login</button>   
    </div>
  )
}

export default Welcome