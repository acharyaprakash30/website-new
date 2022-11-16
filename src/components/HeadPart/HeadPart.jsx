import React from 'react'
import './hp.css'
import {RiMailLockLine} from 'react-icons/ri'; 

const HeadPart = () => {
  return (
    <>
      <div className="head-part-main-container">
        <div className="logo-n-text">
          <RiMailLockLine className="logo-sym"/>
          <span className="joule">JOULE</span>
        </div>
        <div className="btn-already-have-account">
          <button>Already have an Account?</button>
        </div>
      </div>
    </>
  )
}

export default HeadPart

