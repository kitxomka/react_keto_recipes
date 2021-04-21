
import { Route, Switch } from 'react-router-dom';

import Header from "./Header";
import RecipesMenu from "./RecipesMenu";
import CatSection from "./CatSection";


import catData from '../db/categories.json';
import recData from '../db/recipes.json';
import CategoryPage from './CategoryPage';
import SingleRecipePage from './SingleRecipePage';


const categories = catData.categories;
const recipes = recData.recipes;

const NUM_OF_ITEMS = 6;

const HomePage = (props) => {
    
    let catSectionArr = []; 

    for(let i = 0; i < categories.length; i++){
        const category = categories[i];     
        const recipesByCategory = recipes.filter(recipe => recipe.category === category.category)
    
        catSectionArr.push(
            <CatSection category={category} recipes={recipesByCategory} numOfItems={NUM_OF_ITEMS} />
        )
    }
    
    return (
        <>
            <Header/>
            <RecipesMenu categories={categories}/>
            <Switch>
                <Route exact path="/">
                    {catSectionArr}
                </Route>
                <Route exact path="/category/:category">
                    <CategoryPage categories={categories} recipes={recipes}/>
                </Route>
                <Route exact path="/recipe/:id">
                    <SingleRecipePage />
                </Route>
            </Switch>
            
        </>
    )
}

export default HomePage


