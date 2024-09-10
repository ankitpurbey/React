import React from 'react'
import { useRef } from 'react'

export default function App() {
  const name  = useRef(null);
  const age  = useRef(null);
  const email = useRef(null);
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(email.current.value);
    
  }
  return (
    <form action='' onSubmit={handleSubmit} >
      <input ref={name} type="text" placeholder='Name'/>
      <input ref={age} type="text" placeholder='Age'/>
      <input ref={email} type="text" placeholder='email'/>
      <input type="submit" />
    </form>
  )
}
