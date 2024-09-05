
/* In this Card
*/
import React from 'react'

export default function Card2() {
    const data =[
        {image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Amazon", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem"},
        {image:'https://unsplash.com/photos/a-red-apple-watch-headphones-and-a-red-case-EF7BVa9BB2M',name:"Daily Products", description:"Lorem, ipsum dolor sit amet consectetur lorem ipsum  this is reandon wors d "},
        {image:'https://images.unsplash.com/photo-1564023162242-91b863c6dcd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhaWx5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', name:"Daily Uses", description:"This is the product which i use recently And i loved it "},
        

    ]
  return (
    <div className='w-full h-screen  bg-zinc-200 flex items-center justify-center gap-10'>
        {data.map((elem,index)=>(
            <div className=' w-52 bg-zinc-100  rounded-md overflow-hidden'>
            <div className=' w-full h-32  bg-zinc-300'>
                <img className='w-full h-full object-cover' src={elem.image} alt='' />
            </div>
            <div className=' w-full px-3 py-4 '>
                <h2 className=' font-semibold '>{elem.name}</h2>
                <p className=' text-sm'>{elem.description}</p>
            </div>
            </div>
        ))}
        
        
    </div>
  )
}
