import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import authReducer from './auth';

// combiner les reducers pour former le reducer transmit à store
const rootReducer = combineReducers({
  // nomDuFragmentDeState: reducerQuiSEnCharge
  recipes: recipesReducer,
  auth: authReducer,
});

export default rootReducer;
