import React from 'react';

import { Grid } from '@material-ui/core';
import ListHeader from './ListHeader';
import Recipe from './Recipe';


const RecipesList = () => {



    return (
        <>
        <Grid container direction="column" alignItems='flex-statrt' justify="space-between" style={{ marginTop: '5rem' }} >
            <Grid item >
                {/* <ListHeader/> */}
                
            </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" >
            <Recipe/>
        </Grid>
        </>
    )
}

export default RecipesList
