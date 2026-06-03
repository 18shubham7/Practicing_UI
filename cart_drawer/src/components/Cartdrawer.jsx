import React from 'react'

const CartDrawer = ({ cartItems, setCartItems}) => {
    
  let total =0;

  for(let i=0 ; i<cartItems.length; i++){
    total += cartItems[i].price;
  }

  return (
    <div className="px-4 py-2 bg-gray-100 rounded-sm">
      <h1 className="text-lg font-bold mb-2">Cart </h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
                {item.brand} {item.model} - {item.price} <button onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))} className="ml-2 text-red-500">Remove</button>
            </li>
          ))}
            {/* <h3 className="font-bold">Total Price: {cartItems.reduce((total, item) => total + item.price, 0)}</h3> */}
            <p className="text-sm text-gray-600">Items in Cart: {cartItems.length}</p>

<h3 className="font-bold">Total Price: {total} </h3>

        </ul>
      )}
    </div>
    // total price 
    // count of items in cart
  )
}

export default CartDrawer
