import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Cart Add Reducer
        AddItem: (state, action) => {
            state.push(action.payload);
        },
  
        // Remove to cart Reducer
        RemoveItem: (state, action) => {
            return state.filter((item) => (item.id !== action.payload));
        }
    }
});

export const { AddItem, RemoveItem } = cartslice.actions;
export default cartslice.reducer;
