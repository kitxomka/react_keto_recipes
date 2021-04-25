import Header from "./Header";
import RecipesMenu from "./RecipesMenu";
import CatSection from "./CatSection";


import catData from '../db/categories.json';
import recData from '../db/recipes.json';


const categories = catData.categories;
const recipes = recData.recipes;

const NUM_OF_ITEMS = 6;


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
        <>
            <Header/>
            <RecipesMenu />
            {catSectionArr}
        </>

    )
}

export default HomePage


