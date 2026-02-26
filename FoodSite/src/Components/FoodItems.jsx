import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../redux/cartSlice"; // adjust path if needed
import { useState } from "react";

  import { ToastContainer, toast } from 'react-toastify';

function FoodItems({ name, image, id, price, type, }) {
  
  const dispatch = useDispatch();


 const cartItems=useSelector((store) => store.cart.items)


const isAdded = cartItems.some(
  (item) => Number(item.id) === Number(id) 
  
  
);
console.log(cartItems)





  return (
    <div
      className="w-[220px] bg-white rounded-2xl shadow-md overflow-hidden
      cursor-pointer transition-all duration-300
      hover:shadow-2xl hover:-translate-y-2 hover:border-2 hover:border-orange-400"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-cover
          transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">
          {name}
        </h2>

        {/* Price + Type */}
        <div className="flex justify-between items-center">
          <p className="text-amber-600 font-semibold text-md">
            ₹{price}
          </p>

          <span
            className="flex items-center gap-1 text-green-600 text-sm
            bg-green-100 px-2 py-1 rounded-full"
          >
            {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
            {type}
          </span>
        </div>

        {/* Button */}
        
  <button
  onClick={() =>
    {dispatch(AddItem({ id, name, image, price, type}));
    toast.success("item added")}
  }
  className={`mt-3 py-2 rounded-lg font-semibold transition-all duration-300 active:scale-95
  ${
    isAdded
      ? "bg-green-500 text-white"
      : "bg-amber-500 text-white hover:bg-amber-600"
  }`}
>
  {isAdded ? "Added ✓" : "Add to Dish"}
</button>
      </div>
    </div>
  );
}

export default FoodItems;