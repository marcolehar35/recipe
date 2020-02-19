// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import { getUrl } from 'src/selectors/urls';
import RecipeCardStyled from './RecipeCardStyled';

// == Composant
const RecipeCard = ({ title, thumbnail, difficulty }) => (
  <RecipeCardStyled>
    <img className="card-image" src={thumbnail} alt={title} />
    <div className="card-details">
      <h2 className="card-title">{title}</h2>
      <p>Difficulté : {difficulty}</p>
      <Link className="card-link" to={getUrl('recipe', title)}>
        Lire la recette
      </Link>
    </div>
  </RecipeCardStyled>
);

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default RecipeCard;
