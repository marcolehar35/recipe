import { combineReducers } from 'redux';

import recipesReducer from './recipes';

// combiner les reducers pour former le reducer transmit à store
const rootReducer = combineReducers({
  // nomDuFragmentDeState: reducerQuiSEnCharge
  recipes: recipesReducer,
});

export default rootReducer;
