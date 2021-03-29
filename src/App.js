import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import RecipesMenu from './components/RecipesMenu';
import RecipesList from './components/RecipesList';

import '../src/App.css'

function App() {
  return (
    <>
      <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <RecipesMenu /> 
          <RecipesList/>
        </Container>
    </>
  );
}

export default App;

