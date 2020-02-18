// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import { getUrl } from 'src/selectors/urls';
import NavStyled from './NavStyled';

// == Composant
const Nav = ({ list }) => (
  <NavStyled>
    <ul>
      <li><NavLink exact to="/">Accueil</NavLink></li>
      {list.map((recipe) => (
        <li key={recipe.id}>
          <NavLink
            exact
            to={getUrl('recipe', recipe.title)}
          >
            {recipe.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </NavStyled>
);

Nav.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// == Export
export default Nav;
