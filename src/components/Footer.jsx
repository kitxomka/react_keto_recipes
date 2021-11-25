import React from 'react';

import { Grid, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <Grid container className='footerGConteiner'>
            <Grid item xs={12}>
                <Typography variant="h5" className='footerTypography'>© ALONA SHOT  &nbsp; 2021</Typography>
            </Grid>
        </Grid>
    )  
}

export default Footer
