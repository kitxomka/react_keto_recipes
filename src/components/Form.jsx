import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, TextField, Button, Typography, Container, CircularProgress } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { setTitle, setImgLink, setCategory, setPrepSteps, setExecution, setPrepTime, setServings, setCalories, setFat, setCarbs, setProtein, setLoading, resetForm } from '../redux/reducers/newRecipeReducer';
import { recipeSelector } from '../redux/selectors';

import catData from '../db/categories.json';

import './Page.css';

const categories = catData.categories;


const Form = () => {

    const [isDisable, setDisable] = useState(false);

    const history = useHistory();

    const recipe = useSelector(recipeSelector);
    const dispatch = useDispatch();


    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value))
    }

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value))
    }

    const handleImgLinkChange = (e) => {
        dispatch(setImgLink(e.target.value))
    }

    const handlePrepStepsChange = (e) => {
        dispatch(setPrepSteps(e.target.value))
    }

    const handleExecutionChange = (e) => {
        dispatch(setExecution(e.target.value))
    }

    const handleServingsChange = (e) => {
        dispatch(setServings(e.target.value))
    }

    const handlerPrepTimeChange = (e) => {
        dispatch(setPrepTime(e.target.value))
    }

    const handleCaloriesChange = (e) => {
        dispatch(setCalories(e.target.value))
    }

    const handleFatChange = (e) => {
        dispatch(setFat(e.target.value))
    }

    const handleCarbsChange = (e) => {
        dispatch(setCarbs(e.target.value))
    }

    const handleProteinChange = (e) => {
        dispatch(setProtein(e.target.value))
    }

    const handleLoading = () => {
        dispatch(setLoading())
    }

    const handleReset = () => {
        dispatch(resetForm())
    }


    let urlRegExp = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    let onlyNumRegExp = /^-?\d*[\.]?\d+$/;
    let integerRegExp = /^\d+$/;
    let numAndEmptyStringRegExp = /^-?\d*\.?\d*$/;


    const formValidation = () => {
        if (recipe.title.length > 5
            && urlRegExp.test(recipe.imgLink)
            && recipe.prepSteps.length > 30
            && recipe.execution.length > 30
            && onlyNumRegExp.test(recipe.prepTime)
            && integerRegExp.test(recipe.servings)
            && numAndEmptyStringRegExp.test(recipe.calories)
            && numAndEmptyStringRegExp.test(recipe.fat)
            && numAndEmptyStringRegExp.test(recipe.carbs)
            && numAndEmptyStringRegExp.test(recipe.protein)
        ) {
            return true;
        } else {
            return false;
        }
    }

    // Simulates server connection
    const createRecipe = (recipe) => {
        return new Promise((resolve, reject) => {
            handleLoading();
            setDisable(true);
            if (formValidation()) {
                setTimeout(() => {
                    localStorage.setItem('Recipes', JSON.stringify(recipe));
                    resolve(recipe);
                }, 3000)
            } else {
                setTimeout(() => {
                    reject('Server Error');
                }, 3000)
            }

        });
    };


    async function addRecipe() {
        try {
            await createRecipe(recipe)
            history.push("/");
            alert(JSON.stringify(recipe))
            handleReset(resetForm)
        } catch (error) {
            alert('Error: ' + error)
            handleLoading();
            setDisable(false);
        }
    }


    let catNameArr = [];

    for (let i = 0; i < categories.length; i++) {
        let catName = categories[i].title;
        catNameArr.push(
            <MenuItem key={categories[i].id} value={catName}>{catName}</MenuItem>
        )
    }

    return (
        <Grid container direction='column' spacing={3} className='formGContainer'>
            <Grid item>
                <Typography variant="h4">
                    Add New Recipe
                </Typography>
            </Grid>
            <Grid item xs={8} className='formItem' >
                <Container maxWidth="md">
                    <form onSubmit={addRecipe}>
                        <TextField required fullWidth disabled={isDisable}
                            margin="normal"
                            label='Title'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.title || ''}
                            onChange={handleTitleChange}
                        />
                        <FormControl required fullWidth margin="normal" disabled={isDisable}>
                            <InputLabel id="demo-simple-select-label" style={{ marginLeft: '11px' }}>Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category"
                                variant="outlined"
                                value={recipe.category || ''}
                                style={{textAlign: 'left'}}
                                onChange={handleCategoryChange}
                            >
                                {catNameArr}
                            </Select>
                        </FormControl>
                        <TextField required fullWidth disabled={isDisable}
                            margin="normal"
                            label='Link to image'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.imgLink || ''}
                            onChange={handleImgLinkChange}
                        />
                        <TextField required multiline fullWidth disabled={isDisable}
                            margin="normal"
                            id="outlined-multiline-static"
                            label="Prep Steps"
                            variant="outlined"
                            rows={6}
                            value={recipe.prepSteps || ''}
                            onChange={handlePrepStepsChange}
                        />
                        <TextField required multiline fullWidth disabled={isDisable}
                            margin="normal"
                            id="outlined-multiline-static"
                            label="Execution"
                            variant="outlined"
                            rows={6}
                            value={recipe.execution || ''}
                            onChange={handleExecutionChange}
                        />
                        <TextField required fullWidth disabled={isDisable}
                            margin="normal"
                            label='Prep Time'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.prepTime || ''}
                            onChange={handlerPrepTimeChange}
                        />
                        <TextField required fullWidth disabled={isDisable}
                            margin="normal"
                            label='Servings'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.servings || ''}
                            onChange={handleServingsChange}
                        />
                        <TextField fullWidth disabled={isDisable}
                            margin="normal"
                            label='Calories per serving'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.calories || ''}
                            onChange={handleCaloriesChange}
                        />
                        <TextField fullWidth disabled={isDisable}
                            margin="normal"
                            label='Fat'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.fat || ''}
                            onChange={handleFatChange}
                        />
                        <TextField fullWidth disabled={isDisable}
                            margin="normal"
                            label='Carbs'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.carbs || ''}
                            onChange={handleCarbsChange}
                        />
                        <TextField fullWidth disabled={isDisable}
                            margin="normal"
                            label='Protein'
                            id="outlined-basic"
                            variant="outlined"
                            value={recipe.carbs || ''}
                            onChange={handleProteinChange}
                        />
                        <div style={{ marginTop: '2rem' }}>
                            <Button disableElevation disabled={isDisable}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className='btn'
                            >
                                {recipe.loading ? <CircularProgress style={{ color: 'white' }} size={30} thickness={4} /> : 'ADD RECIPE'}
                            </Button>
                        </div>
                    </form>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Form
