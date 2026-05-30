import React from "react";
import logo from '../assets/react.svg'
import menu from '../assets/menu_icon.png'
import {useState} from "react";

const Navbar =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
          <nav className="bg-gray-800 p-4 ">

            <div className="flex items-center justify-between">

          
            <img src={logo} alt="React Logo" className="h-10 w-10"></img>

             {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          <a href="#" className="hover:text-gray-300">
            Home
          </a>

          <a href="#" className="hover:text-gray-300">
            Products
          </a>

          <a href="#" className="hover:text-gray-300">
            Cart
          </a>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Login
          </button>

        </div>
          
           <button onClick={ () => setIsMenuOpen(!isMenuOpen) } className="md:hidden  ml-auto">
              <img src={menu} alt="Menu Icon" className="h-10 w-10"></img>
            </button> 

        
           
  </div>

    {isMenuOpen && (
                 <div className ="flex flex-col  gap-4 mt-4 md:hidden">
                    <a href="#" className="block text-white mt-2 ">Home</a>
                    <a href="#" className="block text-white mt-2 ">Product</a>
                    <a href="#" className="block text-white mt-2">Cart</a>
                    < button className="bg-white text-black px-4 py-2 rounded-lg">Login</button>
                 </div>
             )}

          </nav>
        </>
    )
}

export default Navbar;



