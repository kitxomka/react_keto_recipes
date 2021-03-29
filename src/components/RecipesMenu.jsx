import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import './RecipesMenu.styles.css';

import data from '../db/categories.json';



const categoriesMenu = data.Categories;

const RecipesMenu = () => {

    const htmlMenu = categoriesMenu.map(cat => (
        <Grid item key={cat.id}>
            <a href='#breakfast' className="category">
                <img src={cat.img_src} alt={cat.title} />
                <div>{ cat.title }</div>
            </a>
        </Grid>
    ))

    return (
        <Grid container justify="center" alignItems="center" style={{ marginTop: '7rem' }} >
            <Grid item>
                <Typography variant="h5" style={{ fontSize: '1.7rem' }}>What kind of recipes do you want to see?</Typography>
            </Grid>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{ marginTop: '1rem'}}>
                {htmlMenu}
            </Grid>
        </Grid>
    )
}

export default RecipesMenu
