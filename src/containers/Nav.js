import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Nav from 'src/components/Nav';

// == Data / state
const mapStateToProps = (state) => ({
  // list = la prop attendue par Nav
  // state.recipes.list = le state est découpé en fragments (combineReducer)
  // - nous voulons le fragment recipes et spécifiquement la "list" des recettes
  list: state.recipes.list,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
