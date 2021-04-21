import React from 'react';
import { useParams } from 'react-router';

const SingleRecipePage =(props) => {

    const {id} = useParams();

    return (
        <h2>Single Recipe Page - {id} </h2>
    )
}

export default SingleRecipePage
