import React from 'react'
import HeadPart from './components/HeadPart/HeadPart'
import FootPart from './components/FootPart/FootPart'
import RightPart from './components/RightPart/RightPart'
import LeftPart from './components/LeftPart/LeftPart'
import './App.css'

const App = () => {
  return (
    <>
      <div className="white-container">
        <div className="blue-container">
          <div className="second-white-container">
            <HeadPart />
            <div className="body-container">
            <LeftPart />
            <RightPart />
            </div>
            <FootPart />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
