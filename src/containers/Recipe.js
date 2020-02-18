import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Recipe from 'src/components/Recipe';

// == Data / state
const mapStateToProps = (state) => {
  console.log('mapStateToProps : Recipe');
  return {
    recipe: state.recipes.list[1],
  };
};

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const RecipeContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default RecipeContainer;
