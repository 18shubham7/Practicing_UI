import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import ProductArea from './components/ProductArea'

function App() {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const products = [
  { title: "iPhone 13", brand: "Apple",  price: 79999, description: "The latest iPhone with A15 Bionic chip and improved camera." },
  { title: "MacBook pro", brand: "Apple", price: 129999, description: "The ultimate pro notebook." },
  { title: "Galaxy S21", brand: "Samsung", price: 69999, description: "Powerful Android smartphone." },
  { title: "Oppo Find X", brand: "Oppo", price: 39999, description: "Flagship smartphone with excellent camera." },
  { title: "Reno 6", brand: "Oppo", price: 29999, description: "Affordable smartphone with great performance." },
  ]

  const fillterProducts = selectedBrands.length > 0 ? products.filter((p)=> selectedBrands.includes(p.brand)) : products;

  return (
    <>
    <div className="flex">
     
    <Sidebar selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
     <ProductArea fillterProducts={fillterProducts} /> 
      </div>
    </>
  )
}

export default App
