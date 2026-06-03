import { useState } from 'react'

import './App.css'
import CartDrawer from './components/Cartdrawer'
import ProductArea from './components/ProductArea'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
    <ProductArea cartItems={cartItems} setCartItems={setCartItems} />
      <CartDrawer cartItems={cartItems} setCartItems={setCartItems} />

    </>
  )
}

export default App
