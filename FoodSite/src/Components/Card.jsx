import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { IncreaseQty, DecreaseQty, RemoveItem } from "../redux/cartSlice";

  import { ToastContainer, toast } from 'react-toastify';

function Card() {
   const cartItems = useSelector((store) => store.cart.items);
   const dispatch = useDispatch();
   const subtotal = cartItems.reduce((total,item)=>total+(item.price*item.qty),0);
 
   const total = (subtotal + 20 +1.995);

 
  return (


    <>
    {cartItems.map((item)=>(
        
    <div className="flex items-center justify-between 
    bg-orange-200 rounded-2xl shadow-md p-4 
    transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-auto" >

      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt="food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Quantity */}
      <div className="flex flex-col gap-3 flex-1 px-4">

        <span className="text-lg font-semibold text-gray-800">
          {item.name}
        </span>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">

          <div className="w-8 h-8 flex items-center justify-center 
          rounded-lg bg-gray-100 cursor-pointer 
          hover:bg-amber-100 transition"
            onClick={() => dispatch(DecreaseQty(item.id))}
          >
            -
          </div>

          <div className="w-8 h-8 flex items-center justify-center 
          font-semibold text-gray-700">
            {item.qty}
          </div>

          <div className="w-8 h-8 flex items-center justify-center 
          rounded-lg bg-gray-100 cursor-pointer 
          hover:bg-amber-100 transition"
            onClick={() => dispatch(IncreaseQty(item.id))}
          >
            +
          </div>

        </div>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col items-end gap-4">

        <span className="text-lg font-bold text-amber-600">
         $ {item.price*item.qty}
        </span>

        <div className="text-gray-400 cursor-pointer 
        transition-all duration-300 
        hover:text-red-500 hover:scale-110">
          <FaTrashAlt
          onClick={()=>dispatch(RemoveItem(item.id))
            
          } />
        </div>

      </div>

    </div>
    ))}

<div className="mt-10 w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">

  <h2 className="text-xl font-semibold mb-6 text-gray-800">
    Order Summary
  </h2>

  <div className="space-y-4 text-gray-600 text-sm sm:text-base">

    <div className="flex justify-between">
      <span>Subtotal</span>
      <span className="font-medium text-gray-800">Rs {subtotal}</span>
    </div>

    <div className="flex justify-between">
      <span>Delivery Fee</span>
      <span className="font-medium text-gray-800">Rs 20/-</span>
    </div>

    <div className="flex justify-between">
      <span>Taxes</span>
      <span className="font-medium text-gray-800">Rs 1.995/-</span>
    </div>

    <hr className="my-4 border-dashed" />

    <div className="flex justify-between text-lg font-semibold text-gray-900">
      <span>Total</span>
      <span>Rs {total} /-</span>
    </div>

  </div>

  <button className="mt-6 w-full bg-orange-400 hover:bg-orange-300 text-white py-3 rounded-xl transition duration-300 active:scale-95"
      onClick={
      ()=> toast.success("order placed!!")}
    >
    Proceed to Checkout

  </button>

</div>
    </>
  );
}

export default Card;