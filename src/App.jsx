 import React, { useRef } from 'react'
 
 export default function App() {

  const name  =useRef(null);
  const age  = useRef(null);

   return (
     <form>
      <input  type="text" placeholder=' Name '/>
      <input  type="text" placeholder=' Age '/>
      <input type="submit"/>
     </form>
   )
 }
 