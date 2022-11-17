import React from 'react'
import './Register.css'
import {RiMailLockLine} from 'react-icons/ri'; 
import Men from '../../images/man.jpg'
function Register() {
  return (
    <div className="white-container">
    <div className="blue-container">
      <div className="second-white-container">
      <div className="head-part-main-container">
        <div className="logo-n-text">
          <RiMailLockLine className="logo-sym"/>
          <span className="joule">JOULE</span>
        </div>
        <div className="btn-already-have-account">
          <button>Already have an Account?</button>
        </div>
      </div>
        <div className="body-container">
        <div className='left-main-container'>
      <img src={Men} alt="hancy" />
    </div>
    <div className="right-main-container">
        <div className="sign-up-div">
          <div className="sign-up-text">SIGN UP</div>
          <p className="supporting-text">Sign Up to try our amazing service</p>
        </div>
        <div className="firstname-container">
          <p className="fname">FIRST NAME</p>
          <input type="text" placeholder='Roberto' className="firstname-input" />
        </div>
        <div className="lastname-container">
          <p className="lname">LAST NAME</p>
          <input type="text" placeholder='Terjangkau' className="lastname-input" />
        </div>

        <div className="companymail-container">
          <p className="fname">COMPANY MAIL</p>
          <input type="text" placeholder='Roberto@gmail.com' className="firstname-input" />
        </div>
        <div className="companyname-container">
          <p className="fname">COMPANY NAME</p>
          <input type="text" placeholder='DisneyLandL' className="firstname-input" />
        </div>
        <div className="get-started-button-div">
          <button className="getstarted-div">Get Started</button>
        </div>
      </div>
        </div>
        <div className='foot-content'>
      <h2>iam footerrrrrrrrrrr</h2>
    </div>
      </div>
    </div>
  </div>
  )
}

export default Register