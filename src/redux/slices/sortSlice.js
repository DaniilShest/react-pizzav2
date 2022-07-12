import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    activeCategory: 0,
    activeSort: {
        name: 'популярности (по убыванию)',
        sortType: 'rating',
        ascending: 'desc'
    }
}

const sortSlice = createSlice({
    name: "sortSlice",
    initialState,
    reducers: {
        setAtiveCategory(state, category) {
            state.activeCategory = category.payload;
        },
        setActiveSort(state, sort) {
            state.activeSort = sort.payload
        }
    }
})

export const { setAtiveCategory, setActiveSort } = sortSlice.actions
export default sortSlice.reducer