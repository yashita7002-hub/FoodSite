import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import { SearchContext,useSearch } from "../context/context.jsx";
import {food_items} from "../food.js" ;
import { useSelector } from "react-redux";


function Navbar({ onCartClick }) {
 



  const { input, setInput,cate,setCate } = useSearch();
  useEffect(()=>{
   let newList =  food_items.filter((item)=>item.food_name.includes(input) || 
   item.food_name.toLowerCase().includes(input))
   setCate(newList)
   },[input])




    const cartItems = useSelector((store) => store.cart.items);

    
  return (
    <>
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <MdFoodBank className="text-3xl text-amber-600" />
          <h1 className="text-2xl font-bold text-amber-600 tracking-wide">
            Foodie
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-[400px] focus-within:ring-2 focus-within:ring-amber-400 transition-all duration-300">
          <CiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search your favorite dish..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          

          <div className="relative cursor-pointer">
            <button onClick={onCartClick}>
 <FiShoppingCart className="text-2xl text-gray-700 hover:text-amber-600 transition" />
</button>
            
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.length}
            </span>
          </div>
        </div>

      </div>
    </nav>
    </>
  )
}
export default Navbar;