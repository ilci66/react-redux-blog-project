import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../slice/shopSlice'

export default configureStore({
  reducer: {
    shop: shopReducer
  },
})