import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Recipe from 'src/components/Recipe';

// Selectors
import { getRecipeFromSlug } from 'src/selectors/urls';

// == Data / state
const mapStateToProps = (state, ownProps) => {
  // ownProps contient les props posées sur le container
  // En passant par Route, le props vont contenir toutes les infos liées à la route
  // history, match, location...
  // Nous voulons recup seulement les infos de match (slug)
  const { slug } = ownProps.match.params;
  return {
    // j'utilise un selector pour trouver la recette correspondante au slug
    recipe: getRecipeFromSlug(state.recipes.list, slug),
  };
};

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const RecipeContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default RecipeContainer;
