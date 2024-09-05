/* In this card made conditional rendering like Out of stock in stock 
and many More 
*/
import React from 'react'

export default function Card3() {
    const data =[
        {image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Amazon", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem",instock:true},
        {image:'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D',name:"Mobile Phones", description:"Lorem, ipsum dolor sit amet consectetur lorem ipsum  this is reandon wors d ", instock:true},
        {image:'https://media.istockphoto.com/id/171583541/photo/brown-paper-shopping-bag-full-of-groceries-on-white-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=iW0QzZowCe-FMLTKAOXKrJPLODDUWro6BJZoG9w7tqY=', name:"Grocceries Items", description:"This is the product which i use recently And i loved it . lorem ipsum this is the  " ,instock:false},
        

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
                <button className={`' px-3 py-1 ${elem.instock? ' bg-green-400' : 'bg-red-400'} text-xs rounded-md mt-4'`}>
                    {elem.instock?"In Stock" :" Out Of Stock"}
                </button>
            </div>
            </div>
        ))}
        
        
    </div>
  )
}