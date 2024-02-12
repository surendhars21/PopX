import React from 'react'
import style from "./Home.module.css";
import profile from "./image/Ellipse 114.png"
import cam from "./image/Group 1585.png"
const Profile = () => {
  return (
    <div className={style.profile}>
        <div className={style.account}>
            Account Settings
        </div>
        <div className={style.box}>
            <div className={style.pic}>
           <img src={profile} alt="profile"/>
           <img src={cam} alt="cam" id={style.cam} />
           <div className={style.name}>
           <h2>Marry Doe</h2>
           <h3>Marry@Gmail.Com</h3>
           </div>
            </div>
            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing <br />Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut <br />Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        <div className={style.bottom}></div>
    </div>
  )
}

export default Profile