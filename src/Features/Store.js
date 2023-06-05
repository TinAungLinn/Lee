import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './Services/CartSlice'

export const store = configureStore({
    reducer: {
        cart : cartSlice
    }
})