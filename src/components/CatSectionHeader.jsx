import { Grid, Typography } from '@material-ui/core';

import Btn from './Btn';


const CatSectionHeader = (props) => {
    console.log("CatSectionHeader-props", props)
    console.log("CatSectionHeader-title", props.title)
    // const StObj = JSON.stringify({props});
    // console.log('>>>>> StObj', StObj)
    // const ParseObj = JSON.parse(StObj);
    // console.log('>>>>> ParseObj', ParseObj)

    
    return (
        <>
            <Grid container direction="row" alignItems="center" key={props.id} className={props.category} >
                <Grid item>
                    <img src={props.image} alt={props.title} />
                </Grid>
                <Grid item xs={9} sm={6}>
                    <Typography variant="h4"> {props.title} Recipes </Typography>
                    <Typography variant="subtitle2" style={{ color: '#858585', width: '80%' }}> {props.text} </Typography >
                </Grid>
                <Grid item xs={6} sm={3} style={{marginLeft: '11rem', textAlign: 'end' }}>
                    <Btn category={props.category} />
                </Grid>
            </Grid>
        </>
    )
}

export default CatSectionHeader
