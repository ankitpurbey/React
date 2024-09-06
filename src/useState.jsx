import React, { useState } from 'react'

function App(){
  const [val,setVal] = useState(10);
  
  return(
   <div>
    <h1 className=' ml-3 bg-slate-500'>{val}</h1>
    <button onClick={()=>setVal((prev)=> prev+2)} className=' px-2 py-1 bg-blue-300 rounded-sm mt-4 ml-3'>update val</button>
   </div>
  )
 }

export default useS
