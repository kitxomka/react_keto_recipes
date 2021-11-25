import { Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';


const CategoryItem = (props) => {

    const recipeHtml = props.recipes.map(recipe => (
        <Grid key={recipe.id + '-recipe-id'} container direction="column" alignItems="center" style={{marginTop: '3rem' }} >
            <Grid item style={{textAlign: 'center' }}>
                <Link to={{pathname: `/recipe/${recipe.id}`}} style={{ textDecoration: 'none'}}>
                    <img src={recipe.img_src} alt="" style={{width: '80%', borderBottom: '3px solid #f18b47'}} />
                </Link>
            </Grid>
            <Grid item style={{color: '#4a4a4a', textTransform: 'uppercase', marginTop: '0.8rem'}}>
                <Link to={{pathname: `/recipe/${recipe.id}`}} style={{ textDecoration: 'none', color: '#333333'}}>
                    <Typography variant="h6" style={{fontSize:'1.4rem', fontWeight: '600'}} >{recipe.title}</Typography>
                </Link> 
            </Grid>
            <Grid item style={{width: '58%'}}>
                <Typography variant='body2' style={{textAlign: 'justify'}}>
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
