import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        // {id:null, title: "first item", quantity:1, price: 44}
    ],
   
    totalPrice:0,
}

const calculateTotalPrice = (items) => {
   return items.reduce((total, item) => total + item.price * item.quantity, 0)

}

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers:{
        addToCard: (state, action) => {
             const existingItem = state.items.find((item) => item.id === action.payload.id)
             if (existingItem) {
                existingItem.quantity += 1
             }else{
                state.items.push({...action.payload, quantity:1})
             }
          
             state.totalPrice = calculateTotalPrice(state.items)

        },
        removeCard: (state, action) => {
           state.items  =  state.items.filter((item) => item.id !== action.payload)
           state.totalPrice = calculateTotalPrice(state.items); 
        },

        incremnentQuantity: (state, action) => {
            const newItems = state.items.find((item) => item.id === action.payload)

             if (newItems) {
              newItems.quantity += 1
        }
        state.totalPrice = calculateTotalPrice(state.items)
        },
        decrementQuantity: (state, action) => {

            const newItems = state.items.find((item) => item.id === action.payload)
            if (newItems && newItems.quantity > 1) {
                newItems.quantity -= 1
            }
            state.totalPrice = calculateTotalPrice(state.items)
        }

       
    }
})

export const {addToCard, removeCard, incremnentQuantity, decrementQuantity} = cardSlice.actions
export default cardSlice.reducer