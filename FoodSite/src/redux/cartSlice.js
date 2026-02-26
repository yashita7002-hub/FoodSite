import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []   // ✅ MUST be object
  },
  reducers: {
    AddItem: (state, action) => {
            const existingItem = state.items.find(
            (item) => item.id === action.payload.id
            );

            if (existingItem) {
            existingItem.qty += 1;   // increase quantity
            } else {
            state.items.push({ ...action.payload, qty: 1 });  // default qty = 1
            }
          },

    IncreaseQty: (state, action) => {
           const item = state.items.find(
          (item) => item.id === action.payload
          );

           if (item) {
           item.qty += 1;
           }
        },

    DecreaseQty: (state, action) => {
          const item = state.items.find(
         (item) => item.id === action.payload
          );
          
          
          if (item && item.qty > 1) {
           item.qty -= 1;
          }
          },
 
     RemoveItem: (state, action) => {
             state.items = state.items.filter((item)=>
                item.id !== action.payload )
        },    


  }
});

export const { AddItem, IncreaseQty, DecreaseQty,RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;