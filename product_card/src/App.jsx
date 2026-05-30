import { useState } from 'react'

import './App.css'
import Product_card from './components/Product_card'
function App() {


   const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },
    {
      id: 2,
      title: "MacBook Air",
      price: 99999,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },
    {
      id: 3,
      title: "Nike Shoes",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  return (
    <>
     <div className="min-h-screen bg-gray-100 p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((product) => (
        <Product_card
          key={product.id}
          image ={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
      </div>
    </div>
    </>
  )
}

export default App
