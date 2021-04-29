import { useParams } from 'react-router';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import { Grid, Typography } from '@material-ui/core';
import CategoryItem from './CategoryItem';
import Header from './Header';
import RecipesMenu from './RecipesMenu';
import Footer from './Footer';

import recData from '../db/recipes.json';


const recipes = recData.recipes;

const CategoryPage = (props) => {

    const {category} = useParams();
    
    const recipesByCategory = recipes.filter(recipe => recipe.category === category);

    return (
        <>
            <Header/>
            <RecipesMenu />
            <Grid container direction="column" alignItems="center" style={{ marginTop: '5rem', marginBottom: '3rem'}}>
                <Typography variant="h4" style={{textTransform: 'capitalize', marginBottom: '2rem', color:'#333', fontWeight: '600'}} >{category} - recipes page</Typography>
                <CategoryItem category={category} recipes={recipesByCategory} />
            </Grid>
            <ScrollUpButton/>
            <Footer/>
        </>
    )
}

export default CategoryPage
