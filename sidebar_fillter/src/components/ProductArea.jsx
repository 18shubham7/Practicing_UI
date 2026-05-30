import React from 'react'

const ProductArea = ({ fillterProducts }) => {

  const popupHandler = (product) => {
    
  };

  return (
    <div className="flex-1 p-7 ml-10">
        <div>
        <h1 className='text-2xl font-bold mb-4'>Products</h1>
        <ul>
            {fillterProducts.map((p, index) => (
            <li key={index}>{p.title} - ${p.price} <button onClick={() => {popupHandler(p)}} className='bg-blue-500 text-white px-2 py-2 rounded mb-4 cursor-pointer'>View more</button></li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default ProductArea
