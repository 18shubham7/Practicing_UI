import { useState } from 'react'

import './App.css'

function App() {
  const [search, setsearch] = useState('')

 const  product=[
       "iPhone 15",
    "Samsung Galaxy",
    "MacBook Air",
    "Nike Shoes",
    "Puma T Shirt",
    "Bluetooth Speaker",
    "Gaming Mouse",
    "Laptop Bag",
  ]

  const fillter_product = product.filter((items)=>
        items.toLowerCase().includes(search.toLocaleLowerCase())
  )
  
  return (
    <>
     <div className="h-full w-full flex items-center justify-center">
    
      <input type="text" onChange={e => setsearch(e.target.value)} value={search} placeholder="Search..."  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
    
        <div className="mt-4 bg-white rounded-lg shadow">
            { search ? (
             fillter_product.length > 0 ?(
            
            fillter_product.map((item, index) => (
                <div key={index} className="p-2 border-b">
                    {item}
                </div>
            ))
          ):(
            <div className="p-2 text-gray-500">No products found.</div>
          )
        ):null
          }
      
        </div>

     </div>
    </>
  )
}

export default App


//------this is with api 

// import { useEffect, useState } from "react";

// function App() {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     if (!search) {
//       setProducts([]);
//       return;
//     }

//     const fetchProducts = async () => {
//       const response = await fetch(
//         `http://localhost:5000/products?search=${search}`
//       );

//       const data = await response.json();

//       setProducts(data);
//     };

//     fetchProducts();

//   }, [search]);

//   return (
//     <div className="min-h-screen flex flex-col items-center p-10">

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search products..."
//         className="border p-3 w-full max-w-md"
//       />

//       <div className="w-full max-w-md mt-4">

//         {search ? (
//           products.length > 0 ? (
//             products.map((item) => (
//               <div key={item._id} className="border-b p-3">
//                 {item.name}
//               </div>
//             ))
//           ) : (
//             <p>No products found</p>
//           )
//         ) : null}

//       </div>

//     </div>
//   );
// }

// export default App;
