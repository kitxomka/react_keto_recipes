import { Grid, Typography } from '@material-ui/core';

import RecipiesMenultem from './RecipiesMenultem';

const RecipesMenu = (props) => {

    const htmlMenu = props.categories.map( category => (
        <RecipiesMenultem 
            key={category.id} 
            title={category.title} 
            id={category.id} 
            image={category.image} 
            category={category.category} 
        />  
    ))
    
    
    return (
        <>
            <Grid container justify="center" alignItems="center" style={{ marginTop: '7rem' }} >
                <Grid item>
                    <Typography variant="h5" style={{ fontSize: '1.7rem' }}>What kind of recipes do you want to see?</Typography>
                </Grid>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{ marginTop: '1rem'}}>
                    {htmlMenu}
                </Grid>
            </Grid>
        </>
    )
}

export default RecipesMenu
