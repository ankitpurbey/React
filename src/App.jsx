 import React, { useState } from 'react'

 
 
 function App(){
  const [val,setVal] = useState([1,2,3,4,5]);
  
  return(
   <div className=' p-5'>
    {val.map(elem => <h1>{elem}</h1>)}
    <button onClick={()=> setVal([...val, 8])} className=' px-2 py-1 bg-blue-400 rounded-full text-xs mt-5'> click here!</button>
   </div>
  )
 }
  
 
 export default App
 