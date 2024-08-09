 import React from 'react'
 import Navbar from './components/Navbar'
 import SecondPage from './components/SecondPage'
 
 
 const App = () => {

  const data =["Ankit","Aman", "Amit", "Ankit kumar"]
   return (
     <div>
      
         {data.map((elem , index)=>(<div className=" px-3 py-4 bg-zinc-200  rounded-md w-fit ml-3 mt-2 " > 
          </div>))}
     </div>
   )
 }
 
 export default App
 