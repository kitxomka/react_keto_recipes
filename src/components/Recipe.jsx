import React from 'react';

import { Grid,  Typography } from '@material-ui/core';

import data from '../db/recipes.json';



const Recipe = () => {

    const recipeHtml = data.recipes?.map(rec => (

        <>
            <Grid container direction="row" justify="center" alignItems="center" key={rec.id} style={{marginTop: "2rem"}}>
                <Typography variant="h5"> {rec.title} </Typography>
            </Grid>
            <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop: "2rem", fontSize: "0.9rem", fontWeight: "bolder", color: "#999" }}>
                <Grid item>Carbs per serving - {rec.carbs} </Grid>
                <Grid item>Servings - {rec.servings} </Grid>
                <Grid item>Calories per serving - {rec.calories_per_serving} </Grid>
                <Grid items>Fat per serving - {rec.fat} </Grid>
                <Grid items>Protein per serving - {rec.protein} </Grid>
                <Grid item style={{marginTop: '1rem'}}>Prep Time - {rec.prep_time} </Grid>
            </Grid> 
            <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "2rem"}}>
                <Grid item >
                    <img src={rec.img_src} style={{width: "50rem"}} />
                </Grid>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: "2rem"}}>
                <Typography variant="h5">The Preparation</Typography>
                <Grid item>
                    {rec.preps?.map(prep => (
                        <ul>
                            <li>{prep}</li>
                        </ul>
                    ))}
                </Grid>   
            </Grid>

            <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: "2rem"}}>
                <Typography variant="h5">The Execution</Typography>
                <Grid item>
                    {rec.execution?.map(exe => (
                        <ol>
                            <li>{exe}</li>
                        </ol>
                    ))}
                </Grid>
            </Grid>

        </>
           
    ))

    return (
        <Grid container style={{maxWidth: '60rem', border: '1px solid #999'}}>{recipeHtml}</Grid> 
    )
}

export default Recipe
