import React from 'react'

export default function Props({text,color}) {
  return (
    <button className={`px-3 py-2 ${color} rounded-full text-xs ml-3 mt-5`}>
        {text} </button>
  )
}
