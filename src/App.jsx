 import React from "react"
// import Navbar from "./components/Navbar"
import axios from "axios";


const app =() =>{
  const getproducts = () =>{
    const api = "http://fakestoreapi.com/products";
    axios.get(api).then(products =>{
      console.log(products);
    }).catch(err => console.log(err));
  }
    const addProducts = () =>{
      const api = "http://fakestoreapi.com/products";
      axios.post(api,{title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'

      })
      .then((res)=>{
        console.log(res);
      })
      .catch(err => console.log(err));
    }


  return (
    <div>
      <button onClick={getproducts}> click me </button>
      <br></br>
      <br></br>
      <button onClick={addProducts} className="rounded px-5 py-2 bg-rose-600"> click me </button>
    </div>
  )
}

export default app;

