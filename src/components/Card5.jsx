
//  in this card i have practiced on how to slide images on home page 
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Card5() {
     const [val,setVal] =useState(false);
  return (
    <div className=' w-full h-screen  bg-zinc-200 flex justify-center items-center '>
        <div className=' relative w-60 h-50  rounded-md flex  overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-300 ${ val ===false? " translate-x-[0%]" :" translate-x-[100%]" } h-full  w-full  object-cover`} src="https://images.unsplash.com/photo-1723039914210-a6f13a6931af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`shrink-0 transition-transform duration-300 ${ val ===false? " translate-x-[0%]" :" translate-x-[100%]" } h-full  w-full  object-cover`} src="https://images.unsplash.com/photo-1724685010983-2770a37658b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=> setVal(()=>!val)} className=' w-8 h-8 flex items-center absolute bottom-[3%] left-1/2 justify-center rounded-full bg-[#dadada8a] -translate-x-[50%]  -translate-y-[50%] '>
            <FaArrowRight size={"0.8em"} />
            </span>
        </div>
    </div>
  )
}
