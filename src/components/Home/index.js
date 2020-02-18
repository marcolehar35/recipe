// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import RecipeCard from 'src/components/RecipeCard';
import HomeStyled from './HomeStyled';

// == Composant
const Home = () => (
  <HomeStyled>
    <p className="intro">Venez vous régalez avec ces merveilles recettes !</p>
    <div className="cards">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </HomeStyled>
);

Home.propTypes = {};

// == Export
export default Home;
