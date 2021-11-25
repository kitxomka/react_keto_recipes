import { configureStore } from '@reduxjs/toolkit';
import newRecipeReducer from './reducers/newRecipeReducer';

export default configureStore({
    reducer: {
        newRecipe: newRecipeReducer,
    },
})