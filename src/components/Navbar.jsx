 import React from 'react'
 
 export default function Navbar({data}) {
   return (
     <div className=' w-full px-10 py-8 flex justify-between items-center bg-zinc-300 '>
        <h3 className=' bg-green-300 rounded-md font-semibold'>Orange</h3>
        <div className=' flex px-3 py-2 bg-orange-400 text-white text-xs gap-2 rounded-md'>
            <h3>Favrioute</h3>
            <h4>{data.filter(item=> item.Added).length}</h4>
        </div>
     </div>
   )
 }
 