// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import HomeStyled from './HomeStyled';

// == Composant
const Home = () => (
  <HomeStyled>
    <p className="intro">Venez vous régalez avec ces merveilles recettes !</p>
    <div>Cards . recettes</div>
  </HomeStyled>
);

Home.propTypes = {};

// == Export
export default Home;
