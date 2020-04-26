// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Award } from 'react-feather';

// == Import
import { getUrl } from 'src/selectors/urls';
import RecipeCardStyled from './RecipeCardStyled';

// == Composant
// eslint-disable-next-line object-curly-newline
const RecipeCard = ({ title, thumbnail, difficulty, isFavorite }) => (
  <RecipeCardStyled className={isFavorite ? 'card card--is-favorite' : 'card'}>
    {isFavorite && <Award className="card-icon" />}
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
  isFavorite: PropTypes.bool,
};

RecipeCard.defaultProps = {
  isFavorite: false,
};


// == Export
export default RecipeCard;
