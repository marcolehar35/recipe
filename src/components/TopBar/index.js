// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import LoginForm from 'src/containers/LoginForm';
import TopBarStyled from './TopBarStyled';

// == Composant
const TopBar = () => (
  <TopBarStyled>
    <h1 className="top-title">oRecipes</h1>
    <LoginForm />
  </TopBarStyled>
);

TopBar.propTypes = {};

// == Export
export default TopBar;
