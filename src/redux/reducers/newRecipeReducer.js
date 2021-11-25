import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';


export const recipeSlice = createSlice({
    name: 'newRecipe',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setImgLink: (state, action) => {
            state.imgLink = action.payload;
        },
        setPrepSteps: (state, action) => {
            state.prepSteps = action.payload;
        },
        setExecution: (state, action) => {
            state.execution = action.payload;
        },
        setPrepTime: (state, action) => {
            state.prepTime = action.payload;
        },
        setServings: (state, action) => {
            state.servings = action.payload;
        },
        setCalories: (state, action) => {
            state.calories = action.payload;
        },
        setFat: (state, action) => {
            state.fat = action.payload;
        },
        setCarbs: (state, action) => {
            state.carbs = action.payload;
        },
        setProtein: (state, action) => {
            state.protein = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading;
        },
        resetForm: () => initialState
    }
})

export const { setTitle, setImgLink, setCategory, setPrepSteps, setExecution, setPrepTime, setServings, setCalories, setFat, setCarbs, setProtein, setLoading, resetForm } = recipeSlice.actions;

export default recipeSlice.reducer;