// import React from "react"
// import Navbar from "./components/Navbar"

import axios from "axios";

const app =() =>{
  const getproducts = () =>{
    const api = "http://fakestoreapi.com/products";
    axios.get(api).then(products =>{
      console.log(products);
    }).catch(err => console.log(err));
  }
  return (
    <div>
      <button> click me </button>
    </div>
  )
}

export default app;

