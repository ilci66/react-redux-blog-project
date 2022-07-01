import { createSlice } from '@reduxjs/toolkit'

const state = {
  cart: [],
  items: [
    { id: 1, name: "cyan", price: 10.99},
    { id: 2, name: "teal", price: 12.99},
    { id: 3, name: "yellow", price: 14.99},
    { id: 4, name: "lime", price: 12.99},
    { id: 5, name: "pink", price: 6.99},
    { id: 6, name: "purple", price: 2.99},
    { id: 7, name: "turquoise", price: 4.99},
    { id: 8, name: "red", price: 18.99},
    { id: 9, name: "gold", price: 20.99},
  ]
}


export const shopSlice = createSlice({
  name: 'shop',
  initialState: state,
  reducers: {
    // we are going to send the item id in the action payload
    // If the item with the same id already exists in the cart we will just 
    // increment the quantity
    addItemToCart: (state, action) => {
      if(state.cart.length === 0) state.cart = []
      
      let item = state.cart.filter(x => x.id === action.payload)[0]

      if(item) {
        let newQuantity = item.quantity + 1;
        item = {...item, quantity: newQuantity}
        let i = state.cart.findIndex(i => i.id === action.payload)
        state.cart = [...state.cart.slice(0,i), item,...state.cart.slice(i+1)]
      } else {
        let i = state.items.filter(x => x.id === action.payload)[0];
        i = {...i, quantity: 1 };
        state.cart = [...state.cart, i]
      }

    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload)
    },
    // if there's only one remove the item
    decrementQuantity: (state, action) => {
      state.cart.forEach(i => {
        if(i.id === action.payload) {
          if(i.quantity > 1) {
            i.quantity -= 1;
          }else{
            state.cart = state.cart.filter(i => i.id !== action.payload)
          }
        }
      })
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
})

export const selectCart = (state) => state.shop.cart;
export const selectItems = (state) => state.shop.items;

// Action creators are generated for each case reducer function
export const {
  addItemToCart, 
  removeFromCart, 
  decrementQuantity ,
  clearCart
} = shopSlice.actions

export default shopSlice.reducer