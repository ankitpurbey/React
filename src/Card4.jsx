import React from 'react'

export default function Card4() {
    const data =[
        {name:"Mahiya Ve", desc: "This is new Song Artist Arjit singh"},
        {name:"junoon", desc: "This is new Song Artist Arjit singh"},
        {name:"Bhojpuri", desc: "This is new Song Artist Arjit singh"},
    ]
  return (
    <div>
      <div className=' w-full h-screen gap-5 bg-zinc-400  flex flex-col justify-center items-center'>
    {data.map((elem,index)=>(<div className='  w-60 px-3 py-4 bg-zinc-100'>
        <h2 className=' font-semibold text-xl rounded-md'>{elem.name}</h2>
        <p className=' text-xs mt-3'>{elem.desc} </p>
        <button  onClick={()=>{alert("Downloaded Successfull")}} className=' px-2 py-2 bg-green-400 text-xs mt-3 rounded-sm'>Download Now</button>
    </div>
      ))}
    </div>
    </div>
  )
}
