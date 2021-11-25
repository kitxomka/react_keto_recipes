import { useParams } from 'react-router';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import { Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Header from '../Header';
import RecipesMenu from '../Menu/RecipesMenu';
import Footer from '../Footer';

import recData from '../../db/recipes.json';

import './Recipe.css';

const recipes = recData.recipes;

const SingleRecipePage = () => {

    const params = useParams();
    const numId = parseInt(params.id);

    const singleRecipeHtml = recipes.filter(recipe => recipe.id === numId).map(recipe => (
        <>
        <Grid container direction="column" alignItems="center" justify="center" key={recipe.id + '-recipe-id'} className='recipeGContainer'>
            <Grid item xs={6} className='recipeItem' style={{color: '#333', fontWeight: '600'}}>
                 <Typography variant="h4">{recipe.title}</Typography>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '3rem',textTransform: 'uppercase' }}>
                <Typography variant="body1" style={{ fontWeight: '600'}}>
                    <span style={{color: '#b3b3b3'}}>keto recipes &gt; </span>
                    <span style={{color: '#f5a570'}}> keto {recipe.category} recipes</span>
                </Typography>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '3rem', textAlign: 'center'}}>
                 <img src={recipe.img_src} alt="" style={{ borderBottom: '3px solid #f18b47', maxWidth: '80%'}} />
            </Grid>   
        </Grid>
        <Grid container direction="column" key={recipe.id + '-recipe-id2'} style={{maxWidth: '60rem', margin: 'auto' }}>
            <Grid item style={{marginBottom: '3rem'}}>
                <Typography variant="h5" style={{marginLeft: '8rem'}}>The Preparation</Typography>
                <List style={{marginLeft: '9rem'}}>
                    {recipe.prep.map(prep => (
                        <ListItem> {prep} </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item sm={12} style={{marginBottom: '3rem'}}>
                <Typography variant="h5" style={{marginLeft: '8rem'}}>The Execution</Typography>
                <List style={{marginLeft: '9rem'}}>
                    {recipe.execution.map(execution => (
                        <ListItem>{execution}</ListItem>
                    ))}
                </List>            
            </Grid>
            <Grid item sm={12}>
                <Typography variant="h5" style={{marginLeft: '8rem'}}>Notes</Typography>
                    <Typography  style={{marginLeft: '9rem'}}>
                        This makes a total of {recipe.servings} of {recipe.title}. Each serving comes out to be {recipe.calories_per_serving} calories,<br/>
                        {recipe.fat} fat, {recipe.protein} protein and {recipe.carbs} net carbs.
                    </Typography>
            </Grid>  
        </Grid>
        </>
    ))

    return (
        <>
            <Header/>
            <RecipesMenu />
                {singleRecipeHtml}
            <ScrollUpButton/>
            <Footer/>
        </>
    )
}

export default SingleRecipePage