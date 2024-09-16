 import React, { useState } from 'react'
import {Link} from "react-router-dom";
import Cards from './Cards'
 
 export default function App() {
  
   return (
     <nav className=' items-center flex'>
      <Link className=' ml-2 mr-3 text-cyan-400' to ="/home">home</Link>
      <Link className=' ml-2 mr-3 text-black' to ="/Project">Project</Link>
      <Link className=' ml-2 mr-3' to ="/User">User</Link>
      <Link className=' ml-2 mr-3' to ="/About">About</Link>
     </nav>
   )
 }
 