import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import searchSlice from './slices/searchSlice'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
    reducer: {
        sort: sortSlice,
        search: searchSlice,
        cart: cartSlice
    },
})