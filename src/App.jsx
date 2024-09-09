 import React, { useState } from 'react'
import Props from './components/Props'
 
 export default function App() {
  const data =[
    {name:"Ankit" , proffession:"WebDeveloper",image:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Mohan" , proffession:"App Developer",image:"https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww"},
    {name:"Nilesh" , proffession:"Salse",image:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"},
    {name:"Monkesj" , proffession:"BlockChain",image:"https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fHww"},
  ]

  const [val,SetVal] = useState(data);

  const handleCkick =(changeIndex)=>{
    SetVal((prev)=>{
      return prev.map((item,index)=>{
        if(index === changeIndex){
          return {...item, isLiked:!item.isLiked}
        }
        return item;
      })
    })
  }
  const dummy =()=> alert("Request Sent");
   return (
     <div>
       <div className=' w-full h-screen bg-zinc-400 flex gap-5 items-center justify-center'>
        {val.map((item, i) =>(
           <Props image ={item.image} dummy ={dummy} name ={ item.name} proffession ={ item.proffession}/>
        ))}
       </div>
     </div>
   )
 }
 