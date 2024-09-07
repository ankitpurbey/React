import React, { useState } from 'react'

function App(){
  const [val,setVal] = useState(10);
  
  return(
   <div>
    {/* <h1 className=' ml-3 bg-slate-500'>{val}</h1>
    <button onClick={()=>setVal((prev)=> prev+2)} className=' px-2 py-1 bg-blue-300 rounded-sm mt-4 ml-3'>update val</button> */}


{/* Below code  is for changing bg-clour using useState */}
{/* <button onClick={()=>setVal({...val , isBanned: !val.isBanned})} className={`px-2 py-1 ${val.isBanned? " bg-green-400" : " bg-red-600"} bg-blue-500 rounded-full text-white mt-3 ml-3`}>Click</button> */}


   </div>
  )
 }

export default useS



// function App(){
//   const [val,setVal] = useState([1,2,3,4,5]);
  
//   return(
//    <div className=' p-5'>
//     {val.map(elem => <h1>{elem}</h1>)}
//     <button onClick={()=> setVal([...val, 8])} className=' px-2 py-1 bg-blue-400 rounded-full text-xs mt-5'> click here!</button>
//    </div>
//   )
//  }