import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const CategoryItem = (props) => {

    // console.log('>>>>>>', props.recipes)

    const recipeHtml = props.recipes.map(recipe => (
        <Grid container direction="column" alignItems="center" style={{border: '1px solid black' }} >
            <Grid item style={{textAlign: 'center' }}>
                <img src={recipe.img_src} ail="" style={{width: '80%', borderBottom: '3px solid #f18b47'}} />
            </Grid>
            <Grid item style={{color: '#4a4a4a', textTransform: 'uppercase' }}>
                <Typography variant="h6" style={{fontSize:'1.4rem',fontWeight: '600'}} >{recipe.title}</Typography>
            </Grid>
            <Grid item >
                <Typography variant='body2'>
                    {recipe.description}
                </Typography>
            </Grid>

        </Grid>
        
    ))
    
    return (
        <Grid container direction="column" alignItems="center" style={{maxWidth: '100rem' }}>
            {recipeHtml}
        </Grid>
        
    )
}

export default CategoryItem
