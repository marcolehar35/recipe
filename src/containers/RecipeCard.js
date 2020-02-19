import { connect } from 'react-redux';
import RecipeCard from 'src/components/RecipeCard';

// == Data / state
const mapStateToProps = (state, ownProps) => ({
  isFavorite: state.auth.user.favorites.includes(ownProps.id),
});

// == Actions / dispatch
const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
