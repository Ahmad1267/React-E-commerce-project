import { createSlice } from "@reduxjs/toolkit";

 export const cart = createSlice(
    {
        name : "cart",
        initialState:{
            cart : []
        }, 
        reducers:{
          // {Add product}
         addTocart:(state, action)=>{
            const existingProduct = state.cart.find((product)=> product.id === action.payload.id);
            if(existingProduct){
                existingProduct.quantity = (existingProduct.quantity || 1) + 1;
            }else{
            state.cart.push({...action.payload, quantity: 1});
            }
         },
         //  {increase quantity}
         increaseQty: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },
        //  {decrease quantity}
    decreaseQty: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    // {del product}
            delCart:(state, action)=>{
                state.cart =state.cart.filter((product)=>
                    product.id !== action.payload
                )
            },
            clearCart:(state)=>{
              state.cart=[]
            }
         }
        }

)
export const {addTocart, increaseQty, decreaseQty, delCart, clearCart} = cart.actions;
export default cart.reducer