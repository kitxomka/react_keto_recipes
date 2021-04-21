import React from 'react';
import { useParams } from 'react-router';

import { Grid, Typography } from '@material-ui/core';
import CategoryItem from './CategoryItem';


const CategoryPage = (props) => {

    const {category} = useParams();
  
    const recipesByCategory = props.recipes.filter(recipe => recipe.category === category);

    return (
        <Grid container direction="column" alignItems="center" style={{ marginTop: '3rem', marginBottom: '3rem'}}>
            <Typography variant="h4" style={{textTransform: 'capitalize', marginBottom: '2rem', color:'#333', fontWeight: '600'}} >{category} - recipes page</Typography>
            {/* {catPageArr} */}
            <CategoryItem category={category} recipes={recipesByCategory} />
        </Grid>
    )
}

export default CategoryPage
