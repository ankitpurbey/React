import React from 'react'
import Card7 from './Card7'

export default function Cards({user}) {
  return (
    <div className=' w-full p-4 flex justify-center gap-5 flex-wrap '>
         <Card7 user ={user}/>
     
    </div>
  )
}
