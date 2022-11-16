import React from 'react'
import './rp.css'


const RightPart = () => {
  return (
    <>
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
    </>
  )
}

export default RightPart
