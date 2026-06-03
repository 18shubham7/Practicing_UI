import React from 'react'

const ProductArea = ({ cartItems, setCartItems }) => {

const Products=[
    {brand:"Apple", model:"iPhone 14 Pro", price:999},
    {brand:"Samsung", model:"Galaxy S23 Ultra", price:1199},
    {brand:"Google", model:"Pixel 7 Pro", price:899},
]

  return (
    <div className="my-10 px-4 py-2 bg-white rounded-sm">
      {Products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {Products.map((product, index) => (
            <li key={index} className="mb-4">
              <h3>{product.brand} {product.model}</h3>
              <p>Price: {product.price}</p>
              <button onClick={() => setCartItems([...cartItems, product])}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductArea
