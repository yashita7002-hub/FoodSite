import React, { useState } from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import FoodItems from "../Components/FoodItems";
import { food_items } from "../food";
import { useSearch } from "../context/context.jsx";
import { GiCancel } from "react-icons/gi";
import Card from "../Components/Card.jsx";


function Home() {
  const { input, cate, setCate } = useSearch();
  const [showCart, setShowCart] = useState(false);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) =>
          item.food_category.trim().toLowerCase() ===
          category.trim().toLowerCase()
      );

      setCate(newList);
    }
  }

  return (
    <div className="relative">

      {/* Navbar */}
      <Navbar onCartClick={() => setShowCart(true)} />

      {/* Categories */}
      {!input && (
        <div className="flex flex-wrap justify-center gap-8 items-center mt-12 px-6">
          {Categories.map((item, index) => (
            <div
              key={index}
              onClick={() => filter(item.name)}
              className="group w-40 h-44 bg-white rounded-2xl shadow-md 
              flex flex-col items-center justify-center gap-3 
              cursor-pointer transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2 hover:bg-amber-50 active:scale-95"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {item.image}
              </div>

              <p className="text-lg font-semibold text-gray-700 group-hover:text-amber-600 transition">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Food Items */}
      <div className="w-full flex flex-wrap justify-center gap-12 mt-12 px-6">
        {cate.map((item) => (
          <FoodItems
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowCart(false)}
          ></div>

          {/* Sidebar */}
          <div
            className="relative w-[40vw] max-w-[450px] h-screen bg-white 
            shadow-[ -10px_0_40px_rgba(0,0,0,0.2)] 
            transform transition-transform duration-500 ease-out 
            animate-slideIn flex flex-col"
          >

            {/* Header */}
            <header className="flex justify-between items-center px-6 py-5 border-b bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800 tracking-wide">
                Order Items
              </h2>

              <button
                onClick={() => setShowCart(false)}
                className="text-2xl text-gray-500 
                transition-all duration-300 
                hover:text-red-500 hover:rotate-90 hover:scale-110"
              >
                <GiCancel />
              </button>
            </header>

            {/* Body */}
            <Card />
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-gray-500 text-center mt-10">
                Your cart is empty 🍽️
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 border-t bg-gray-50">
              <button
                className="w-full py-3 rounded-xl 
                bg-amber-500 text-white font-semibold 
                transition-all duration-300 
                hover:bg-amber-600 hover:shadow-lg active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;