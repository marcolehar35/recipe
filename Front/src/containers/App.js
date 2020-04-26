import { connect } from 'react-redux';

import App from 'src/components/App';

// == Data / state
const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
