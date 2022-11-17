
import React from 'react'
import './App.css'
import Login from "./component/user/Login";
import Register from './component/user/Register';
import Dashboard from './component/Admin/Dashboard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';


const App = () => {
  return (
    <>
     <Router>
           <div className="App">
            <Navbar />
           <Routes>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 
                 
          </Routes>
          </div>
       </Router>
  
    </>
  )
 
}

export default App
