import { connect } from 'react-redux';
import Home from 'src/components/Home';

// == Data / state
const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Home);
