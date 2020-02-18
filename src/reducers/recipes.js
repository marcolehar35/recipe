// Action Types

// Data statiques : temporaire
import recipesData from 'src/data';

// Initial State
// state.recipes....
const initialState = {
  loading: false,
  list: recipesData,
};

// Reducer
const recipesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesReducer;
