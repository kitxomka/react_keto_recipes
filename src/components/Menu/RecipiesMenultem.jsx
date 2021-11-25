import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';


const RecipiesMenultem = (props) => {

    return (
        <>
            <Grid item key={props.id}>
                <Link to={{pathname: `/category/${props.category}`}} className={props.category} style={{textDecoration: 'none'}} >
                    <img src={props.image} alt={props.title} />
                    <div style={{textAlign: 'center', color: '#b4b4b4', fontSize: '13px', fontWeight: 'bolder'}} >
                        { props.title }
                    </div>
                </Link>
            </Grid>
        </>
    )
}

export default RecipiesMenultem
