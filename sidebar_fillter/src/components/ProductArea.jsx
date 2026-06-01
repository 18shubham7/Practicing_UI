import React from 'react'
import { useState } from 'react'

const ProductArea = ({ fillterProducts }) => {

 const [open_popup, setopen_popup] = useState(false)
 const [selectedProduct, setSelectedProduct] = useState(null)

 const popupHandler = (product) => {
    
    setSelectedProduct(product)
    setopen_popup(true)
   
 };

  return (
    <div className="flex-1 p-7 ml-10">
        <div>
        <h1 className='text-2xl font-bold mb-4'>Products</h1>
        <ul>
            {fillterProducts.map((p, index) => (
            <li key={index}>{p.title} <button onClick={() => {popupHandler(p)}} className='bg-blue-500 text-white px-2 py-2 rounded mb-4 cursor-pointer'>View more</button></li>
            ))}
        </ul>
        </div>
       {open_popup && selectedProduct &&(
        <div>
          <h1 className='text-xl font-bold mb-2'>{selectedProduct.title}</h1>
          <p>${selectedProduct.price}</p>
          <p>Brand: {selectedProduct.brand}</p>
          <p>{selectedProduct.description}</p>
          <button onClick={()=>setopen_popup(false)} className='bg-red-500 text-white px-2 py-2 rounded cursor-pointer'>Close</button>
           
       </div>
       )}

    </div>
  )
}

export default ProductArea
