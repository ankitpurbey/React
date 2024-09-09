import React from 'react'

export default function Props({image,name,proffession} , dummy) {
  return (
    <div className=' w-52 bg-white ml-2 mt-2'>
      <div className=' w-full h-35 bg-sky-300 items-center '>
        <img className=' w-full h-full object-cover ' src={image} alt="" />
      </div>
      <div className=' w-full p-3'>
        <h3 className=' text-xs items-center font-semibold'> {name}</h3>
        <h4 className=' text-xs '>{proffession}</h4>
        <button onClick={()=> handleCkick( index)} className=' px-2 py-1 bg-green-400 text-xs rounded-md mt-2'>Send Request</button>
      </div>
    </div>
  )
}
