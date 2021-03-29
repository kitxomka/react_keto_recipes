import React from 'react';

import { Grid, Typography, Button  } from '@material-ui/core';

import data from '../db/categories.json';


const ListHeader = () => {

    const htmlListHeader = data.Categories.map(list => (
        // console.log(list)
        <Grid container direction="row" justify="space-between" alignItems="center" key={list.id}>
            <Grid item>
                <img src={ list.img_src } alt={list.title}></img>
            </Grid>
            <Grid item xs={9} sm={6}>
                <Typography variant="h4"> {list.title} Recipes </Typography>
                <Typography variant="subtitle2" style={{color: '#858585', width: '80%'}}> {list.text} </Typography >
            </Grid>
            {/* <Grid item xs={6} sm={3}></Grid> */}
            <Grid item xs={6} sm={3} style={{textAlign: 'end'}}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation  
                    style={{
                        textTransform: 'uppercase', 
                        fontSize: '1rem', 
                        backgroundColor: '#dd955a',
                    }}
                >
                    view more recipes
                </Button>
            </Grid>
        </Grid>  
    ))

    return (
        <>
            {htmlListHeader}
            
            </>
    )
}

export default ListHeader
