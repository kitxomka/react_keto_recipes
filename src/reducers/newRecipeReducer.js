import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: ''
}


export const counterSlice = createSlice({
    name: 'newRecipe',
    initialState,
    reducers: {
        add: (state) => {
            state.title = 'new title'
        }
    }
})

export const { add } = counterSlice.actions;

export default counterSlice.reducer;