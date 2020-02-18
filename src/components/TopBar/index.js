// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import TopBarStyled from './TopBarStyled';

// == Composant
const TopBar = () => (
  <TopBarStyled>
    <h1 className="top-title">oRecipes</h1>
  </TopBarStyled>
);

TopBar.propTypes = {};

// == Export
export default TopBar;
