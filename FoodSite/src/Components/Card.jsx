import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="flex items-center justify-between 
    bg-orange-200 rounded-2xl shadow-md p-4 
    transition-all duration-300 hover:shadow-xl hover:-translate-y-1" >

      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/433/444/large_2x/a-view-from-space-to-a-galaxy-and-stars-universe-filled-with-stars-nebula-and-galaxy-panoramic-shot-wide-format-elements-of-this-image-furnished-by-nasa-free-photo.jpg"
          alt="food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Quantity */}
      <div className="flex flex-col gap-3 flex-1 px-4">

        <span className="text-lg font-semibold text-gray-800">
          Chicken Soup
        </span>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">

          <div className="w-8 h-8 flex items-center justify-center 
          rounded-lg bg-gray-100 cursor-pointer 
          hover:bg-amber-100 transition">
            -
          </div>

          <div className="w-8 h-8 flex items-center justify-center 
          font-semibold text-gray-700">
            1
          </div>

          <div className="w-8 h-8 flex items-center justify-center 
          rounded-lg bg-gray-100 cursor-pointer 
          hover:bg-amber-100 transition">
            +
          </div>

        </div>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col items-end gap-4">

        <span className="text-lg font-bold text-amber-600">
          ₹450
        </span>

        <div className="text-gray-400 cursor-pointer 
        transition-all duration-300 
        hover:text-red-500 hover:scale-110">
          <FaTrashAlt />
        </div>

      </div>

    </div>
  );
}

export default Card;