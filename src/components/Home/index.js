// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import RecipeCard from 'src/containers/RecipeCard';
import HomeStyled from './HomeStyled';

// == Composant
const Home = ({ recipes }) => (
  <HomeStyled>
    <p className="intro">
      Venez essayer nos {recipes.length} dernières recettes
    </p>
    <div className="cards">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  </HomeStyled>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// == Export
export default Home;
