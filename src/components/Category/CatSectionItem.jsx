import { Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';


const CatSectionItem = (props) => {

    const item = props;

    return (
        <Grid item xs={12} sm={4} style={{height: '25rem'}}>
            <Link to={{ pathname: `/recipe/${item.id}` }} style={{ textDecoration: 'none' }} >
                <Grid item>
                    <img src={item.image} alt={item.title} style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" style={{color: '#dd955a'}}>Prep Time: {item.prep_time}</Typography>
                    <Typography variant="subtitle2" style={{color: '#dd955a'}}>Servings: {item.servings}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" style={{ color: '#858585', fontWeight: 'bold' }}> {item.title} </Typography >
                </Grid>
            </Link>
        </Grid>

    )
}

export default CatSectionItem
