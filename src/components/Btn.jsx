import {  Button  } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Btn = (props) => {
    return (
        <>
            <Button variant="contained" color="primary" disableElevation style={{ textTransform: 'uppercase', fontSize: '1rem', backgroundColor: '#dd955a'}}>
                <Link to={{pathname: `/category/${props.category}`}} style={{textDecoration: 'none', color: 'white'}}>
                    view more recipes
                </Link>
            </Button>
        </>
    )
}

export default Btn
