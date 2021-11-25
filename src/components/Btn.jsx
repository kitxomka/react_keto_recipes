import {  Button  } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './Page.css';

const Btn = (props) => {
    return (
        <>
            <Button variant="contained" color="primary" disableElevation className='btn' >
                <Link to={{pathname: `/category/${props.category}`}} className='btnLink'>
                    view more recipes
                </Link>
            </Button>
        </>
    )
}

export default Btn
