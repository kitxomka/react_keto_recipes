import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <Grid container style={{color: '#333333', marginTop: '5rem', borderTop: '1px solid #333333' }}>
            <Grid item style={{margin: 'auto'}}>
                <Typography variant="h5">© ALONA SHOT  &nbsp; 2021</Typography>
            </Grid>
        </Grid>
    )  
}

export default Footer
