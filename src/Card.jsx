import React from 'react'

export default function Card() {
  return (
    <div className='w-full h-screen  bg-zinc-200'>
        <div className=' w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
        <div className=' w-full h-32  bg-zinc-300'></div>
        <div className=' w-full px-3 py-4 '>
            <h2 className=' font-semibold'>Amazon Basics</h2>
            <p className=' text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem.</p>
        </div>
        </div>
        
        
    </div>
  )
}
