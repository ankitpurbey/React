import React from 'react'

export default function Card6({data , handleClick ,index} ) {
    const {image,Name,Artist,Added} =data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded  flex gap-3 pb-10 relative '>
        <div className=' w-20 h-20  bg-orange-500 rounded-sm'>
            <img className=' h-full w-full object-cover' src={image} alt="" />
            </div> 
        <div className=''>
            <h3 className=' font-semibold leading-none text-xl'>{Name}</h3>
            <h5 className=' text-xs '>{Artist}</h5>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-3 py-2 ${Added===false? " bg-red-600" :"bg-green-400"} rounded-full bottom-1  whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%]   absolute text-white text-xs`}> {Added === false?"Add To Fav": "Added"}</button>
    </div>
  )
}
