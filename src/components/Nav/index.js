// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import NavStyled from './NavStyled';

// == Composant
const Nav = () => (
  <NavStyled>
    <ul>
      <li><a className="link" href="">Accueil</a></li>
      <li><a className="link" href="">Recette 1</a></li>
    </ul>
  </NavStyled>
);

Nav.propTypes = {};

// == Export
export default Nav;
