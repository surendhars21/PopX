import React from 'react'
import style from "./Home.module.css";
import Welcome from './Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Create from './Create';
import Profile from './Profile';
const Home = () => {
  return (
    <div className={style.home}>
      <BrowserRouter>
      <Routes>
        <Route element={<Welcome/>} path="/" />
        <Route element={<SignIn/>} path='/sign' />
        <Route element={<Create/>} path='/create' />
        <Route element={<Profile/>} path='/profile' />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Home