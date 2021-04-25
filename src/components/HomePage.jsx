
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

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

// const testRecipes = [
//     {
//         "id": 7,
//         "category": "breakfast",
//         "title": "Keto Eggplant Hash with Eggs",
//         "prep_time": "20 minutes",
//         "servings": "4 servings",
//         "calories_per_serving": "554",
//         "fat": "43.6 g",
//         "carbs": "6 g",
//         "protein": "36.1 g",
//         "preps": [
//             "2 tablespoon olive oil", 
//             "1/2 medium yellow onion", 
//             "8 ounce halloumi cheese, diced",
//             "1 medium eggplant, diced",
//             "8 large egg",
//             "4 tablespoon butter, for frying",
//             "1/2 teaspoon worcestershire sauce",
//             "Salt and pepper to taste"
//         ],
//         "execution": [
//             "Measure out and prepare all ingredients.",
//             "In a frying pan over medium heat, add the olive oil and onion. Saute until onion is soft.",
//             "Add the eggplant and halloumi cheese to the pan and cook until everything is golden brown in color, stirring occasionally. Season with salt and pepper to taste. When finished, plate the hash and cover to keep warm.",
//             "Cook the eggs how you like using the butter.",
//             "Put the eggs over the eggplant hash. Serve with remaining butter from the pan and Worcestershire sauce. Season with additional salt and pepper if desired."
//         ],
//         "img_src": "https://cdn.ruled.me/wp-content/uploads/2021/01/Eggplant-Hash-Featured.jpg",
//         "description": "This eggplant hash is a great replacement for the classic potato hash but made keto-friendly! Instead of potatoes, this is made with diced eggplant pieces, halloumi cheese, and onion! A sunny side up egg is placed on top of the hash and the egg yolk oozes out and pairs perfectly with the eggplant hash. A perfect combination of a soft yet crunchy breakfast due to the eggplant and onion."
//     }
// ]

const HomePage = (props) => {
    
    let catSectionArr = []; 

    for(let i = 0; i < categories.length; i++){
        const category = categories[i];     
        const recipesByCategory = recipes.filter(recipe => recipe.category === category.category)
    
        catSectionArr.push(
            <CatSection key={category.id} category={category} recipes={recipesByCategory} numOfItems={NUM_OF_ITEMS} />
        )
    }
    
    return (
            <Router>
                <Header/>
                <RecipesMenu categories={categories}/>
                <Switch>
                    <Route exact path="/" >
                        {catSectionArr}
                    </Route>
                    <Route exact path="/category/:category">
                        <CategoryPage categories={categories} recipes={recipes}/>
                    </Route>
                    <Route exact path="/recipe/:id">
                        <SingleRecipePage />
                    </Route>
                </Switch>
                </Router>
    )
}

export default HomePage


