import React from 'react'

export default function FormHandlingEXE() {
  return (
    <div className=' mt-10 flex gap-5 justify-center'>
        <input className=' rounded-md text-center outline-none' type="text" placeholder='Enter Name' />
        <input className='rounded-md text-center outline-none' type="text" placeholder='Enter Email' />
        <input type="text" placeholder='Enter Url' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md'>Submit</button>
  
    </div>
  )
}
