import React from 'react'

const Product_card = ({image,title,price}) => {
  return (
    <div>
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />     
    <h2  className="text-lg font-semibold mt-3">{title}</h2>  
   
      <p className="text-gray-600 mt-1">
        ₹{price}
      </p>

      <button className="w-full bg-black text-white py-2   rounded-lg mt-4 hover:cursor-pointer">
        Add to Cart
      </button>

    </div>
  )
}

export default Product_card
