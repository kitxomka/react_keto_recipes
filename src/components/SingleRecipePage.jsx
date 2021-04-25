import { useParams } from 'react-router';

import Header from './Header';
import RecipesMenu from './RecipesMenu';

import catData from '../db/categories.json';
import recData from '../db/recipes.json';


const categories = catData.categories;
const recipes = recData.recipes;

const SingleRecipePage =(props) => {

    const {id} = useParams();

    return (
        <>
            <Header/>
            <RecipesMenu />
            <h2>Single Recipe Page - {id} </h2>
        </>
    )
}

export default SingleRecipePage
