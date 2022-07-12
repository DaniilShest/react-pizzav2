import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    totalPrice: 0,
    count: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addItem(state, item) {
            const findItem = state.items.find(element => element.id === item.payload.id && element.type === item.payload.type && element.size === item.payload.size)
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...item.payload,
                    count: 1
                })
            }
            state.totalPrice += item.payload.price
            state.count++
        },
        decrementCount(state, item) {
            const findItem = state.items.find(element => element.id === item.payload.id && element.type === item.payload.type && element.size === item.payload.size)
            if (findItem.count > 1) {
                findItem.count--;
                state.totalPrice -= item.payload.price
                state.count--
            }
        },
        removeItem(state, item) {
            const findItem = state.items.find(element => element.id === item.payload.id && element.type === item.payload.type && element.size === item.payload.size)
            state.items = state.items.filter(el => {
                return (el.id !== findItem.id || el.size !== findItem.size || el.type !== findItem.type)
            })
            state.totalPrice -= findItem.price * findItem.count
            state.count -= findItem.count
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            state.count = 0
        }
    }
})

export const { addItem, removeItem, clearItems, decrementCount } = cartSlice.actions
export default cartSlice.reducer