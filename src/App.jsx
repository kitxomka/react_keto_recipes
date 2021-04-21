import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container, CssBaseline } from '@material-ui/core';

import HomePage from './components/HomePage';

const App2 = () => {
    return ( 
        <Router> 
            <CssBaseline /> 
                <Container maxWidth="lg">
                    <HomePage/>
                </Container> 
        </Router>    
    )
}

export default App2
