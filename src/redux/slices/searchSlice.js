import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    searchValue: ''
}

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchValue(state, value) {
            state.searchValue = value.payload;
        }
    }
})

export const { setSearchValue } = searchSlice.actions
export default searchSlice.reducer