// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import RecipeCardStyled from './RecipeCardStyled';

// == Composant
const RecipeCard = () => (
  <RecipeCardStyled>
    Carte recette
    <img className="card-image" src="" alt="" />
    <div className="card-details">
      <h2 className="card-title">Titre de la recette</h2>
      <p>Difficulté : Facile</p>
      <Link className="card-link" to="/recipe/demo">Lire la recette</Link>
    </div>
  </RecipeCardStyled>
);

RecipeCard.propTypes = {

};

// == Export
export default RecipeCard;
