import React from 'react'

export default function Card7() {
  return (
    <div className=' w-40  bg-zinc-100 p-4 flex-col items-center rounded-lg'>
       <div className='  image w-16 h-16 ml-8 rounded-full bg-red-400 overflow-hidden'>
       <img className=' w-full h-full object-cover' src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D" alt="" />

       </div>
       <h3 className=' mt-1 text-center text-xl font-semibold'>Ankit</h3>
       <h4 className=' ml-4 opacity-40 text-xs font-semibold'>ankit@gmail.com</h4>
       <p className='mt-1 text-center font-semibold tracking-light leading-none text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam iusto omnis!</p>
       <button className=' ml-4 mt-1 text-xs font-semibold text-center px-4 py-2 rounded-full bg-green-400 text-white'>Remove It</button>
    </div>
  )
}
