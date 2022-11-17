import React, { useState } from "react";
import { FaBars,FaTimes} from "react-icons/fa";


function Navbar(props) {
    const[nav,setNav]=useState(false);
  return (
   
      <nav className="bg-purple-800 text-white flex justify-between font-serif">
        <img
          src="https://img.freepik.com/premium-photo/print-skull-with-flowers-roses-pumpkins-halloween-vector-illustration-autumn-halloween-holiday-vintage-old_78450-2155.jpg?w=740"
          className="h-12 pt-2 pb-2 px-4 rounded-3xl"
          alt="logo"
        />
        <ul className="hidden md:flex  space-x-11 py-2 px-20 justify-end">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">About</li>
          <li className="cursor-pointer hover:text-red-500">Portfolio</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
        </ul>
        <div 
        onClick={()=>setNav(!nav)}
        className="cursor-pointer pr-5 mt-1 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            {
                nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-800 to-purple-400">
                    <li className="cursor-pointer hover:text-red-500 capitalize text-4xl py-5">Home</li>
                  <li className="cursor-pointer hover:text-red-500 capitalize text-4xl py-5">About</li>
                  <li className="cursor-pointer hover:text-red-500 capitalize text-4xl py-5">Portfolio</li>
                  <li className="cursor-pointer hover:text-red-500 capitalize text-4xl py-5">Contact</li>
        
                    </ul>


                )
            }
      
       

      </nav>
     
    
  );
}

export default Navbar;
