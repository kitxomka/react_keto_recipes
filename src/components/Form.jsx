import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../reducers/newRecipeReducer';
import { recipeSelector } from '../selectors';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import catData from '../db/categories.json';

const categories = catData.categories;


const Form = () => {

    const count = useSelector(recipeSelector);
    const dispatch = useDispatch();

    let catNameArr = []; 

    for(let i=0; i < categories.length; i++){
        let catName = categories[i].title;
        catNameArr.push(
            <MenuItem key={catName} value={catName}>{ catName }</MenuItem>
        )  
    } 

    const addRecipe = () => {
        console.log('The recipe has been added')
    }

    return (
        <Grid container direction='column' spacing={3} style={{textAlign:'center', marginTop:'5rem'}}>
            <Grid item>
                <Typography variant="h4" gutterBottom component="div">
                    Add New Recipe
                </Typography>
            </Grid>
            <Grid item xs={8} style={{margin: 'auto'}}>
                <TextField required fullWidth 
                    margin="normal"
                    label='Title'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <FormControl required fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label" style={{marginLeft: '11px'}}>Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                        variant="outlined"
                    >
                        { catNameArr }
                    </Select>
                </FormControl> 
                <TextField required fullWidth 
                    margin="normal"
                    label='Link to image'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField required multiline fullWidth 
                    margin="normal"
                    id="outlined-multiline-static" 
                    label="Prep Steps" 
                    variant="outlined" 
                    rows={6} 
                />
                <TextField required multiline fullWidth 
                    margin="normal"
                    id="outlined-multiline-static" 
                    label="Execution" 
                    variant="outlined" 
                    rows={6} 
                />
                <TextField required fullWidth 
                    margin="normal"
                    label='Prep Time'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField required fullWidth 
                    margin="normal"
                    label='Servings'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField fullWidth 
                    margin="normal"
                    label='Calories per serving'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField fullWidth 
                    margin="normal"
                    label='Fat'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField fullWidth 
                    margin="normal"
                    label='Carbs'
                    id="outlined-basic" 
                    variant="outlined"
                />
                <TextField fullWidth 
                    margin="normal"
                    label='Protein'
                    id="outlined-basic" 
                    variant="outlined"
                />
            </Grid>
            <Grid item style={{marginTop: '2rem'}}>
                <Button disableElevation
                    variant="contained" 
                    color="primary" 
                    style={{ textTransform: 'uppercase', fontSize: '1rem', backgroundColor: '#dd955a'}}
                    onClick={() => dispatch(add())}
                >
                    ADD RECIPE
                </Button>
            </Grid>
        </Grid>
    )
}

export default Form
