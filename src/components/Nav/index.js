// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import NavStyled from './NavStyled';

// == Composant
const Nav = () => (
  <NavStyled>
    <ul>
      <li><NavLink exact to="/">Accueil</NavLink></li>
      <li><NavLink exact to="/recipe/demo-recette">recette 1</NavLink></li>
      <li><NavLink exact to="/recipe/demo-autre">recette 2</NavLink></li>
    </ul>
  </NavStyled>
);

Nav.propTypes = {};

// == Export
export default Nav;
