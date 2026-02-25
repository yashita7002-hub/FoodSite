import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif";
import { useState } from "react";



function FoodItems({name,image,id,price,type}) {
   
const [Added,setAdded] = useState(false);

  return (
    <div
      className="w-[220px] bg-white rounded-2xl shadow-md overflow-hidden
      cursor-pointer transition-all duration-300
      hover:shadow-2xl hover:-translate-y-2 hover:border-3 hover:border-orange-400"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Pancakes"
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

        {/* Price + Veg */}
        <div className="flex justify-between items-center">
          <p className="text-amber-600 font-semibold text-md">
            ${price}
          </p>

          <span
            className="flex items-center gap-1 text-green-600 text-sm
            bg-green-100 px-2 py-1 rounded-full"
          >
              {type==="veg" ? <LuLeafyGreen />: <GiChickenOven />}
               
            {type}
           
           
          </span>
        </div>

        {/* Button */}
        <button
         

           onClick={() => setAdded(!Added)}
            className={`mt-3 py-2 rounded-lg font-semibold transition-all duration-300 active:scale-95
          ${
            Added
              ? "bg-green-500 text-white"
              : "bg-amber-500 text-white hover:bg-amber-600"
          }`}
        >
           {Added ? "Added ✓" : "Add to Dish"}
        </button>
      </div>
    </div>
  );
}

export default FoodItems;


/*<div
  tabIndex={0}
  className="w-[220px] bg-white rounded-2xl shadow-md overflow-hidden
  cursor-pointer transition-all duration-300
  hover:shadow-2xl hover:-translate-y-2
  focus:outline-none
  focus:ring-2 focus:ring-amber-500
  focus:border focus:border-amber-500"
>*/