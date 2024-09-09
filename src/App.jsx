import React, { useState } from 'react'
import Card6 from './Card6'
import Navbar from './components/Navbar'

export default function App() {
  const data =[
    {image:"https://images.unsplash.com/photo-1598708521413-feaa4e69c01b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"Mahive ve", Artist:"Manu Punjabi",Added:false},
    {image:"https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww",Name:"Bijari song",  Artist:"Arman",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:" New Song",  Artist:"Kheshari",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},
    {image:"https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",Name:"desi",  Artist:"Pawan",Added:false},

  ]

  const [songData,setData] =useState(data);
  const handleClick =(index)=>{
     setData((prev) =>{
      return prev.map((item ,itemIndex)=>{
        if(itemIndex === index) return {...item , Added: !itemIndex.Added};
        return item;
      })
          
      
     })
  }
  return (
    <div className=' w-full h-screen bg-zinc-200  items-center  justify-center'>
      <Navbar data ={songData}/>
      <div className=' px-20  flex gap-5 mt-10 flex-wrap'>
        {songData.map((Obj,index)=>(
          <Card6 data ={Obj} handleClick={handleClick} index={index}/>
        ))}
      </div>
      
    </div>
  )
}
