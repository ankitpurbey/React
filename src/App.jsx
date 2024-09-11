 import React, { useState } from 'react'
import FormHandlingEXE from './FormHandlingEXE'
import Cards from './Cards'
 
 export default function App() {
  const [user ,setUser] = useState([{name:"Ankit"}])
   return (
     <div className=' h-screen w-full p-10 bg-zinc-200 flex items-center justify-center'>
      <div className =' container mx-auto' >
        <Cards user ={user}/>
        <FormHandlingEXE/>
      </div>
     </div>
   )
 }
 