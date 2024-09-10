 import React from 'react'
import FormHandlingEXE from './FormHandlingEXE'
import Cards from './Cards'
 
 export default function App() {
   return (
     <div className=' h-screen w-full p-10 bg-zinc-200 flex items-center justify-center'>
      <div className =' container mx-auto' >
        <Cards/>
        <FormHandlingEXE/>
      </div>
     </div>
   )
 }
 