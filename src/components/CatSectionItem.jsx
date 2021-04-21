import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';



const CatSectionItem = (props) => {

    const item = props;

    return (
        <Grid item xs={4} >
            <Link to={{pathname: `/recipe/${item.id}`}} style={{ textDecoration: 'none'}} >
                <Grid item>
                    <img src={item.image} alt={item.title} style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" style={{ color: '#858585', width: '80%' }}> {item.title} </Typography>
                </Grid>
            </Link> 
        </Grid>
        
    )
}

export default CatSectionItem
