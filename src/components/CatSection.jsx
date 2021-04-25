
import { Grid } from '@material-ui/core';
import CatSectionHeader from './CatSectionHeader';
import CatSectionItem from './CatSectionItem';


const CatSection = (props) => {


    console.log('CatSection props: ', props);

    const catSectionList = props.recipes.splice(0, props.numOfItems).map(recipe => (
        <CatSectionItem 
            key={recipe.id}
            id={recipe.id} 
            category={recipe.category} 
            title={recipe.title} 
            image={recipe.img_src}
        />
    ))

    return (
        <>
            <Grid container direction="column" alignItems="center" style={{ marginTop: '5rem' }} >
                <Grid item style={{width: '100%'}} >
                    <CatSectionHeader 
                        title={props.category.title}
                        id={props.category.id}
                        image={props.category.image}
                        category={props.category.category}
                        text={props.category.text}
                    />
                </Grid>
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={3} style={{ width: '95%', marginTop: '2rem' }}>
                    {catSectionList}
                </Grid> 
            </Grid>
        </>
    )
}

export default CatSection
